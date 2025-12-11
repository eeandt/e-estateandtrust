import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic ='force-dynamic'

export async function POST(request) {
  const data = await request.json();
  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.NEXT_PUBLIC_MY_EMAIL,
      pass: process.env.NEXT_PUBLIC_MY_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_MY_EMAIL,
    to: process.env.NEXT_PUBLIC_TO_EMAIL,
    cc: ["rebecca@e-estatesandtrusts.com","katina@e-estatesandtrusts.com"],
    subject: `Message from ${data.name} (${data.email})`,
    text: data.message,
    html: `
    <html>
    <head>
        <style>
            body {
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
    
      
            .details {
                padding-left: 20px;
                border-left: 2px solid #333333;
            }
            .details p {
                margin-bottom: 10px;
            }
        </style>
    </head>
    <body>
        <div class="container">
        <p>Hi,e-Estates & Trusts PLLC</p>
        <p>You have just recieved a new query. Here are the details:</p>
                <div class="details">
                <p>Name: <b>${data.name} </b></p>
                <p>Email :<b>${data.email}</b></p>
                <p>Mobile Number is :<b>${data.MobileNumber}</b></p>
                <p>Subject: <b>${data.subject}</b></p>
                <p>Message:<b> ${data.message}</b></p>
            </div>
        </div>
    </body>
    </html>
    `,
  };
  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
