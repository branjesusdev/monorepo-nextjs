
import { LoginForm } from '@/features/auth/components/LoginForm';

export const LoginPage = () => {
  const redirectToPage = '/dashboard/banking';
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <LoginForm redirectToPage={redirectToPage} />
      </div>
    </>
  );
};
