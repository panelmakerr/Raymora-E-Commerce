import { NextResponse } from "next/server";
import { products } from "@/data/products";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const color = searchParams.get("color");

  let filtered = [...products];

  if (color && color !== "all") {
    filtered = filtered.filter((p) => p.color === color);
  }

  return NextResponse.json({
    products: filtered,
    total: filtered.length,
  });
}
