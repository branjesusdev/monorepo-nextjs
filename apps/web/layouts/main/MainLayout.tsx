import type { ReactNode } from 'react';
import { MainFooter } from './MainFooter';

export const MainLayout = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <div className="flex h-screen flex-col p-5">
      <main>{children}</main>
      <MainFooter />
    </div>
  );
};
