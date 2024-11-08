/* eslint-disable react/prop-types */
export default function Comment({
  id,
  username,
  time,
  content,
  upvotes,
  replies,
}) {
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
          <span className="mx-1">•</span>
          <p>{time}</p>
        </div>
        <p className="text-sm text-gray-900 mb-2">{content}</p>
        <div className="flex items-center space-x-4 text-gray-500 text-sm">
          <span>↩️ Reply</span>
          <span>👍 {upvotes}</span>
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
