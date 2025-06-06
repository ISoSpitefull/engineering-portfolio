import { useEffect, useState } from 'react';
import { Turnstile } from '@turnstile/react';

interface TurnstileProtectionProps {
  children: React.ReactNode;
}

export function TurnstileProtection({ children }: TurnstileProtectionProps) {
  const [token, setToken] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (token) {
      verifyToken(token);
    }
  }, [token]);

  const verifyToken = async (token: string) => {
    try {
      const response = await fetch('/api/verify-turnstile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      
      const data = await response.json();
      if (data.success) {
        setVerified(true);
      }
    } catch (error) {
      console.error('Failed to verify token:', error);
    }
  };

  if (!verified) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl mb-4">Verifying you're human...</h2>
          <Turnstile
            sitekey="0x4AAAAAABgNhnOWl1-sAgWX" // Replace with your actual site key
            onSuccess={setToken}
            options={{
              theme: 'light',
              size: 'invisible'
            }}
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
} 