import { LoginPage } from "@/features/auth/pages/LoginPage";

export const metadata = {
  title: "Login",
  description: "Login page",
};

export default function RootLogin() {
  return (
    <>
      <LoginPage />
    </>
  );
}
