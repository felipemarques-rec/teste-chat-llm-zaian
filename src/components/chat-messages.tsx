"use client";

import { ElementRef, useEffect, useRef } from "react";

import { ChatMessage, ChatMessageProps } from "@/components/chat-message";

interface ChatMessagesProps {
  messages: ChatMessageProps[];
}

export const ChatMessages = ({
  messages = [],
}: ChatMessagesProps) => {
  const scrollRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message) => (
        <ChatMessage
          key={message.content}
          src={"https://ui.shadcn.com/avatars/01.png"}
          content={message.content}
          role={message.role}
        />
      ))}
      <div ref={scrollRef} />
    </div>
  );
};