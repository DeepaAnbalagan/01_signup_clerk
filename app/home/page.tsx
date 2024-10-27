"use client";
import { useSignUp, useUser } from "@clerk/nextjs";

function Home() {
  const { user, isSignedIn } = useUser();
  console.log(user, isSignedIn);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <h1 className="text-4xl font-bold mb-4">
        Welcome,
        {isSignedIn ? user?.primaryEmailAddress?.emailAddress : "not signed"}
      </h1>
    </div>
  );
}

export default Home;
