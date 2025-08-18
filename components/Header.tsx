import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Search from './Search'
import FileUploader from './FileUploader'
import { signOutUser } from '@/lib/actions/user.actions'

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

const Header = ({ 
  userId, 
  accountId 
}: {
  userId: string; 
  accountId: string
}) => {

  return (
    <header className='header'>
      <Search />

      <div className='header-wrapper'>
        <FileUploader ownerId={userId} accountId={accountId}/>
        {/* <form action={async () => {
          'use server'

          await signOutUser();
        }}>
            <Button type="submit" className='sign-out-button'>
                <Image
                    src={"/assets/icons/logout.svg"}
                    alt='logo'
                    width={24}
                    height={24}
                    className='w-6'
                />
            </Button>
        </form> */}

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button type="button" className='sign-out-button'>
              <Image
                src={"/assets/icons/logout.svg"}
                alt='logo'
                width={24}
                height={24}
                className='w-6'
              />
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
                'use server'
                await signOutUser();
              }} className="w-1/2">
                <AlertDialogAction 
                  type="submit" 
                  className="shad-logout-btn h-12 text-white w-full"
                >
                  Yes, log me out
                </AlertDialogAction>
              </form>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </div>
    </header>
  )
}

export default Header
