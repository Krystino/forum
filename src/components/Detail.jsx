import { useLocation } from 'react-router-dom';

import posts from '../json/posts.json';

import DetailPost from './DetailPost';
import Comment from './Comment';

export default function Detail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id') || 1; // 获取查询参数 `id` 的值

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
          👍
        </button>
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 transition">
          👎
        </button>

        {/* 评论按钮 */}
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 transition">
          💬
        </button>

        {/* 分享按钮 */}
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 transition">
          📤
        </button>
      </div>
    </div>
  );
}