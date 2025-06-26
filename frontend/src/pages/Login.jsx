// src/pages/Login.jsx
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const res = await axios.get("http://localhost:5500/users", {
        params: {
          email,
          password,
        },
      });

      if (res.data.length > 0) {
        alert("Login successful!");
        setEmail("");
        setPassword("");
        setError("");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("Error connecting to server. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-slate-800 mb-6">Login to TaskMate</h1>

        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-2 mb-4 rounded">{error}</div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-slate-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-slate-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>

          <p className="text-sm mt-4 text-center">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
