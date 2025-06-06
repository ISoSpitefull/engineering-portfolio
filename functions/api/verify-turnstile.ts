import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { token } = request.body;

  if (!token) {
    return response.status(400).json({ error: 'Token is required' });
  }

  try {
    const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const outcome = await result.json();
    return response.status(200).json(outcome);
  } catch (error) {
    console.error('Turnstile verification failed:', error);
    return response.status(500).json({ error: 'Failed to verify token' });
  }
} 