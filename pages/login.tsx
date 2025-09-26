import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#01bfa5]">
          Login to Vesti
        </h1>

        <form className="space-y-4 text-gray-700">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#01bfa5] focus:border-[#01bfa5]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#01bfa5] focus:border-[#01bfa5]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#01bfa5] hover:bg-[#01bfa5]/90 text-white px-4 py-2 rounded-md font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-[#01bfa5] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
