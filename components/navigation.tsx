"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>home</Link>
          {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href={"/about"}>About</Link>
          {path === "/about" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
