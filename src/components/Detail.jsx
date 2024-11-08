import { useLocation } from 'react-router-dom';

import posts from '../json/posts.json';

import DetailPost from './DetailPost';
import Comment from './Comment';

export default function Detail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id'); // 获取查询参数 `id` 的值

  const post = posts.filter((v) => v.id === id)[0];

  const { comments } = post;
  return (
    <div className="max-w-md mx-auto bg-white">
      <DetailPost post={post} />

      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}

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

// function Post({
//   subreddit,
//   username,
//   time,
//   title,
//   content,
//   upvotes,
//   comments,
// }) {
//   return (
//     <div className="p-4 border-b border-gray-200">
//       <div className="flex items-center text-xs text-gray-500 mb-1">
//         <p className="font-bold">{subreddit}</p>
//         <span className="mx-1">•</span>
//         <p>{username}</p>
//         <span className="mx-1">•</span>
//         <p>{time}</p>
//       </div>
//       <h2 className="text-lg font-semibold text-gray-900 mb-1">{title}</h2>
//       <p className="text-sm text-gray-700 mb-4">{content}</p>
//       <div className="flex space-x-4 text-gray-500 text-sm">
//         <span>👍 {upvotes}</span>
//         <span>💬 {comments}</span>
//         <span>🔗</span>
//         <span>📤</span>
//       </div>
//     </div>
//   );
// }
