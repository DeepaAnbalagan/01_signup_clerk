import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-6 bg-blue-300 z-50">
      {/* Logo */}
      <div className="text-5xl font-bold">
        <span className="text-blue-600">gen</span>infinity™
      </div>
      {/* Navigation Links */}
      <nav className="flex space-x-6 text-lg">
        <a href="#vision" className="hover:text-blue-600">
          Our Vision
        </a>
        <a href="#how-it-works" className="hover:text-blue-600">
          How It Works
        </a>
        <a href="#gen-arena" className="hover:text-blue-600">
          GenArena
        </a>
        <a href="#pricing" className="hover:text-blue-600">
          Pricing
        </a>
        <SignedOut>
          <SignInButton>
            <a className="bg-green-400 text-black px-4 py-2 rounded-full hover:bg-green-500">
              Sign In
            </a>
          </SignInButton>
          <SignUpButton>
            <a className="bg-green-400 text-black px-4 py-2 rounded-full hover:bg-green-500">
              Sign Up
            </a>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
}
