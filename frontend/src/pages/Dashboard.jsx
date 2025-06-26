import React , { useEffect , useState} from "react";
import axios from "axios";

export default function Dashboard() {
    const [users, setUsers] = useState([]);


useEffect(() => {
    axios
      .get("http://localhost:5500/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Failed to fetch users:", err));
  }, []);


  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Registered Users</h1>
      <div className="bg-white rounded-lg shadow-md p-4 max-w-2xl mx-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-slate-200 text-slate-800">
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="p-2 border">{user.email}</td>
                <td className="p-2 border">{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}