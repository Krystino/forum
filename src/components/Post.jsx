/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

import PostAction from './PostAction';

const colorMapping = {
  大对: 'bg-green-800',
  对: 'bg-green-400',
  不对: 'bg-red-400',
  待定: 'bg-gray-500',
};

export default function Post({ post }) {
  const {
    username: userName,
    time,
    title,
    avatar,
    content,
    upvotes,
    judge,
    id,
  } = post;

  const navigate = useNavigate();

  return (
    <div className="flex p-4 border-b border-gray-200">
      <img
        src={avatar}
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
          <span
            className={`inline-block ${
              colorMapping[judge] || 'bg-[#23D9D3]'
            } text-white text-xs px-2 py-1 rounded mt-2`}
          >
            {judge}
          </span>
          <p className="text-base text-gray-700 my-4">
            {content.length < 50 ? content : content.substr(0, 55) + '...'}
          </p>
        </div>

        <PostAction vote={upvotes} />
      </div>
    </div>
  );
}
