import { LayerGroup } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { Auth } from "../../auth/auth";

export async function GET(request: Request, context: any) {
    const {params} = context;
    const prisma = new PrismaClient();
    const layerGroup = await prisma.layerGroup.findFirst({
        where: {
            id: params.id
        },
        include: {
            layers:true
        }
    })

    return NextResponse.json({
        layerGroup
    })
}

export async function PUT(request: Request, context: any) {
    if(!Auth(request)){ //protected endpoint
        return NextResponse.json({
            message: "Not Authorized",
            error: "Auth Token Invaild",
        }, {status: 401});
      }
    const { params } = context;
    const LayerrGroup: LayerGroup = await request.json()
    const prisma = new PrismaClient();
    const layer = await prisma.layerGroup.update({
        where: {
            id: params.id
        },
        data: {
            name: LayerrGroup.name,
            layerSectionId: LayerrGroup.layerSectionId,
            longitude: LayerrGroup.longitude,
            latitude: LayerrGroup.latitude,
            zoom: LayerrGroup.zoom,
            bearing: LayerrGroup.bearing,
            topLeftBoundLatitude: LayerrGroup.topLeftBoundLatitude,
            topLeftBoundLongitude: LayerrGroup.topLeftBoundLongitude,
            bottomRightBoundLatitude: LayerrGroup.topLeftBoundLatitude,
            bottomRightBoundLongitude: LayerrGroup.bottomRightBoundLongitude,
            zoomToBounds: LayerrGroup.zoomToBounds,
            infoId: LayerrGroup.infoId ?? ''
        }
    })

    return NextResponse.json({
        layer
    })
}

export async function DELETE(request: Request, context: any) {
    if(!Auth(request)){ //protected endpoint
        return NextResponse.json({
            message: "Not Authorized",
            error: "Auth Token Invaild",
        }, {status: 401});
      }
    const {params} = context;
    const prisma = new PrismaClient();
    await prisma.layerGroup.delete({
        where:{
            id: params.id
        }
    })

    return NextResponse.json({
        message: "deleted"
    })
}