import Link from "next/link";
import { AiOutlineGithub, AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { MdRssFeed } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="my-6 flex space-x-4 justify-center">
        <Link href="/">
          <AiOutlineHome size={25} />
        </Link>
        <a href="mailto:jeongjeson656@gmail.com">
          <AiOutlineMail size={25} />
        </a>
        <a href="https://github.com/Jeong-Je" target="_blank">
          <AiOutlineGithub size={25} />
        </a>
        <a href="https://jeongje.vercel.app/feed.xml" target="_blank">
          <MdRssFeed size={25} />
        </a>
      </div>
    </>
  );
}
