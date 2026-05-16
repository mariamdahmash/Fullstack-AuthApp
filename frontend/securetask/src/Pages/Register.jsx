import { useState } from "react";
import { registerUser } from "../services/authService";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../Components/FormInput";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

async function handleSubmit(e) {
  e.preventDefault();

  try {
    const response = await registerUser(formData);

    toast.success(response.data.message);

    navigate("/login");
  } catch (error) {
    toast.error(
      error.response?.data?.message ||
      "Something went wrong"
    );
  }
}

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-xl w-[90%] md:w-[400px] animate__animated animate__fadeInUp"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

        <InputField
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <InputField
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="w-full bg-slate-900 text-white p-3 rounded-xl hover:bg-slate-700 transition">
          Register
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
export default Register