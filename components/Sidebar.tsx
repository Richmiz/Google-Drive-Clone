"use client";

import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
    fullName: string;
    email: string;
    avatar: string;
}

const Sidebar = ({fullName, avatar, email}: Props) => {
  const pathName = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/">
        <Image
          src={"/assets/icons/Logo-text.svg"}
          alt="logo"
          width={160}
          height={50}
          className="hidden h-auto lg:block"
        />

        <Image
          src={"/assets/icons/logo-no-text.svg"}
          alt="logo"
          width={52}
          height={52}
          className="lg:hidden"
        />
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <Link key={name} href={url} className="lg:ww-full">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathName === url && "shad-active"
                )}
              >
                <Image 
                  src={icon} 
                  alt={name} 
                  width={24}
                  height={24} 
                  className={cn("nav-icon", pathName === url && "nav-icon-active")}
                />
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <Image 
        src="/assets/images/files-2.png"
        alt="file-icon"
        width={506}
        height={418}
        className="w-full"
    />

    <div className="sidebar-user-info">
        <Image
           src={avatar}
           alt="Avatar"
           height={44}
           width={44}
           className="sidebar-user-avatar"
        />

        <div className="hidden lg:block line-clamp-1">
            <p className="subtitle-2 capitalize">{fullName}</p>
            <p className="caption">{email}</p>
        </div>
    </div>
    </aside>
  );
};

export default Sidebar;
