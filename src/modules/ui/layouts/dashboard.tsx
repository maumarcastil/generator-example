import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <h1>Dashboard Layout</h1>
      <p>Welcome to the Dashboard Layout</p>

      {children}
    </>
  );
};

export default DashboardLayout;
