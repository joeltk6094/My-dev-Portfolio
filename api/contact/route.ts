import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  })
}

// Email template
const createEmailTemplate = (name: string, email: string, message: string, reason: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #4a5568; }
        .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #e2e8f0; margin-top: 5px; }
        .reason-badge { 
          display: inline-block; 
          padding: 5px 12px; 
          border-radius: 20px; 
          font-size: 12px; 
          font-weight: bold;
          margin-top: 5px;
        }
        .reason-business { background: #f3e8ff; color: #7c3aed; }
        .reason-hello { background: #dcfce7; color: #16a34a; }
        .reason-collaboration { background: #fed7aa; color: #ea580c; }
        .reason-hire { background: #fce7f3; color: #db2777; }
        .footer { background: #1f2937; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 New Contact Form Submission</h1>
          <p>You've received a new message through your portfolio website!</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">👤 Name:</div>
            <div class="value">${name}</div>
          </div>
          
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value">${email}</div>
          </div>
          
          <div class="field">
            <div class="label">🎯 Reason for Contact:</div>
            <div class="reason-badge ${getReasonsClass(reason)}">${reason}</div>
          </div>
          
          <div class="field">
            <div class="label">💬 Message:</div>
            <div class="value">${message.replace(/\n/g, "<br>")}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>📅 Received: ${new Date().toLocaleString()}</p>
          <p>Reply directly to this email to respond to ${name}</p>
        </div>
      </div>
    </body>
    </html>
  `
}

const getReasonsClass = (reason: string) => {
  if (reason.includes("frontend developer") || reason.includes("hire")) return "reason-business"
  if (reason.includes("hello")) return "reason-hello"
  if (reason.includes("collaboration")) return "reason-collaboration"
  if (reason.includes("hire you")) return "reason-hire"
  return "reason-business"
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    const { name, email, message, reason } = body

    // Validate required fields
    if (!name || !email || !message || !reason) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields. Please fill in all fields.",
        },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 },
      )
    }

    // Check for environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error("Missing email configuration environment variables")
      return NextResponse.json(
        {
          success: false,
          error: "Email service is temporarily unavailable. Please try again later.",
        },
        { status: 500 },
      )
    }

    // Create transporter
    const transporter = createTransporter()

    // Verify transporter configuration
    await transporter.verify()

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: "joelthomas6094@gmail.com",
      replyTo: email,
      subject: `🚀 New Contact: ${reason} - ${name}`,
      html: createEmailTemplate(name, email, message, reason),
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Reason: ${reason}
Message: ${message}

Received: ${new Date().toLocaleString()}
      `.trim(),
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    console.log("Email sent successfully:", info.messageId)

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully! I'll get back to you soon. ✨",
    })
  } catch (error) {
    console.error("Email sending error:", error)

    // Handle specific error types
    let errorMessage = "Failed to send message. Please try again later."

    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        errorMessage = "Email service configuration error. Please contact support."
      } else if (error.message.includes("Network")) {
        errorMessage = "Network error. Please check your connection and try again."
      } else if (error.message.includes("timeout")) {
        errorMessage = "Request timeout. Please try again."
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 },
    )
  }
}
