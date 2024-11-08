import { useState } from 'react';

export default function ExpandableText({ text, maxLength = 100 }) {
  // 控制是否展开的状态
  const [isExpanded, setIsExpanded] = useState(false);

  // 切换展开状态
  const toggleExpand = () => setIsExpanded(!isExpanded);

  // 判断是否需要显示“查看更多”按钮
  const isTextLong = text.length > maxLength;
  const displayedText =
    isExpanded || !isTextLong ? text : text.slice(0, maxLength) + '...';

  return (
    <div>
      <p>{displayedText}</p>
      {isTextLong && (
        <button onClick={toggleExpand}>
          {isExpanded ? '收起' : '查看更多'}
        </button>
      )}
    </div>
  );
}
