import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4">404</h1>

        <p className="text-gray-400 mb-8 text-lg">
          The page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;