import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>This is a screen for logged-in users only</div>
      <div>
        <UserButton></UserButton>
      </div>
    </div>
  );
}
