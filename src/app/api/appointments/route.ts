import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const appointmentSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(10),
  branch: z.string().min(1),
  service: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  notes: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = appointmentSchema.parse(body);

    console.log("New appointment booking:", validatedData);

    // Store in local database or connect to external API
    // Example external: await fetch('https://your-api.com/appointments', { ... })
    
    // For now, simulate successful booking
    return NextResponse.json(
      {
        success: true,
        message: "Appointment booked successfully! We'll contact you shortly.",
        data: {
          id: `APT-${Date.now()}`,
          ...validatedData,
          createdAt: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Invalid form data", errors: error.errors },
        { status: 400 }
      );
    }

    console.error("Appointment booking error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to book appointment. Please try again." },
      { status: 500 }
    );
  }
}