"use client";
import { showToast } from "nextjs-toast-notify";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    showToast.success("Kontakt oynasiga hush kelibsiz! :)", {
      duration: 4000,
      progress: true,
      position: "top-center",
      transition: "bounceIn",
      icon: "",
      sound: true,
    });
  }, []);
  return (
    <div>
      <h1>Contact page</h1>
    </div>
  );
}

export default Contact;
