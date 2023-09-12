"use client";

import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  // to prevent errors caused by server side rendering
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  if (!isLoading) return null;

  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;
