import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldAlert, Mail, Lock, User, Building, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        organization: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }

        setLoading(true);

        try {
            await register({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                organization: formData.organization,
                password: formData.password
            });
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen bg-[#07090E] text-slate-200 flex items-center justify-center px-6 py-12 font-sans selection:bg-blue-500/30 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 -left-64 w-[500px] h-[500px] bg-blue-900/15 rounded-full blur-[140px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/15 rounded-full blur-[160px] pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg relative z-10"
            >
                {/* Brand Header */}
                <div className="flex flex-col items-center mb-8 text-center">
                    <div className="p-3 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-lg mb-4">
                        <ShieldAlert className="w-8 h-8 text-blue-500" />
                    </div>
                    <h1 className="text-3xl font-black tracking-tight text-white flex items-center gap-2">
                        HireGuard <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI</span>
                    </h1>
                    <p className="text-slate-400 text-sm mt-2">Create an account for automated recruiter intelligence</p>
                </div>

                {/* Form Card */}
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 shadow-2xl">
                    {error && (
                        <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm flex items-center gap-3">
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                                    First Name
                                </label>
                                <div className="relative">
                                    <User className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                                    <input
                                        type="text"
                                        required
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Jane"
                                        className="w-full bg-slate-950/60 border border-slate-700/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                                    Last Name
                                </label>
                                <div className="relative">
                                    <User className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                                    <input
                                        type="text"
                                        required
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                        className="w-full bg-slate-950/60 border border-slate-700/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                                Organization / Company
                            </label>
                            <div className="relative">
                                <Building className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    required
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    placeholder="Acme Corp"
                                    className="w-full bg-slate-950/60 border border-slate-700/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                                Work Email
                            </label>
                            <div className="relative">
                                <Mail className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                                <input
                                    type="email"
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="recruiter@acme.com"
                                    className="w-full bg-slate-950/60 border border-slate-700/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                                    <input
                                        type="password"
                                        required
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="w-full bg-slate-950/60 border border-slate-700/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <Lock className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                                    <input
                                        type="password"
                                        required
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="w-full bg-slate-950/60 border border-slate-700/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full !mt-6 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center justify-center gap-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Creating Account...</span>
                                </>
                            ) : (
                                <>
                                    <span>Create Account</span>
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                        <p className="text-sm text-slate-400">
                            Already have an account?{" "}
                            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
