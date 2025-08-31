export const otpEmail = (otp) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title></title>
  <style>
    /* General Reset */
    body, table, td, p {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }

    /* Responsive styles */
    @media screen and (max-width: 480px) {
      .container {
        width: 100% !important;
        padding: 15px !important;
      }
      h2 {
        font-size: 18px !important;
      }
      p {
        font-size: 14px !important;
        line-height: 20px !important;
      }
      .otp {
        font-size: 18px !important;
        padding: 10px 16px !important;
        letter-spacing: 3px !important;
      }
      .footer {
        font-size: 12px !important;
      }
    }
  </style>
</head>
<body style="margin:0; padding:0; background:#f5f5f5; font-family: Arial, sans-serif;">

  <!-- Wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0; background:#f5f5f5;">
    <tr>
      <td align="center">

        <!-- Container -->
        <table role="presentation" cellpadding="0" cellspacing="0" class="container"
          style="width:100%; max-width:500px; background:#ffffff; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1); overflow:hidden;">

          <!-- Header -->
          <tr>
            <td align="center" style="padding:30px 20px 10px;">
              <img src="https://res.cloudinary.com/dtvvh0xts/image/upload/Logo_krtasl.png" 
                  alt="Logo" width="100" height="100" 
                  style="display:block; border-radius:50%; pointer-events:none;"
                  oncontextmenu="return false;" />
              <h2 style="margin:15px 0 0; font-size:22px; color:#3d3358;">OTP Verification</h2>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:20px; color:#564d6d; font-size:15px; line-height:22px;">
              <p style="margin:0 0 15px;">Hello <strong>User</strong>,</p>
              <p style="margin:0 0 15px;">
                Use the One-Time Password (OTP) below to complete your verification process.
              </p>
              
              <!-- OTP Code -->
              <p style="text-align:center; margin:25px 0;">
                <span class="otp" style="display:inline-block; background:#7747FF; color:#ffffff; font-weight:bold; font-size:20px; letter-spacing:5px; padding:12px 20px; border-radius:8px;">
                  ${otp}
                </span>
              </p>

              <p style="margin:0 0 15px;">
                This OTP is valid for <strong>10 minutes</strong>. Please do not share it with anyone.
              </p>

              <!-- Note -->
              <p style="margin:20px 0 0; font-size:13px; color:#888; line-height:18px;">
                If you didn’t request this code, you can safely ignore this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" class="footer" style="padding:20px; background:#f9f9f9; font-size:13px; color:#777;">
              <p style="margin:0;">Thank you,</p>
              <p style="margin:5px 0 0;">
                <a href="https://calebdesigns.vercel.app/" target="_blank" style="color:#7747FF; text-decoration:none; font-weight:600;">
                  Mercy’s Delight Kitchen
                </a>
              </p>
            </td>
          </tr>

        </table>
        <!-- End Container -->

      </td>
    </tr>
  </table>
  <!-- End Wrapper -->

</body>
</html>

`;

  return html;
};
