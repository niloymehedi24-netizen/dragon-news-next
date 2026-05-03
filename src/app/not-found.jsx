import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-gray-500">
        Sorry, we couldn’t find the page you’re looking for.
      </p>

      <Link
        href="/"
        className="mt-6 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Go Home
      </Link>
    </div>
  );
}
