import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { Auth } from "../auth/auth";


export async function GET() {
 const prisma = new PrismaClient();
 const layer = (await (prisma as any).layer.findMany());
 
 return NextResponse.json({
    layer
 })
}

export async function POST(request: Request) {
    if(!Auth(request)){ //protected endpoint
        return NextResponse.json({
            message: "Not Authorized",
            error: "Auth Token Invaild",
        }, {status: 401});
      }
    const Layer = await request.json()
    const prisma = new PrismaClient();
    await (prisma as any).layer.create({
        data: {
            layerName: Layer.layerName,
            sectionName: Layer.sectionName,
            sourceUrl: Layer.sourceUrl,
            type:Layer.type,
            paint:Layer.paint,
            sourceType:Layer.sourceType,
            sourceId:Layer.sourceId,
            sourceLayer:Layer.sourceLayer
        },
    })
    return NextResponse.json({
        message: "Success"
    })
}