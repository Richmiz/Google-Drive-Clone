"use client"

import React, { useState } from "react";
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
} from "@/components/ui/alert-dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import { Button } from "./ui/button";
import { verify } from "crypto";
import { sendEmailOTP, verifySecret } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const OTPModal = ({
    accountId, 
    email}: {
        accountId: string; 
        email: string
    }) => {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(true);
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsLoading(true)


        try {
            // Call the OTP to verify the user
            const seesionId = await verifySecret({accountId, password});

            if(seesionId) router.push("/")

        } catch(error) {
            console.log('Failed to verify OTP', error)
        }
        setIsLoading(false);
    }

    const handleResendOtp = async () => {
        // Call API to resend OTP
        await sendEmailOTP ({email});
    }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="shad-alert-dialog">
        <AlertDialogHeader className="relative flex justify-center">
          <AlertDialogTitle className="h2 text-center">
            Enter your OTP
            <Image 
                src="/assets/icons/close-dark.svg" 
                alt="close" 
                width={20} 
                height={20} 
                onClick={() => setIsOpen(false)} 
                className="otp-close-button"/>
          </AlertDialogTitle>
          <AlertDialogDescription className="subtitle-2 text-center text-light-100">
            We've sent code to <span className="pl-1 text-brand">{email}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <InputOTP maxLength={6} value={password} onChange={setPassword}>
          <InputOTPGroup className="shad-otp">
            <InputOTPSlot index={0} className="shad-otp-slot"/>
            <InputOTPSlot index={1} className="shad-otp-slot"/>
            <InputOTPSlot index={2} className="shad-otp-slot"/>
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup className="shad-otp">
            <InputOTPSlot index={3} className="shad-otp-slot"/>
            <InputOTPSlot index={4} className="shad-otp-slot"/>
            <InputOTPSlot index={5} className="shad-otp-slot"/>
          </InputOTPGroup>
        </InputOTP>

        <AlertDialogFooter>
            <div className="flex w-full flex-col gap-4">
               <AlertDialogAction 
                onClick={handleSubmit}
                className="shad-submit-btn h-12 text-white"
                type="button"
               >
                    Submit
                    {isLoading && (
                        <Image 
                            src="/assets/icons/loader.svg"
                            alt="loader"
                            width={24}
                            height={24}
                            className="ml-2 animate-spin"
                        />
                    )}
                </AlertDialogAction> 

                <div className="subtitile-2 mt-2 text-center">
                    Didn't get a code?
                    <Button 
                        type="button"
                        variant="link"
                        className="pl-1 text-brand"
                        onClick={handleResendOtp}
                    >
                        Click to resend
                    </Button>
                </div>
            </div>
          
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OTPModal;
