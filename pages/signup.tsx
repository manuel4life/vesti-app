import Link from "next/link";
import { ILLUSTRATION } from "../constants";
import Image from "next/image";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col justify-center items-center bg-white px-8">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-extrabold text-center mb-6 text-[#01bfa5]">
            Create Your Account
          </h1>

          <form className="space-y-4 text-gray-700">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full name
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2  border-gray-300 rounded-md shadow-sm focus:ring-[#01bfa5] focus:border-[#01bfa5]"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full p-2  border-gray-300 rounded-md shadow-sm focus:ring-[#01bfa5] focus:border-[#01bfa5]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                className="mt-1 block w-full p-2  border-gray-300 rounded-md shadow-sm focus:ring-[#01bfa5] focus:border-[#01bfa5]"
                placeholder="0245679093"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full p-2  border-gray-300 rounded-md shadow-sm focus:ring-[#01bfa5] focus:border-[#01bfa5]"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm
              </label>
              <input
                type="password"
                className="mt-1 block w-full p-2  border-gray-300 rounded-md shadow-sm focus:ring-[#01bfa5] focus:border-[#01bfa5]"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#01bfa5] hover:bg-[#01bfa5]/90 text-white px-4 py-2 rounded-md font-semibold"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-[#01bfa5] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden md:flex flex-1 bg-accent/5 justify-center items-center bg-gray-100">
        <Image
          src={ILLUSTRATION}
          alt="Login Illustration"
          width={600}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
  );
}
