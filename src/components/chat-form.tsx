"use client";

import { ChatRequestOptions } from "ai";
import { SendHorizonal } from "lucide-react";
import { ChangeEvent, FormEvent } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ChatFormProps {
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
  isLoading: boolean;
}

export const ChatForm = ({
  input,
  handleInputChange,
  onSubmit,
  isLoading,
}: ChatFormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex w-full items-center rounded-md bg-gray-900 p-5 dark:bg-slate-900">
      <Input
        disabled={isLoading}
        value={input}
        onChange={handleInputChange}
        placeholder="Digite sua mensagem..."
        className="rounded-lg bg-primary/10"
      />
      <Button disabled={isLoading} variant="ghost">
        <SendHorizonal className="w-6 h-6" />
      </Button>
    </form>

  )
}