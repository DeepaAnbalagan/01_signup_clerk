import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "./components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geninfinity",
  description: "This is a social media app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* <body className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-900 via-purple-800 to-blue-700 text-white">? */}
        <body className="flex flex-col min-h-screen">
          <Header />
          {/* Main Content */}
          <main className="flex-1 p-1 bg-blue-100 text-black pt-24">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
