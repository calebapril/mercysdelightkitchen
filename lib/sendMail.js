// import nodemailer from 'nodemailer'
// export const sendMail = async (subject, receiver, body) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.NODEMAILER_HOST,
//     post: process.env.NODEMAILER_PORT,
//     secure: false,
//     auth: {
//         user: process.env.NODEMAILER_EMAIL,
//         pass: process.env.NODEMAILER_PASSWORD,
//     }
//   })

//   const options = {
//     from: `"Mercy's Delight Kitchen" <${process.env.NODEMAILER_EMAIL}>`,
//     to: receiver,
//     subject: subject,
//     html: body,
//   }

//   try {
//     await transporter.sendMail(options)
//     return {success: true}
//   } catch (error) {
//     return {success: false, message: error.message}
//   }
// }





//NEW VERSION
import nodemailer from "nodemailer";

// create transporter once
const transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,       // e.g. "smtp.gmail.com"
  port: process.env.NODEMAILER_PORT,       // 465 or 587
  secure: process.env.NODEMAILER_PORT == 465, // true for 465, false for 587
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD, // App Password if Gmail
  },
  pool: true,              // ✅ keep connection alive
  maxConnections: 5,       // ✅ reuse up to 5
  maxMessages: 100,        // ✅ send multiple emails per connection
});

export const sendMail = async (subject, receiver, body) => {
  const options = {
    from: `"Mercy's Delight Kitchen" <${process.env.NODEMAILER_EMAIL}>`,
    to: receiver,
    subject,
    html: body,
  };

  try {
    transporter.sendMail(options); // still await if you need result
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};


