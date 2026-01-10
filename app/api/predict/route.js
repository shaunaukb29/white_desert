import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  // Call HF Space API
  const res = await fetch(
    "https://hf.space/embed/CastBison/golden_seas/api/predict",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  const result = await res.json();
  return NextResponse.json(result);
}
