import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";
import Lead from "../../models/Lead";

export async function POST(req: Request) {
  try {
    await connectDB();

    const data = await req.json();

    const lead = await Lead.create(data);

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully",
      lead,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}