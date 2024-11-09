import Post from './Post';

import data from '../json/main.json';
import posts from '../json/posts.json';

export default function RedditForum() {
  const { forumTitle, forumDesc, forumAvatarUrl } = data;
  // console.log(data, posts);
  return (
    <div className="w-100 font-sans text-gray-900">
      <div className="p-8 border-b">
        <header className="flex items-start border-gray-200">
          <img
            src={forumAvatarUrl}
            alt="Reddit Logo"
            className="w-16 h-16 mr-4 rounded-full"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[#23D9D3]">{forumTitle}</h1>
            <div className="flex gap-2 mt-2">
              <p className="text-sm text-gray-500">28,209 成员</p>
              <p className="text-sm text-[#23D9D3]">●</p>
              <p className="text-sm text-gray-500">24 在线</p>
            </div>
          </div>
          <button className="ml-3 bg-[#23D9D3] text-white rounded-full px-4 py-1 text-sm">
            发帖
          </button>
        </header>
        <p className="text-base text-gray-800 mt-5">{forumDesc}</p>
        <div className="mt-2">
          <a href="#" className="text-xs text-[#23D9D3] mr-2">
            查看更多
          </a>
          <a href="#" className="text-xs text-[#23D9D3]">
            查看热门 50
          </a>
        </div>
      </div>

      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}
