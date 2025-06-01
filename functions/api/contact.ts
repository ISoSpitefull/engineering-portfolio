interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export async function onRequestPost({ request }) {
  try {
    const data: ContactFormData = await request.json();

    // Here you would typically send the email using your preferred email service
    // For example, using SendGrid, Mailgun, or Cloudflare Email Workers
    
    // For now, we'll just return a success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message received successfully' 
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Internal server error' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
} 