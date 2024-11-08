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
        return (
          <div key={comment.id} className="border-b">
            <Comment key={comment.id} {...comment} />
          </div>
        );
      })}
    </div>
  );
}