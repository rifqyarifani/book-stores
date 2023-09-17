import React from "react";
import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Navbar from "@/components/organisms/Navbar";
import Link from "next/link";
import { register } from "@/services/user.services";

type RegisterData = {
  email: string;
  name: string;
  password: string;
};

export default function Signup() {
  const handleRegister = (data: RegisterData) => {
    register(data, (status: boolean, res: User) => {
      if (status) {
        alert("register berhasil");
      } else {
        alert("register gagal");
      }
    });
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (
      e.currentTarget.password.value !==
      e.currentTarget.passwordConfirmation.value
    ) {
      alert("Konfirmasi password salah");
      return;
    }

    const data = {
      email: e.currentTarget.email.value,
      name: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    handleRegister(data);
  };
  return (
    <>
      <Navbar />
      <Breadcrumbs>Sign up</Breadcrumbs>
      <div className="container flex mt-12">
        <main className="w-full px-8 m-0 md:w-1/2">
          <div>
            <h1 className="mb-8 text-3xl">Buat Akun</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-light text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mb-2 font-light border-b-2 outline-none focus:border-b-2 focus:border-secondary"
                required
              />
              <label
                htmlFor="username"
                className="mb-2 font-light text-gray-600"
              >
                Nama
              </label>
              <input
                type="text"
                id="username"
                className="mb-2 font-light border-b-2 outline-none focus:border-b-2 focus:border-secondary"
                required
              />
              <label
                htmlFor="password"
                className="mb-2 font-light text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="font-light border-b-2 outline-none focus:border-b-2 focus:border-secondary"
                required
              />
              <label
                htmlFor="passwordConfirmation"
                className="mb-2 font-light text-gray-600"
              >
                Konfirmasi Password
              </label>
              <input
                type="password"
                id="passwordConfirmation"
                className="font-light border-b-2 outline-none focus:border-b-2 focus:border-secondary"
                required
              />
              <button
                type="submit"
                className="p-2 my-8 text-gray-600 bg-gray-200 rounded-full btn-solid-lg secondary"
              >
                Daftar Sekarang
              </button>
            </form>
            <p className="mb-8 text-center">
              Sudah punya akun?{" "}
              <span>
                <Link href="/signin" className="font-semibold text-blue-600">
                  Masuk
                </Link>
              </span>
            </p>
          </div>
        </main>
        <img
          src="/images/signup-hero.png"
          alt="signin-hero"
          className="hidden w-1/3 h-96 m-auto md:block"
        />
      </div>
    </>
  );
}
