
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: number | string }> }
) {
  const { id } = await params;



 
    const baseUrl = process.env.DUMMY_BASE_URL;
    const endpoint = 
       `${baseUrl}/products/${id}`;

    const response = await fetch(endpoint);

    const product = await response.json();
    return NextResponse.json(product);
  

}
