import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const appointmentSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
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

    console.log("Submitting appointment booking to backend...");

    const phpBackendUrl = "http://localhost:4000/api/appointments.php";
    
    const backendPayload = {
      name: validatedData.fullName,
      email: validatedData.email,
      phone: validatedData.phone,
      preferred_date: validatedData.date,
      preferred_time: validatedData.time,
      service_requested: validatedData.service + ' (' + validatedData.branch + ')',
      notes: validatedData.notes || ''
    };

    const backendResponse = await fetch(phpBackendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(backendPayload)
    });

    if (!backendResponse.ok) {
      throw new Error(`Backend responded with status ${backendResponse.status}`);
    }

    const result = await backendResponse.json();

    return NextResponse.json(
      {
        success: true,
        message: "Appointment booked successfully! We'll contact you shortly.",
        data: result,
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