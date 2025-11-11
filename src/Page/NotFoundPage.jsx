import { Helmet } from "react-helmet";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <Helmet>
        <title>404 – Page Not Found | EarWeGo</title>
        <meta
          name="description"
          content="The page you’re looking for couldn’t be found."
        />
      </Helmet>
      <h1 className="text-5xl font-bold mb-4 text-[#43AA8B]">404</h1>
      <p className="text-lg text-[#4B5563] mb-6">
        Sorry, this page doesn’t exist or has moved.
      </p>
      <a
        href="/"
        className="text-white bg-[#43AA8B] hover:bg-[#318F6F] rounded-md px-6 py-3 font-medium"
      >
        Back to Home
      </a>
    </div>
  );
}
