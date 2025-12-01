// Stop here 

// AI - write_up
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/databaseConnection";
import MediaModel from "@/models/Media.model"; // adjust the model path

export async function PUT(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { _id, alt, title } = body;

    if (!_id || !alt || !title) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const updatedMedia = await MediaModel.findByIdAndUpdate(
      _id,
      { alt, title },
      { new: true }
    );

    if (!updatedMedia) {
      return NextResponse.json(
        { success: false, message: "Media not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Media updated successfully.",
      data: updatedMedia,
    });
  } catch (error) {
    console.error("Update Media Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error." },
      { status: 500 }
    );
  }
}
