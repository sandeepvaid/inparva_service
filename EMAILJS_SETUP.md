# EmailJS Setup Guide

Follow these steps to configure EmailJS for your contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the provider-specific setup instructions
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Enquiry from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Service Interested In: {{service}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

4. Save the template
5. Note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `abc123XYZ-_`)
3. Copy this key

## Step 5: Update Configuration

Open `src/pages/EnquiryFormSection.jsx` and replace these lines (around line 86-88):

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

Example:
```javascript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'abc123XYZ-_';
```

## Step 6: Test the Form

1. Run your development server: `npm run dev`
2. Navigate to the contact form section
3. Fill out and submit a test enquiry
4. Check your email inbox for the message
5. Verify all fields are appearing correctly

## Troubleshooting

### Email Not Receiving
- Check spam/junk folder
- Verify Service ID, Template ID, and Public Key are correct
- Ensure email service is connected properly in EmailJS dashboard
- Check browser console for errors

### Form Validation Issues
- Ensure all required fields are filled
- Check email format is valid
- Verify phone number format

### Rate Limiting
- Free plan: 100 emails/month
- Upgrade to paid plan if needed: [https://www.emailjs.com/pricing](https://www.emailjs.com/pricing)

## Security Notes

⚠️ **Important:** 
- Never commit your EmailJS credentials to public repositories
- Consider using environment variables for production
- EmailJS public key is safe to use in frontend code (it's rate-limited)

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

