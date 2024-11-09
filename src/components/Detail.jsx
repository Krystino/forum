import { useLocation } from 'react-router-dom';

import posts from '../json/posts.json';

import DetailPost from './DetailPost';
import Comment from './Comment';

export default function Detail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id') || 1; // 获取查询参数 `id` 的值
  console.log(posts, 'posts');

  const post = posts.filter((v) => v.id === id)[0];

  const { comments } = post;
  return (
    <div className="max-w-xl bg-white mt-3">
      <DetailPost post={post} />
      {comments.map((comment) => {
        console.log(comment);
        return (
          <div key={comment.id} className="border-b">
            <Comment key={comment.id} {...comment} />
          </div>
        );
      })}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-lg p-2 flex justify-between items-center space-x-2 text-gray-600 text-sm">
        {/* 说点什么输入框 */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="说点什么..."
            className="w-full bg-gray-100 rounded-full px-4 py-2 focus:outline-none"
          />
        </div>

        {/* 点赞/点踩按钮 */}
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        {/* 评论按钮 */}
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
        </button>

        {/* 分享按钮 */}
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
            />
          </svg>
        </button>
      </div>
      <div className="h-10"></div>
    </div>
  );
}