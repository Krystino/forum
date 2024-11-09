import { useState } from 'react';

export default function PostContent({ content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // 控制是否展示完整内容
  const toggleContent = () => {
    setIsExpanded((prevState) => !prevState);
  };

  // 显示的内容：根据 isExpanded 决定是展示全部内容还是部分内容
  const displayContent = isExpanded ? content : `${content.slice(0, 88)}...`;

  return (
    <div className="p-4">
      <p className="text-base text-gray-800">{displayContent}</p>

      {/* 查看更多 / 收起按钮 */}
      <div className="w-full text-right">
        <button
          onClick={toggleContent}
          className="mr-2 mt-2 rounded bg-indigo-50 px-2 py-1 text-sm text-grey-200 shadow-sm hover:bg-indigo-100"
        >
          {isExpanded ? '收起' : '查看更多'}
        </button>
      </div>
    </div>
  );
};
