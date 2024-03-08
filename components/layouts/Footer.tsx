import Link from "next/link";
import { AiOutlineGithub, AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { MdRssFeed } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="mb-3 flex space-x-4 justify-center">
        <Link href="/">
          <AiOutlineHome />
        </Link>
        <a href="mailto:jeongjeson656@gmail.com">
          <AiOutlineMail />
        </a>
        <a href="https://github.com/Jeong-Je" target="_blank">
          <AiOutlineGithub />
        </a>
        <a href="https://jeongje.vercel.app/feed.xml" target="_blank">
          <MdRssFeed />
        </a>
      </div>
    </>
  );
}
