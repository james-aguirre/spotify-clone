"use client";

import Modal from "./Modal";

const AuthModal = () => {
  return (
    <Modal title="fooTitle" description="barDesc" isOpen onChange={() => {}}>
      BazChild
    </Modal>
  );
};

export default AuthModal;
