// import { NextResponse } from "next/server"

// export async function POST(request){
//     let data = await request.json();
//     console.log(data)
//     return NextResponse.json({success:"true",data})

// }

import { NextResponse } from "next/server"
export async function POST(request){
    let data = await request.json()
    console.log(data)
    return NextResponse.json({succes:"true",data,uderstanding:"Little Bit"})
}