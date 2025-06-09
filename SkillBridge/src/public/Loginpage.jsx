import React from 'react';
import backgroundImage from '../assets/background.jpg'; // Update path as needed
import { FaFacebookF, FaGoogle, FaApple } from 'react-icons/fa';

const SignupPage = () => {
  return (
    <div className="flex h-screen font-sans">
      {/* Left Side - Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <div className="text-2xl font-bold mb-2">Start your journey</div>
          <h2 className="text-3xl font-extrabold mb-6">Login to InsideBox</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Login 
            </button>
          </form>

          <div className="text-center my-4 text-sm text-gray-500">or sign up with</div>
          <div className="flex justify-center gap-4">
            <button className="p-3 border rounded-md"><FaFacebookF /></button>
            <button className="p-3 border rounded-md"><FaGoogle /></button>
            <button className="p-3 border rounded-md"><FaApple /></button>
          </div>

          <div className="mt-6 text-sm text-center text-gray-600">
            Have an account? <a href="#" className="text-blue-600 font-medium">Sign in</a>
          </div>
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: url(${backgroundImage}) }}
      />
    </div>
  );
};

export default LoginPage;