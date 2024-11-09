import { useState } from 'react';
import badgeMap from '../json/badge.json';

export default function Comment(comment) {
  const { id, username, time, content, upvotes, replies, badge } = comment;

  const [upvote, setUpvote] = useState(upvotes);

  return (
    <div className="flex items-start space-x-2 p-4 border-gray-200" key={id}>
      <img
        src="https://styles.redditmedia.com/t5_379gw/styles/communityIcon_mx3mfwfzpup91.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=d8343c9d7c2be645935e65af21d3c019c0c671b3"
        alt="Avatar"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center text-xs text-gray-500 mb-1">
          <p className="font-medium">{username}</p>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-sm text-blue-700 ml-1">
            {badgeMap[badge || '6'].val}
          </span>
          <span className="mx-1">•</span>
          <p>{time}</p>
        </div>
        <p className="text-sm text-gray-900 mb-2">{content}</p>
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
          <span>💬 {(replies && replies.length) || 0}</span>
        </div>
        {replies && (
          <div className="mt-4 border-l border-gray-200">
            {replies.map((reply, index) => (
              <Comment
                key={index}
                username={reply.username}
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
