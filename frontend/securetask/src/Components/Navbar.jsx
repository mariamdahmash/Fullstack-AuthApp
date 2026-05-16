import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

 function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

function handleLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");

  navigate("/login");
}

  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        <FontAwesomeIcon icon={faArrowRightToBracket} className="text-3xl" />
      

        <div className="flex gap-4">
          {!token? (
            <>
              <Link to="/login" className="hover:text-yellow-400">
                Login
              </Link>

              <Link to="/register" className="hover:text-yellow-400">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>

              <button
                onClick={handleLogout}
                className="cursor-pointer hover:text-red-400"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar