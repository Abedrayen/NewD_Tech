'use client';
import { React, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setConsultant, setIsAuthenticated, setRole } from '@/slices/consultantSlice';
import { useRouter } from 'next/navigation';
import { Login } from "../../Apis/authApi";
import Loader from "../../components/components/loader"
import { getConsultant } from '@/Apis/ConsultantApi';
import { setClient, setTotalClients } from '@/slices/clientSlice';
export default function LoginPage() {
  const [isView, setIsView] = useState(false);
  const [loading,setLoading]=useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getCurrentConsultant=async()=>{
    const res=await getConsultant();
  if (res)
  { console.log("consultant data"+res);
    const {consultant:Consultant,numClients}=res;
    const consultant={
      firstName:Consultant.firstName,
      lastName:Consultant.lastName,
      id:Consultant._id,
      email:Consultant.email,
      phoneNumber:Consultant.phoneNumber
    }
    dispatch(setIsAuthenticated(true));
    dispatch(setConsultant(consultant))
    dispatch(setRole(Consultant.role));
    dispatch(setClient(Consultant.clients));
    dispatch(setTotalClients(Consultant.numClients))
    dispatch(setTotalClients(numClients));
  }
  else
  {
    dispatch(setIsAuthenticated(false));
  }
    }

  // errors: { email: string, password: string, unknown: string }
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    unknown: '',
  });

  const handleLogin = async () => {
    // Reset error states
    setErrors({ email: '', password: '', unknown: '' });

    // Basic client-side validation
    if (!email.trim()) {
      setErrors((prev) => ({ ...prev, email: 'Email is required.' }));
      return;
    }
    if (!password.trim()) {
      setErrors((prev) => ({ ...prev, password: 'Password is required.' }));
      return;
    }
    setLoading(true)
    const response = await Login(email, password);

    // Check the response for error fields
    if (response.email) {
      // Email-related error
      setErrors((prev) => ({ ...prev, email: response.email }));
      setLoading(false)
    } else if (response.password) {
      // Password-related error
      setErrors((prev) => ({ ...prev, password: response.password }));
      setLoading(false)
    } else if (response.error) {
      // General or unknown error
      setErrors((prev) => ({ ...prev, unknown: response.error }));
      setLoading(false)
    } else {
      // No error keys found, assume login success
      localStorage.setItem("token",response.access_token);
      await getCurrentConsultant()

      window.electronAPI.notifyLoginSuccess()
      router.replace("/dashboard")
    }
   
  };
  if (loading) return<Loader/>
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <div className="w-full h-full max-w-md bg-white shadow-lg rounded-lg px-8 py-10 flex flex-col justify-between items-center">
        <Image src="/images/logo.png" width={200} height={300} alt="Logo" />
        <h1 className="text-2xl font-bold text-center text-customBLUE">Bienvenue</h1>
        <p className="text-sm text-center text-gray-600 mb-6">
          Please log in to continue to your account
        </p>

        {/* Email Input */}
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className={`w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-customGold 
            ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="w-full mt-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Mot de passe
          </label>
          <div className="relative">
            <input
              id="password"
              type={isView ? 'text' : 'password'}
              placeholder="Entrer votre mot de passe"
              className={`w-full border rounded-lg px-4 py-2 mt-1 pr-10 focus:outline-none focus:ring-2 focus:ring-customGold 
              ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setIsView(!isView)}
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400"
            >
              {isView ? <Eye size={20} /> : <EyeOff size={20} />}
            </span>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Unknown Error */}
        {errors.unknown && (
          <p className="text-red-500 text-sm mt-4 text-center w-full">{errors.unknown}</p>
        )}

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between w-full mt-4">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 text-blue-500 focus:ring-customGold border-gray-300 rounded"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-gray-600"
            >
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="text-sm text-blue-500 hover:underline focus:outline-none"
          >
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-customGold text-white py-2 px-4 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-blue-300 mt-6"
          onClick={handleLogin}
        >
          Log In
        </button>
      </div>
    </div>
  );
}
