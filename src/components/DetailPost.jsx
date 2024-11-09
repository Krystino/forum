/* eslint-disable react/prop-types */
import React from 'react';

// import ExpandableText from './ExpandableText';
import StreamChat from './StreamChat';

import PostAction from './PostAction';

export default function DetailPost({ post }) {
  const {
    username: userName,
    time,
    title,
    content,
    upvotes,
    judge,
    forum,
  } = post;

  return (
    <div className="px-8 py-4 border-b border-gray-200">
      <div className="flex">
        <img
          src={`/avatar${
            userName == '紫陌' ? 1 : Math.ceil(Math.random() * 15)
          }.jpg`}
          alt={userName}
          className="w-8 h-8 rounded-full mr-3"
        />
        <div
          className="flex flex-1 h-8 items-center"
          style={{ width: '300px' }}
        >
          <div className="text-sm text-gray-500 flex items-center">
            <p className="font-bold">{forum}</p>
            <span className="mx-1">•</span>
            <p>{userName}</p>
            <span className="mx-1">•</span>
            <p>{time}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900 mt-4 mb-2s">
          {title}
        </h2>
        <span className="inline-block bg-[#23D9D3] text-white text-xs mt-2 px-2 py-1 rounded mt-2">
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
      </div>
      {/* AI 总结 */}
      <StreamChat>{'帖子标题：' + title + '\n帖子内容：' + content}</StreamChat>

      <PostAction vote={upvotes} />
    </div>
  );
}
