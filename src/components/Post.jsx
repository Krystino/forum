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
        src="https://styles.redditmedia.com/t5_379gw/styles/communityIcon_mx3mfwfzpup91.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=d8343c9d7c2be645935e65af21d3c019c0c671b3"
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
          <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded mt-2">
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
