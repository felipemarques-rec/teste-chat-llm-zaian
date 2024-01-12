"use client";
import { useCompletion } from "ai/react";
import { FormEvent, use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { ChatForm } from "@/components/chat-form";
import { ChatMessageProps } from "@/components/chat-message";
import { ChatMessages } from "@/components/chat-messages";
import Sidebar from "@/components/ui/sidebar";

export default function Chat() {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessageProps[]>([{
    role: "system",
    content: "Olá, eu sou o LLM, seu assistente virtual. Como posso te ajudar?",
  }]);
  
  const {
    completion,
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
    setInput,
  } = useCompletion({
    onFinish(_prompt, completion) {
      const systemMessage: ChatMessageProps = {
        role: "system",
        content: completion
      };

      setMessages((current) => [...current, systemMessage]);
      setInput("");

      router.refresh();
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const userMessage: ChatMessageProps = {
      role: "user",
      content: input
    };

    setMessages((current) => [...current, userMessage]);

    handleSubmit(e);
  }

  return (
    <div className="bg-gray-800 text-gray-200 flex overflow-x-hidden">
      <Sidebar />
      <div className="mx-auto flex-col container flex max-w-7xl">
        <div className="mx-auto mb-10 mt-6 w-full px-6 lg:mx-0 lg:max-w-none max-w-3xl">
          <div className="mb-6 mt-4 items-end justify-between text-white flex">
            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 min-h-[75rem]">
                <ChatMessages 
                  messages={isLoading ?  [...messages, {role: "system", content: completion}] : messages}
                  />
                <ChatForm 
                  isLoading={isLoading} 
                  input={input} 
                  handleInputChange={handleInputChange} 
                  onSubmit={onSubmit} 
                  />
            </div>
          </div>
          <div className="lg:grid-cols-3 lg:gap-6 grid min-h-[350px] grid-cols-1 gap-y-6"></div>
        </div>
      </div>
    </div>
   );
}