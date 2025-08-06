interface DivItemProps {
  icon: React.ReactNode;
  text: string;
  fontSize: number | string;
}

export default function DivItem({ icon, text, fontSize }: DivItemProps) {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition duration-300">
      <span>{icon}</span>
      <span className={`text-[${fontSize}] whitespace-nowrap`}>{text}</span>
    </div>
  );
}
