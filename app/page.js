'use client'
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Home() {

  return (
    <div>
<LoginLink postLoginRedirectURL="/dashboard">Sign in</LoginLink>

      <RegisterLink>Sign up</RegisterLink>
    </div>
  );
}
