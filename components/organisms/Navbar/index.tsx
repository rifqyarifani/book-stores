import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [navbarMobileClassName, setNavbarMobileClassName] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  }, []);

  return (
    <>
      <nav className={`${navbar && "top-nav-collapse"} navbar fixed-top`}>
        <div className="container flex flex-wrap items-center justify-between sm:px-4 lg:px-8 lg:flex-nowrap">
          <Link
            className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline"
            href="/"
          >
            <img src=".././images/vaca.svg" alt="alternative" className="h-8" />
          </Link>

          <button
            className="text-xl leading-none rounded background-transparent hover:no-underline focus:no-underline lg:hidden lg:text-gray-400"
            type="button"
            data-toggle="offcanvas"
            onClick={() => setNavbarMobileClassName(!navbarMobileClassName)}
          >
            <span className="inline-block w-8 h-8 align-middle navbar-toggler-icon"></span>
          </button>

          <div
            className={`navbar-collapse ${
              navbarMobileClassName === true
                ? "offcanvas-collapse.open"
                : "offcanvas-collapse"
            } lg:flex lg:flex-grow lg:items-center duration-300`}
            id="navbarsExampleDefault"
          >
            <ul className="flex flex-col pl-0 mt-3 mb-2 ml-auto list-none lg:mt-0 lg:mb-0 lg:flex-row">
              <li>
                <Link className="nav-link page-scroll" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link page-scroll" href="#features">
                  Category
                </Link>
              </li>
              <li>
                <Link className="nav-link page-scroll" href="/profile">
                  Profile
                </Link>
              </li>
            </ul>
            <span className="sm:ml-3">
              <Link
                href="/signup"
                className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
