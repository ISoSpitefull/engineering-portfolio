import { useCallback } from 'react';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export const useRecaptcha = () => {
  const executeRecaptcha = useCallback(async (action: string) => {
    try {
      const token = await new Promise<string>((resolve, reject) => {
        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha.execute(
              '6LdRbVcrAAAAALH1mfChwt9gfFEN58GC7XjGM0kF',
              { action }
            );
            resolve(token);
          } catch (error) {
            reject(error);
          }
        });
      });
      return token;
    } catch (error) {
      console.error('reCAPTCHA error:', error);
      throw error;
    }
  }, []);

  return { executeRecaptcha };
};