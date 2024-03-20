import React from "react";

type AuthProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthProps) => {
  return <main className="auth">{children}</main>;
};

export default AuthLayout;
