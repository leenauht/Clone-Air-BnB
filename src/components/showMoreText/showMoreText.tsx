import { useState } from 'react';

import Button from '../button/button';

export default function ShowMoreText({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p className={isExpanded ? '' : 'line-clamp-3'}>{text}</p>
      <Button
        variant="default"
        className="text-blue-500 hover:underline"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Thu gọn' : 'Xem thêm'}
      </Button>
    </div>
  );
}
