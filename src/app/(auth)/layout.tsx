import type { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid min-h-screen place-items-center p-4 pt-10 pb-10">
      {children}
    </div>
  );
};

export default AuthLayout;