import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 text-6xl font-bold text-[#4F3890]">404</h1>
        <h2 className="mb-8 text-3xl font-medium">Page Not Found</h2>
        <p className="mb-8 text-lg text-gray-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 text-base font-semibold bg-gradient-to-r from-[#4F3890] via-[#8760F6] to-[#4CD6E9] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
