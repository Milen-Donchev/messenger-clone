"use client";

import type {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

interface MessageInputProps {
  id: string;
  register: UseFormRegister<FieldValues>;
  placeholder?: string;
  type?: string;
  required?: boolean;
  errors: FieldErrors;
}

const MessageInput = (props: MessageInputProps) => {
  const { id, type, register, required, errors, placeholder } = props;

  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="
          text-black
          font-light
          py-2
          px-4
          bg-neutral-100
          w-full
          rounded-full
          focus:outline-none
        "
      />
    </div>
  );
};

export default MessageInput;
