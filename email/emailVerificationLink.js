export const emailVerificationLink = (link) => {
  const html = `
<!DOCTYPE html>
<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <!-- ✅ Important for mobile scaling -->
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
  
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: "Manrope", sans-serif;
    }

    body {
      background: #f5f5f5;
      padding: 20px;
    }

    .wrapper {
      max-width: 800px;
      width: 100%;
      min-height: auto;
      padding: 40px 60px;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 30px;
      margin: 0 auto;
    }

    .email-container {
      padding: 20px;
      width: 100%;
      max-width: 600px;
      background: #fff;
      box-shadow: 0px 10px 20px rgba(15, 15, 15, 0.2);
      border-radius: 10px;
      margin: 0 auto;
    }

    .email--head {
      margin-bottom: 12px;
    }

    .head-icon {
      width: 120px;
      height: 120px;
    }

    h3.email--subject {
      text-align: center;
      font-size: 22px;
      line-height: 26px;
      color: #3d3358;
      padding: 14px 0 20px 0;
      border-bottom: 1px solid #e7e6eb;
    }

    .greeting {
      font-size: 16px;
      line-height: 22px;
      color: #564d6d;
      margin: 15px 0 10px;
    }

    .client-name {
      font-weight: 700;
    }

    .email-content {
      font-size: 14px;
      line-height: 20px;
      color: #564d6d;
      margin-bottom: 15px;
    }

    .action-btn {
      border-radius: 50px;
      font-weight: bold;
      font-size: 15px;
      text-align: center;
      color: #ffffff;
      padding: 14px 28px;
      margin: 25px auto;
      background: #7747FF;
      border: none;
      display: inline-block;
      cursor: pointer;
      transition: 0.3s ease-in-out;
    }

    .action-btn:hover {
      background: #5e32e6;
    }

    .center {
      text-align: center;
    }

    .email-footer {
      font-size: 14px;
      font-weight: 600;
      margin-top: 20px;
      text-align: center;
    }

    .note {
      font-size: 13px;
      color: #564d6d;
      margin-top: 15px;
      line-height: 20px;
    }

    a.text-link {
      word-break: break-all;
      font-weight: 500;
      text-decoration: none;
      color: #1a63f4;
      display: block;
      margin-top: 8px;
    }

    /* ✅ Tablet screens */
    @media only screen and (max-width: 768px) {
      .wrapper {
        padding: 30px 20px;
        border-radius: 20px;
      }
      .email-container {
        padding: 15px;
      }
      .action-btn {
        width: 100%;
        padding: 14px 0;
        font-size: 16px;
      }
    }

    /* ✅ Mobile screens */
    @media only screen and (max-width: 480px) {
      body {
        padding: 10px;
      }
      .wrapper {
        padding: 20px 12px;
        border-radius: 15px;
      }
      h3.email--subject {
        font-size: 18px;
      }
      .greeting, .email-content, .note {
        font-size: 13px;
        line-height: 19px;
      }
      .action-btn {
        font-size: 14px;
        padding: 12px 0;
      }
      .head-icon {
        width: 100px;
        height: 100px;
      }
    }
  </style>
</head>

<body>
  <div class='wrapper'>
    <div class='email-container'>
      <div class='email--head center'>
        <img src="https://res.cloudinary.com/dtvvh0xts/image/upload/Logo_krtasl.png" 
        class="head-icon" 
        alt="mercysdelightkitchen_Logo" 
        oncontextmenu="return false;" 
        style="pointer-events:none;" />
        <h3 class='email--subject'>Email Verification</h3>
      </div>
      <div class='email--body'>
        <div class='greeting'>
          Hello <span class='client-name'>User</span>,
        </div>
        <div class='email-content'>
          We received a request to verify your identity. Complete your verification by clicking the button below:
        </div>

        <div class='center'>
          <a href="${link}">
            <button class='action-btn'>Verify Email</button>
          </a>
        </div>

        <div class='email-content'>
          If the button above doesn’t work, copy and paste this link into your browser:
        </div>
        <a href='${link}' class='text-link'>${link}</a>

        <div class='note'>
          <strong>Note:</strong> This link will expire in 1 hour. If you did not create an account, you can safely ignore this email.
        </div>

        <div class='email-footer'>
          <div>Thank you,</div>
          <div><a href="https://calebdesigns.vercel.app/" target="_blank">Developer Caleb</a></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>

      `;

  return html;
};
