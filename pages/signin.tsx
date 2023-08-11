import React from 'react';
import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Navbar from "@/components/organisms/Navbar";
import Link from 'next/link';

export default function Signin() {
  return (
    <>
      <Navbar />
      <Breadcrumbs>Sign in</Breadcrumbs>
      <div className="container flex mt-12">
        <main className="w-full px-8 m-0 md:w-1/2">
          <div>
            <h1 className="mb-8 text-3xl">Masuk</h1>
            <form action="Login" className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-light text-gray-600">Email Address</label>
              <input type="email" id="email" className="mb-2 border-b-2 outline-none focus:border-b-2 focus:border-blue-400" required />
              <label htmlFor="password" className="mb-2 font-light text-gray-600">Password</label>
              <input type="password" id="password" className="border-b-2 outline-none focus:border-b-2 focus:border-blue-400" required />
              <a href="#" className="font-light text-blue-600">Lupa kata sandi?</a>
              <button type="submit" className="p-2 my-8 text-gray-600 bg-gray-200 rounded-full">Masuk</button>
            </form>
            <p className="mb-8 text-center">Belum memiliki akun? <span><Link href="/signup" className="font-semibold text-blue-600">Register di sini</Link></span></p>
          </div>
        </main>
        <img src="/images/signin-hero.png" alt="signin-hero" className="hidden w-1/3 h-96 m-auto md:block" />
      </div>
    </>
  );
}
