"use client";
import { useEffect, useRef } from "react";
import { showToast } from "nextjs-toast-notify";

function Toaster() {
  const shownRef = useRef(false);

  useEffect(() => {
    if (!shownRef.current) {
      showToast.success("Welcome to the product page!", {
        duration: 4000,
        progress: true,
        position: "top-center",
        transition: "bounceIn",
        icon: "",
        sound: true,
      });
      shownRef.current = true;
    }
  }, []);
  return null;
}

export default Toaster;
