import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import Lead from "@/app/models/Lead";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    console.log("BODY RECEIVED:", body);

    const lead = await Lead.create(body);

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully",
      data: lead,
    });
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
        error: error instanceof Error ? error.message : "Unknown Error",
      },
      { status: 500 }
    );
  }
}