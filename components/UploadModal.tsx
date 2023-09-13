"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
import { useState } from "react";
import Input from "./Input";

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState();
  const uploadModal = useUploadModal();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (values) => {};

  const onChange = (open: boolean) => {
    if (!open) reset(), uploadModal.onClose();
  };
  return (
    <Modal
      title="upload modal title"
      description="description"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="title"
        />
      </form>
    </Modal>
  );
};

export default UploadModal;
