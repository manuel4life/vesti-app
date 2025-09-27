// pages/login.tsx
import Image from "next/image";
import Link from "next/link";
import { ILLUSTRATION } from "../constants";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left: Form */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white px-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">
            Welcome back!
          </h1>
          <p className="text-gray-300 mb-6 font-bold">Sign in to continue</p>

          <form className="space-y-4 text-gray-700">
            <div>
              <label className="block text-sm  mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-accent hover:underline text-[#01bfa5]"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white py-2 rounded-lg hover:bg-accent/90 transition bg-[#01bfa5]"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm mt-6 text-black">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-accent hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden md:flex flex-1 bg-accent/5 justify-center items-center bg-gray-100">
        <Image
          src={ILLUSTRATION}
          alt="Login Illustration"
          width={600}
          height={5000}
          className="object-contain"
        />
      </div>
    </div>
  );
}
