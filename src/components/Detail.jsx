export default function DetailPost() {
  return (
    <div className="max-w-md mx-auto bg-white">
      <Post
        subreddit="r/televisionsuggestions"
        username="u/aarongifs"
        time="1h"
        title="Please Distract Me From Reality"
        content="I live in America and I am very sad today. What should I watch today to forget how sad the world is?"
        upvotes={21}
        comments={74}
      />

      <Comment
        username="danytheredditer"
        time="1h"
        content="Schitt’s Creek"
        upvotes={13}
      />

      <Comment
        username="throwaw939393"
        time="22m"
        content="This will be my show today 💔😔💔"
        upvotes={3}
      />

      <Comment
        username="Milly_Hagen"
        time="1h"
        content="The Americans. Go and live in the 80s for a week or two like I did recently. It was much less shit than now. The nostalgia was so good (as an 80s kid)."
        upvotes={7}
        replies={[
          {
            username: 'Jellogg',
            time: '1h',
            content:
              'I loved this show so much! Keri Russell and Matthew Rhys did an incredible job portraying their characters.',
            upvotes: 2,
            replies: [
              {
                username: 'Milly_Hagen',
                time: '1h',
                content:
                  "Same, one of the best shows I've ever seen. They were exceptional. I developed a major crush on Costa Ronin too 😅",
                upvotes: 2,
                replies: [
                  {
                    username: 'clumystarfish_',
                    time: '23m',
                    content: 'I thought I was the only one!',
                    upvotes: 1,
                  },
                ],
              },
            ],
          },
        ]}
      />
    </div>
  );
}

function Post({
  subreddit,
  username,
  time,
  title,
  content,
  upvotes,
  comments,
}) {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-center text-xs text-gray-500 mb-1">
        <p className="font-bold">{subreddit}</p>
        <span className="mx-1">•</span>
        <p>{username}</p>
        <span className="mx-1">•</span>
        <p>{time}</p>
      </div>
      <h2 className="text-lg font-semibold text-gray-900 mb-1">{title}</h2>
      <p className="text-sm text-gray-700 mb-4">{content}</p>
      <div className="flex space-x-4 text-gray-500 text-sm">
        <span>👍 {upvotes}</span>
        <span>💬 {comments}</span>
        <span>🔗</span>
        <span>📤</span>
      </div>
    </div>
  );
}

function Comment({ username, time, content, upvotes, replies }) {
  return (
    <div className="flex items-start space-x-2 p-4 border-b border-gray-200">
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
          <div className="pl-8 mt-4 border-l border-gray-200">
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
