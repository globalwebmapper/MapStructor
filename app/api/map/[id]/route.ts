import { PrismaClient, Map } from "@prisma/client";
import { NextResponse } from "next/server";
import { Auth } from "../../auth/auth";

const prisma = new PrismaClient();

export async function GET(request: Request, context: any) {

    const {params} = context;

    try {
      
      const maps = await prisma.map.findFirst({
        where: {id: params.id}
      });

      return NextResponse.json({
        maps
      });
    } catch (e) {
      throw(e);
    }
}

export async function PUT(request: Request, context: any) {
  if(!Auth(request)){ //protected endpoint
    return NextResponse.json({
        message: "Not Authorized",
        error: "Auth Token Invaild",
    }, {status: 401});
  }
  const {params} = context;
  const inmap = await request.json();

  try {
    
    const maps = await prisma.map.update({
      where: {id: params.id},
      data: {
        mapId: inmap.mapId,
        longitude: inmap.longitude,
        latitude: inmap.latitude,
        mapName: inmap.mapName,
        zoom: inmap.zoom,
        bearing: inmap.bearing,
        topLeftBoundLatitude: inmap.topLeftBoundLatitude,
        topLeftBoundLongitude: inmap.topLeftBoundLongitude,
        bottomRightBoundLatitude: inmap.topLeftBoundLatitude,
        bottomRightBoundLongitude: inmap.bottomRightBoundLongitude,
        zoomToBounds: inmap.zoomToBounds,
        styleId: inmap.styleId,
        groupId: inmap.groupId,
        infoId: inmap.infoId,
      }
    });

    return NextResponse.json({
      message: "Success",
      maps
    });
  } catch (e) {
    throw(e);
  }
}

export async function DELETE(request: Request, context: any) {
  if(!Auth(request)){ //protected endpoint
    return NextResponse.json({
        message: "Not Authorized",
        error: "Auth Token Invaild",
    }, {status: 401});
  }
  const {params} = context;


  await prisma.map.delete({
      where:{
          id: params.id
      }
  });

  return NextResponse.json({
      message: "successful"
  });
}