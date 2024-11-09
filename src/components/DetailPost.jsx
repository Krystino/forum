/* eslint-disable react/prop-types */

import StreamChat from './StreamChat';
import PostContent from './ExpandableText';

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
    comments,
  } = post;

  // 递归函数，计算评论和回复的总数
  const countCommentsAndReplies = (comments) => {
    let count = comments.length;

    // 遍历每个评论，递归统计其回复的数量
    comments.forEach((comment) => {
      if (comment.replies && comment.replies.length > 0) {
        count += countCommentsAndReplies(comment.replies); // 递归统计回复
      }
    });

    return count;
  };

  console.log(countCommentsAndReplies(comments));

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
        <PostContent content={content} />
      </div>
      {/* AI 总结 */}
      <StreamChat>{'帖子标题：' + title + '\n帖子内容：' + content}</StreamChat>

      <PostAction
        vote={upvotes}
        commentsCount={countCommentsAndReplies(comments)}
      />
    </div>
  );
}
