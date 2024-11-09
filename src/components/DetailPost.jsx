/* eslint-disable react/prop-types */
import React, { useState } from 'react';

// import ExpandableText from './ExpandableText';
import StreamChat from './StreamChat';

export default function DetailPost({ post }) {
  const {
    id,
    username: userName,
    time,
    title,
    content,
    upvotes,
    judge,
    forum,
  } = post;

  const [upvote, setUpvote] = useState(upvotes);

  return (
    <div className="flex pl-4 pr-16 pt-2 pb-8 border-b border-gray-200">
      <img
        src={`/avatar${
          userName == '紫陌' ? 1 : Math.ceil(Math.random() * 15)
        }.jpg`}
        alt="User Avatar"
        className="w-10 h-10 rounded-full mr-3"
      />
      <div className="flex-1" style={{ width: '300px' }}>
        <div className="text-sm text-gray-500 flex items-center space-x-2">
          <p className="font-bold">{forum}</p>
          <span className="mx-1">•</span>
          <p>{userName}</p>
          <span className="mx-1">•</span>
          <p>{time}</p>
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mt-1">{title}</h2>
        <span className="inline-block bg-[#23D9D3] text-white text-xs px-2 py-1 rounded mt-2">
          {judge}
        </span>
        <p className="text-base text-gray-700 my-4 ">
          {/* <ExpandableText text={content} maxLength={50} /> */}
          {content.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        {/* AI 总结 */}
        <StreamChat>
          {'帖子标题：' + title + '\n帖子内容：' + content}
        </StreamChat>
        <div
          className="flex text-gray-500 text-sm mt-4 space-x-8"
          style={{ marginTop: '30px' }}
        >
          <span
            onClick={() => {
              setUpvote(upvote + 1);
            }}
          >
            👍 {upvote}
          </span>
          <span
            style={{ marginLeft: 3 }}
            onClick={() => {
              setUpvote(upvote - 1);
            }}
          >
            👎{' '}
          </span>
          <span>💬 256</span>
          <span>📤</span>
        </div>
      </div>
    </div>
  );
}
