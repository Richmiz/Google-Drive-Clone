"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { string } from "zod";
import { Separator } from "@radix-ui/react-separator";
import { navItems } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import FileUploader from "./FileUploader";
import { signOutUser } from "@/lib/actions/user.actions";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface Props {
  $id: string;
  accountId: string;
  fullName: string;
  email: string;
  avatar: string;
}

const MobileNavigation = ({
  $id: ownerId,
  accountId,
  fullName,
  email,
  avatar,
}: Props) => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <header className="mobile-header">
      <Image
        src="/assets/icons/logo-text.svg"
        alt="logo"
        width={120}
        height={52}
        className="h-auto"
      />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image
            src="/assets/icons/menu.svg"
            alt="Search"
            width={30}
            height={30}
          />
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3">
          <SheetTitle>
            <div className="header-user">
              <Image
                src={avatar}
                alt="avatar"
                width={44}
                height={44}
                className="header-user-avatar"
              />
              <div className="sm:hidden lg:block">
                <p className="subtitle-2 capitalize">{fullName}</p>
                <p className="caption">{email}</p>
              </div>
            </div>
            <Separator className="mb-4 bg-light-200/20" />
          </SheetTitle>

          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map(({ url, name, icon }) => (
                <Link key={name} href={url} className="lg:ww-full">
                  <li
                    className={cn(
                      "mobile-nav-item",
                      pathName === url && "shad-active"
                    )}
                  >
                    <Image
                      src={icon}
                      alt={name}
                      width={24}
                      height={24}
                      className={cn(
                        "nav-icon",
                        pathName === url && "nav-icon-active"
                      )}
                    />
                    <p>{name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>

          <Separator className="my-5 bg-light-200/20"/>

          <div className="flex flex-col justify-between gap-5">
            <FileUploader ownerId={ownerId} accountId={accountId} />

            <Button type="submit" className='mobile-sign-out-button' onClick={async () => await signOutUser()}>
                <Image
                    src={"/assets/icons/logout.svg"}
                    alt='logo'
                    width={24}
                    height={24}
                />
                <p>Logout</p>
            </Button>

            {/* <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button type="button" className='sign-out-button'>
              <Image
                src={"/assets/icons/logout.svg"}
                alt='logo'
                width={24}
                height={24}
                className='w-6'
              />
              <p>Logout</p>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className='flex flex-col items-center justify-between shad-alert-dialog'>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter className="w-full flex flex-row justify-between gap-4 mt-4">
              <AlertDialogCancel 
                className="bg-brand button h-12 hover:bg-brand-100 transition-all rounded-full text-white w-1/2"
              >
                Cancel
              </AlertDialogCancel>
              <form action={async () => {
                // 'use server'
                await signOutUser();
              }} className="w-1/2">
                <AlertDialogAction 
                  type="submit" 
                  className="shad-submit-btn h-12 text-white w-full"
                >
                  Yes, log me out
                </AlertDialogAction>
              </form>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog> */}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;
