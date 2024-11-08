import Post from './Post';

import data from '../json/main.json';
import posts from '../json/posts.json';

export default function RedditForum() {
  const { forumTitle, forumDesc, forumAvatarUrl } = data;
  // console.log(data, posts);
  return (
    <div className="w-100 font-sans text-gray-900">
      <header className="flex items-start p-8 border-b border-gray-200">
        <img
          src={forumAvatarUrl}
          alt="Reddit Logo"
          className="w-16 h-16 mr-3 rounded-full"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mt-1">{forumTitle}</h1>
          <p className="text-sm text-gray-400 mt-1">228,209 成员 ● 24 在线</p>
          <p className="text-base text-gray-600 mt-5">{forumDesc}</p>
          <div className="mt-2">
            <a href="#" className="text-xs text-blue-600 mr-2">
              查看更多
            </a>
            <a href="#" className="text-xs text-blue-600">
              查看热门 50
            </a>
          </div>
        </div>
        <button className="ml-3 bg-blue-500 text-white rounded-full px-4 py-1 text-sm">
          发帖
        </button>
      </header>

      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}