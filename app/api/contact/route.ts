import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Strict validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please enter a message with at least 10 characters." },
        { status: 400 }
      );
    }

    // Sanitize
    const cleanData = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 150),
      subject: (subject || "Portfolio Contact Inquiry").trim().slice(0, 150),
      message: message.trim().slice(0, 3000),
      timestamp: new Date().toISOString(),
    };

    const resendApiKey = process.env.RESEND_API_KEY;

    // Option 1: Resend if API key is provided in environment
    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio <onboarding@resend.dev>",
          to: "samirao9372@gmail.com",
          subject: `Portfolio Inquiry: ${cleanData.subject} (${cleanData.name})`,
          text: `From: ${cleanData.name} <${cleanData.email}>\nSubject: ${cleanData.subject}\nDate: ${cleanData.timestamp}\n\nMessage:\n${cleanData.message}`,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Resend API failed:", errorText);
        throw new Error("Resend dispatch failed");
      }
    } else {
      // Option 2: FormSubmit.co direct email forwarder to samirao9372@gmail.com
      try {
        const fsRes = await fetch("https://formsubmit.co/ajax/samirao9372@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Referer": "https://muhammadsami.dev",
          },
          body: JSON.stringify({
            name: cleanData.name,
            email: cleanData.email,
            _subject: `New Portfolio Message: ${cleanData.subject}`,
            message: cleanData.message,
            _replyto: cleanData.email,
            _template: "table",
            _captcha: "false",
          }),
        });

        const fsData = await fsRes.json();
        console.log("[FORMSUBMIT RESPONSE]:", fsData);

        if (fsData && fsData.success === "false" && fsData.message?.includes("needs Activation")) {
          return NextResponse.json(
            {
              success: true,
              needsActivation: true,
              message:
                "Message received! Note: FormSubmit requires a one-time activation. Please check samirao9372@gmail.com to activate the form, or use the direct email link below.",
            },
            { status: 200 }
          );
        }
      } catch (err) {
        console.error("FormSubmit dispatch error:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent directly to Sami (samirao9372@gmail.com).",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        error:
          "Unable to send message automatically. Please email Sami directly at samirao9372@gmail.com.",
      },
      { status: 500 }
    );
  }
}
