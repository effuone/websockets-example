'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useWebSocket from '@/lib/hooks/useWebsocket';
import { useEffect, useState } from 'react';
import Roadmap from '@/components/roadmap';
export default function Home() {
  const { messages, sendMessage } = useWebSocket('ws://localhost:5000');
  const [prompt, setPrompt] = useState('');

  const handleSend = () => {
    if (prompt.trim() !== '') {
      sendMessage(prompt);
      setPrompt('');
    }
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <h1 className="text-3xl font-bold">Roadmap Generator via WebSockets</h1>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Enter Prompt</h2>
          <div className="flex space-x-2">
            <Input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt"
              className="flex-1 px-4 py-2 border rounded-lg"
            />
            <Button
              onClick={handleSend}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
            >
              Send
            </Button>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          <div className="space-y-2">
            {messages.map((message, index) => (
              <Roadmap
                key={index}
                title={message.title}
                details={message.details}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
