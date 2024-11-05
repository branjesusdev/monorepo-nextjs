import type { FC, ReactNode } from 'react';
import DashboardSidebar from '@/layouts/dashboard/DashboardSidebar';


export const DashboardLayout: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;
  return (
    <aside className="flex h-screen flex-col">
      <DashboardSidebar />
      {children}
    </aside>
  );
};
