"use client";
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Auth() {
  const router = useRouter();

  const HandleSignInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    const ISSERVER = typeof window === "undefined";
    if (!ISSERVER) {
      localStorage.setItem("auth", JSON.stringify(authInfo));
    }

    router.push("/expenseTracker");
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-blue-200 to-blue-800">
      <p className="font-extrabold text-xl lg:text-3xl text-white ">
        Sign in With Google to Continue
      </p>
      <button
        className="btn bg-white shadow-lg h-10 text-center px-2 flex items-center gap-4"
        onClick={HandleSignInWithGoogle}
      >
       <Image src="/googleLogo.png" alt="G" height={20} width={20} /> Sign in With Google
      </button>
      
    </div>
  );
}
