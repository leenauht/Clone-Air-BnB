import React, { useState } from 'react';

export default function HoverTooltipText({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPos({ x: e.clientX + 10, y: e.clientY + 10 });
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={handleMouseMove}
    >
      <span className="line-clamp-2 cursor-pointer">{text}</span>

      {/* Tooltip */}
      {show && (
        <div
          className="fixed bg-gray-300 text-sm px-2 py-1 rounded shadow-lg pointer-events-none max-w-xs"
          style={{
            top: pos.y,
            left: pos.x,
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}
