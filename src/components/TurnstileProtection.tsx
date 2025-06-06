import { useEffect, useState } from 'react';
// Remove the @turnstile/react import and use the window object type
declare global {
  interface Window {
    turnstile: any;
  }
}

interface TurnstileProtectionProps {
  children: React.ReactNode;
}

export function TurnstileProtection({ children }: TurnstileProtectionProps) {
  const [token, setToken] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);
  const [widgetId, setWidgetId] = useState<string | null>(null);

  useEffect(() => {
    // Load the Turnstile script
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.turnstile) {
        const widgetId = window.turnstile.render('#turnstile-container', {
          sitekey: '0x4AAAAAABgNhnOWl1-sAgWX',
          callback: (token: string) => {
            setToken(token);
          },
          theme: 'light',
          size: 'invisible'
        });
        setWidgetId(widgetId);
      }
    };

    return () => {
      if (widgetId && window.turnstile) {
        window.turnstile.remove(widgetId);
      }
      document.head.removeChild(script);
    };
  }, []);

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
          <div id="turnstile-container"></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
} 