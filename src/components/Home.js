import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function Home() {
  const { user, logout, loading } = useAuth();
  console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };
  if (loading) return <h1>loading</h1>;

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4 mt-20 text-center">
        <h1 className="text-xl mb-4">
          Bienvenido {user.displayName || user.email}
        </h1>
        <Link to="/products" style={{ textDecoration: "none", color: "white" }}>
          <button className="bg-red-500 hover:bg-red-600 rounded py-2 px-4 text-black mb-5 ">
            Ir a la seccion de productos
          </button>
        </Link>
        <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
