import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ categoryName: string }> }
) {
  const { categoryName } = await params;


  const res = await fetch(
    `${process.env.DUMMY_BASE_URL}/products/category/${categoryName}`
  );
  const data = await res.json();
  return NextResponse.json(data.products);

  }
