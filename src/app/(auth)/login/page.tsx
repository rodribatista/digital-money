import {Suspense} from "react";
import {LoginForm} from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <Suspense>
      <LoginForm/>
    </Suspense>
  );
}

export default LoginPage;
