'use client';

import { ReactNode } from 'react';
import { RoomProvider } from '@/liveblocks.config';
import { ClientSideSuspense } from '@liveblocks/react';
import { Client } from '@clerk/nextjs/server';
import { Loading } from './ui/auth/loading';

interface RoomProps {
  children: ReactNode;
  roomId: string;
}

export const Room = ({ children, roomId }: RoomProps) => {
  return (
    <RoomProvider id={roomId} initialPresence={{}}>
      <ClientSideSuspense fallback={<Loading />}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};
