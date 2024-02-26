"use client";

import { navLinks } from "@/constants";
import { SignedOut, UserButton } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4 ">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            width={180}
            height={28}
            alt="logo"
          />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((l) => {
                const isActive = l.route === pathname;

                return (
                  <li
                    key={l.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={l.route}>
                      <Image
                        src={l.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks
                .slice(6)
                .slice(0, 6)
                .map((l) => {
                  const isActive = l.route === pathname;

                  return (
                    <li
                      key={l.route}
                      className={`sidebar-nav_element group ${
                        isActive
                          ? "bg-purple-gradient text-white"
                          : "text-gray-700"
                      }`}
                    >
                      <Link className="sidebar-link" href={l.route}>
                        <Image
                          src={l.icon}
                          alt="logo"
                          width={24}
                          height={24}
                          className={`${isActive && "brightness-200"}`}
                        />
                        {l.label}
                      </Link>
                    </li>
                  );
                })}{" "}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button className="button bg-purple-gradient bg-cover" asChild>
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
