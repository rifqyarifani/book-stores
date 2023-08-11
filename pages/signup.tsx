import React from "react";
import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Navbar from "@/components/organisms/Navbar";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <Navbar />
      <Breadcrumbs>Sign up</Breadcrumbs>
      <div className="container flex mt-12">
        <main className="w-full px-8 m-0 md:w-1/2">
          <div>
            <h1 className="mb-8 text-3xl">Buat Akun</h1>
            <form action="Login" className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-light text-gray-600">Email Address</label>
              <input type="email" id="email" className="mb-2 font-light border-b-2 outline-none focus:border-b-2 focus:border-blue-400" required />
              <label htmlFor="password" className="mb-2 font-light text-gray-600">Password</label>
              <input type="password" id="password" className="font-light border-b-2 outline-none focus:border-b-2 focus:border-blue-400" required />
              <label htmlFor="telepon" className="mb-2 font-light text-gray-600">Nomor Telepon</label>
              <input
                type="number"
                id="telepon"
                className="border-b-2 font-light focus:border-b-2 focus:border-blue-400 outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                required
              />
              <button type="submit" className="p-2 my-8 text-gray-600 bg-gray-200 rounded-full">Daftar Sekarang</button>
            </form>
            <p className="mb-8 text-center">Sudah punya akun? <span><Link href="/signin" className="font-semibold text-blue-600">Masuk</Link></span></p>
          </div>
        </main>
        <img src="/images/signup-hero.png" alt="signin-hero" className="hidden w-1/3 h-96 m-auto md:block" />
      </div>
    </>
  );
}
