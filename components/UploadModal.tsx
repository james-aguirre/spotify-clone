"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { toast } from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import uniqid from "uniqid";

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const uploadModal = useUploadModal();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);
      const image = values.image?.[0];
      const song = values.song?.[0];

      if (!image || !image || !user)
        return toast.error("Please fill in the required fields");

      const uniqueId = uniqid();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="title"
        />
        <Input
          id="artist"
          disabled={isLoading}
          {...register("artist", { required: true })}
          placeholder="artist"
        />
        <div>
          <div className="pb-1">Select an mp3 file</div>
          <Input
            className="border:none"
            id="song"
            type="file"
            disabled={isLoading}
            accept=".mp3"
            {...register("song", { required: true })}
          />
        </div>
        <div>
          <div className="pb-1">Select an image</div>
          <Input
            id="image"
            type="file"
            disabled={isLoading}
            accept="image/*"
            {...register("image", { required: true })}
          />
        </div>
        <Button disabled={isLoading} type="submit">
          Upload
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
