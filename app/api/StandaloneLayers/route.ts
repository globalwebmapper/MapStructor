import { LayerData, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { Auth } from "../auth/auth";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const standaloneLayers = await prisma.layerData.findMany({
            where: {
                standalone: true,
            },
            orderBy: {
            order: 'asc',
            },
        });

        return NextResponse.json({
            standaloneLayers,
        });
    } catch (error) {
        console.error('Error fetching standalone layers:', error);
        return NextResponse.json({
            message: "Error fetching standalone layers",
            error: (error as Error).message,
        }, { status: 500 });
    }
}

export async function POST(request: Request) {
    console.log("made it into standalone post");
    if (!Auth(request)) { // protected endpoint
        return NextResponse.json({
            message: "Not Authorized",
            error: "Auth Token Invalid",
        }, { status: 401 });
    }

    const layerData: LayerData = await request.json();
    const idx = await prisma.layerData.count({
        where: {
            standalone: true,
        },
    }) + 1;

    const viewIdx = await prisma.layerData.count({});

    try {
        const newLayer = await prisma.layerData.create({
            data: {
                name: layerData.name,
                iconColor: layerData.iconColor,
                iconType: layerData.iconType,
                label: layerData.label,
                longitude: layerData.longitude,
                latitude: layerData.latitude,
                zoom: layerData.zoom,
                bearing: layerData.bearing,
                topLayerClass: layerData.topLayerClass,
                infoId: layerData.infoId,
                type: layerData.type,
                sourceType: layerData.sourceType,
                sourceUrl: layerData.sourceUrl,
                sourceId: layerData.sourceId,
                paint: layerData.paint,
                layout: layerData.layout,
                sourceLayer: layerData.sourceLayer,
                hover: layerData.hover,
                time: layerData.time,
                click: layerData.click,
                hoverStyle: layerData.hoverStyle,
                clickStyle: layerData.clickStyle,
                clickHeader: layerData.clickHeader,
                hoverContent: layerData.hoverContent,
                order: idx,
                viewOrder: viewIdx + 1,
                standalone: true, // Ensure standalone is set to true
                layerSection: layerData.layerSection,
            },
        });

        console.log('New layer created:', newLayer);

        return NextResponse.json({
            newLayer,
        });
    } catch (error) {
        console.error('Error creating standalone layer:', error);
        return NextResponse.json({
            message: "Error creating standalone layer",
            error: (error as Error).message,
        }, { status: 500 });
    }
}