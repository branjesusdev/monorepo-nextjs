import { MainLayout } from "@/layouts/main";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout children={children}></MainLayout>
  );
}
