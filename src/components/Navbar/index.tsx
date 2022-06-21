import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState<boolean>(false);

  const navLinks: Array<{ title: string; href: string }> = [
    { title: "Landing", href: "/" },
    { title: "Agents", href: "/" },
    { title: "Cities", href: "/" },
    { title: "Packages", href: "/" },
    { title: "Stories", href: "/" },
  ];

  return (
    <header>
      <div className="container mx-auto">
        <nav className="flex py-5 items-center relative">
          <div className="w-4/12">
            <Link href="/">
              <a>
                <Image
                  src="/logo.png"
                  height="42"
                  width="173"
                  quality={100}
                  className="w-full"
                />
              </a>
            </Link>
          </div>
          <div className="absolute top-[78px] bg-white w-full rounded md:w-6/12 md:static md:bg-transparent">
            <div className={active ? "flex md:flex" : "hidden md:flex"}>
              <ul className="flex flex-col space-y-6 pl-5 transition duration-300 last:pb-7 md:last:pb-0 md:pl-0 md:flex-row md:space-y-0 md:space-x-6">
                {navLinks.map(({ title, href }) => (
                  <li
                    key={title}
                    className="text-slate-400 hover:text-slate-800 text-[18px] select-none"
                  >
                    <Link href={href}>
                      <a>{title}</a>
                    </Link>
                  </li>
                ))}
                <li className="flex md:hidden">
                  <Link href="/">
                    <a className="bg-slate-100 py-2 px-5 rounded hover:bg-slate-200 text-[18px] select-none">
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-8/12 md:w-2/12">
            <div className="flex select-none justify-end md:hidden">
              <button
                onClick={() => setActive(!active)}
                className={active ? "hamburger-active" : ""}
              >
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>
            </div>
            <Link href="/">
              <a className="bg-slate-100 py-2 px-5 rounded w-full hover:bg-slate-200 text-[18px] select-none hidden md:inline">
                Contact Us
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
