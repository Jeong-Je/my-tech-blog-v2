"use client";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineSearch,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Nav() {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  const style = { color: "#ffffff" };
  return (
    <>
      <nav
        className={`max-w-5xl mx-auto flex items-center justify-between py-10 md:py-0`}
      >
        {/* 로고 */}
        <Link href="/" className="flex text-2xl font-semibold items-center">
          <Image
            src={Logo}
            alt="Logo"
            className="max-md:hidden"
            placeholder="blur"
            blurDataURL={"/logo.png"}
          />
          {"<Jeong />"}
        </Link>

        {/* 네비게이션 */}
        <div className="hidden sm:flex space-x-4">
          <Link href="/blog">Blog</Link>
          <Link href="/category">Category</Link>
          <Link href="/memo">Memo</Link>
          <button>
            <AiOutlineSearch size={25} />
          </button>
          <ModeToggle />
        </div>

        {/* 햄버거바(메뉴) 와 다크모드 토글 스위치 */}
        <div className="flex gap-x-6 sm:hidden cursor-pointer">
          <button>
            <AiOutlineSearch size={25} />
          </button>
          <ModeToggle />
          <AiOutlineMenu onClick={handleHamburger} size={25} />
        </div>

        {/* 햄버거바로 인한 사이드메뉴 */}
        <div
          className={`fixed p-10 ease-in duration-500
            ${
              hamburger
                ? "left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] dark:bg-gray-900 dark:text-white"
                : "left-[100%] top-0"
            }`}
        >
          <div className="z-1 flex w-full items-center justify-end">
            <div onClick={handleHamburger} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="py-4">
            <ul>
              <li
                onClick={() => setHamburger(false)}
                className="py-4 cursor-pointer"
              >
                <Link href="/blog">Blog</Link>
              </li>
              <li
                onClick={() => setHamburger(false)}
                className="py-4 cursor-pointer"
              >
                <Link href="/category">Category</Link>
              </li>
              <li
                onClick={() => setHamburger(false)}
                className="py-4 cursor-pointer"
              >
                <Link href="/memo">Memo</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-row justify-around pt-10 items-center">
            <a href="mailto:jeongjeson656@gmail.com">
              <AiOutlineMail size={30} className="cursor-pointer" />
            </a>
            <a href="https://github.com/Jeong-Je" target="_blank">
              <AiOutlineGithub size={30} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
