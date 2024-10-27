"use client";
import { SignIn, SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  function handleSignUp() {
    const router = useRouter();
    router.push("/sign-in");
  }
  return (
    <div className="flex justify-center items-center">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        forceRedirectUrl="/complete-profile"
      />
    </div>
  );
}
