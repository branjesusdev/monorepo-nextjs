import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const useAuth = ({ redirectToPage }: { redirectToPage?: string } = {}) => {
  const router = useRouter();

  return useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (!result?.ok) {
        throw new Error('Authentication failed');
      }
    },
    onSuccess: () => {
      router.push(redirectToPage || '/');
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });
};