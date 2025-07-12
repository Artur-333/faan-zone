import { NextResponse } from "next/server";


export async function GET() {
    const data = {
      imgs: [
        {
          id: 1,
          img: "/img/yerevan-city.jpg"
        },
        {
          id: 2,
          img: "/img/coca-cola.jpg"
        },
        {
          id: 3,
          img: "/img/parma.jpg"
        },
        
        {
          id: 4,
          img: "/img/armenian-wine.jpg"
        }
      ]
    
  };

  return NextResponse.json(data);
}