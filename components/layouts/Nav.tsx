"use client";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { useState } from "react";
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
        className={`h-20 backdrop-blur-md fixed left-0 right-0 flex justify-center shadow-xl`}
      >
        <div className="max-w-[650px] flex justify-between items-center h-full w-full px-0 max-sm:mx-5 prose dark:prose-invert">
          {/* 로고 */}
          <Link href="/">
            <Image
              src={Logo}
              height="50"
              alt="Logo"
              className="cursor-pointer"
              placeholder="blur"
              blurDataURL={"/logo.png"}
            />
          </Link>

          {/* 네비게이션 */}
          <div className="hidden sm:flex">
            <ul className="hidden sm:flex list-none">
              <li>
                  <ModeToggle />
              </li>
              <li className="ml-7 mr-1 uppercase ease-in duration-200 hover:text-2xl text-xl">
                <Link href="/">Posts</Link>
              </li>
              <li className="ml-10 mr-1 uppercase ease-in duration-200 hover:text-2xl text-xl">
                <Link href="/tags">Tags</Link>
              </li>
            </ul>
          </div>

          {/* 햄버거바(메뉴) 와 다크모드 토글 스위치 */}
          <div className="flex gap-x-6 sm:hidden cursor-pointer">
            <ModeToggle />
            <AiOutlineMenu onClick={handleHamburger} size={25} />
          </div>
        </div>

        {/* 햄버거바로 인한 사이드메뉴 */}
        <div
          className={
            hamburger
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[100%] top-0 p-10 ease-in duration-500"
          }
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
                <Link href="/">Posts</Link>
              </li>
              <li
                onClick={() => setHamburger(false)}
                className="py-4 cursor-pointer"
              >
                <Link href="/tags">Tags</Link>
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
