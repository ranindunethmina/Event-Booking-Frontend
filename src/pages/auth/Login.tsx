import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await loginUser(email, password);
            dispatch(login({ token: data.token, user: data.user }));
            navigate("/admin/dashboard"); // Redirect after login
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border mb-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
