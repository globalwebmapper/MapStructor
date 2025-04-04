import { PrismaClient} from "@prisma/client";
import { NextResponse } from "next/server";
import { MapGroup } from "@prisma/client";
import { Auth } from "../auth/auth";

const prisma = new PrismaClient();

export async function GET(request:Request) {

  const groups = (await prisma.mapGroup.findMany({
    include: {
        maps:true
    }
  }))

return NextResponse.json({
    groups
})

}

export async function POST(request:Request) {
  if(!Auth(request)){ //protected endpoint
    return NextResponse.json({
        message: "Not Authorized",
        error: "Auth Token Invaild",
    }, {status: 401});
  }

  const inputmapGroup:MapGroup = await request.json();

  if(!inputmapGroup.groupName || !inputmapGroup.label){
    console.log("ERROR: Missing data");
    return NextResponse.json({
        message: "Missing data",
        error: "Missing data",
    }, { status: 400 });
  }

  try{
    const newMapGroup = await prisma.mapGroup.create({
      data: {
        groupName: inputmapGroup.groupName,
        label: inputmapGroup.label,
      }
    })

    return NextResponse.json({
      newMapGroup
    })
  }
  catch(e){
    throw(e);
  }
}