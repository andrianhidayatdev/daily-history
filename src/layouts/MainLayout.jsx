import { Link,Outlet } from "react-router-dom";


export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-50">
      {/* Navbar */}
      <nav className="fixed top-4 bg-white/30 backdrop-blur-lg px-8 py-3 rounded-2xl shadow-lg flex gap-8 justify-center items-center">
        <Link to="/master" className="text-blue-700 font-medium hover:text-blue-900">Master</Link>
        <Link className="text-blue-700 font-medium hover:text-blue-900">Task</Link>
        <Link className="text-blue-700 font-medium hover:text-blue-900">Transaction</Link>
        <Link className="text-blue-700 font-medium hover:text-blue-900">History Trading</Link>
        <Link className="text-blue-700 font-medium hover:text-blue-900">Notes</Link>
      </nav>

        <div className="mt-24 w-full flex justify-center">
        <Outlet />
      </div>
    </div>
  );
}
