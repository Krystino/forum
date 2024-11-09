/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

export default function Post({ post }) {
  const {
    username: userName,
    time,
    title,
    content,
    upvotes,
    downvotes,
    judge,
    id,
  } = post;

  const navigate = useNavigate();

  return (
    <div className="flex p-4 border-b border-gray-200">
      <img
        src={`/avatar${id == 1 ? 1 : Math.ceil(Math.random() * 15)}.jpg`}
        alt="User Avatar"
        className="w-10 h-10 rounded-full mr-3"
      />
      <div className="flex-1">
        <div className="text-sm text-gray-500 flex items-center space-x-2">
          <p className="font-medium">{userName}</p>
          <span>•</span>
          <p className="text-xs">{time}</p>
        </div>
        <div
          onClick={() => navigate(`/detail?id=${id}`)}
          className="cursor-pointer"
        >
          <h2 className="text-lg font-semibold text-gray-900 mt-1">{title}</h2>
          <span className="inline-block bg-[#23D9D3] text-white text-xs px-2 py-1 rounded mt-2">
            {judge}
          </span>
          <p className="text-sm text-gray-700 mt-2">
            {content.length < 50 ? content : content.substr(0, 50) + '...'}
          </p>
        </div>

        <div className="flex text-gray-500 text-sm mt-2 space-x-4">
          <span>
            👍 {upvotes > downvotes ? upvotes - downvotes : ''} 👎{' '}
            {upvotes < downvotes ? downvotes - upvotes : ''}
          </span>
          <span></span>
          <span>💬 256</span>
          <span>🙏 2</span>
        </div>
      </div>
    </div>
  );
}
