import { useState } from 'react';
import badgeMap from '../json/badge.json';

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


export default function Comment(comment) {
  const { id, username, time, content, upvotes, replies, badge } = comment;


  const [upvote, setUpvote] = useState(upvotes);

  return (
    <div className="flex items-start space-x-2 p-4 border-gray-200" key={id}>
      <img
        src={`/avatar${
          username == '紫陌' ? 1 : Math.ceil(Math.random() * 15)
        }.jpg`}
        alt="Avatar"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center text-xs text-gray-500 mb-1">
          <p className="font-medium">{username}</p>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-sm text-blue-700 ml-1">
            {badgeMap.find((item) => item.id === badge)['val']}
          </span>
          <span className="mx-1">•</span>
          <p>{time}</p>
        </div>
        <p className="text-base text-gray-900 mb-2">{content}</p>
        <div className="flex items-center space-x-4 text-gray-500 text-sm">
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
          <span>
            💬 {(replies ? countCommentsAndReplies(replies) : 0) || 0}
          </span>
        </div>
        {replies && (
          <div className="mt-4 border-l border-gray-200">
            {replies.map((reply, index) => (
              <Comment
                key={index}
                username={reply.username}
                badge={reply.badge}
                time={reply.time}
                content={reply.content}
                upvotes={reply.upvotes}
                replies={reply.replies}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
