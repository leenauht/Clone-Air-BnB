import { ReactNode } from 'react';

interface DropdownMenuProps {
  children: ReactNode;
}

export default function DropdownMenu({ children }: DropdownMenuProps) {
  return (
    <div className="bg-slate-300 shadow-sm p-2 absolute right-0 rounded-lg flex flex-col gap-2">
      {children}
    </div>
  );
}
