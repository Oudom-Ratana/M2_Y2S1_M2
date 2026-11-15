
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{
  params,
  searchParams
}:{
  params: Promise<{id:number | string}>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}){

  const {id} = await params;
  console.log(`===> ProId: `, id)

  const {category =''} = await searchParams;
  if(!category){

    const response = await fetch(`${process.env.DUMMY_BASE_URL}/products/${id}`);
    const product = await response.json();
    console.log(`===> Product: `, product);
    
    return NextResponse.json(product);
  }else{
    const response = await fetch(`${process.env.DUMMY_BASE_URL}/products/categories/${category}`);
    const product = await response.json();
    console.log(`===> Product: `, product);
    
    return NextResponse.json(product);
  }

}