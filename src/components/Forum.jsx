import Post from './Post';

export default function RedditForum() {
  return (
    <div className="w-96 font-sans text-gray-900">
      <header className="flex items-start p-4 border-b border-gray-200">
        <img
          src="https://styles.redditmedia.com/t5_379gw/styles/communityIcon_mx3mfwfzpup91.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=d8343c9d7c2be645935e65af21d3c019c0c671b3"
          alt="Reddit Logo"
          className="w-12 h-12 mr-3 rounded-full"
        />
        <div className="flex-1">
          <h1 className="text-xl font-bold">r/reddit</h1>
          <p className="text-sm text-gray-500">228,209 members ● 24 online</p>
          <p className="text-sm text-gray-600 mt-1">
            The most official Reddit community of all official Reddit
            communities. Your go-to place for Reddit updates, announcement...
          </p>
          <div className="mt-2">
            <a href="#" className="text-xs text-blue-600 mr-2">
              See more
            </a>
            <a href="#" className="text-xs text-blue-600">
              Top 50 in Reddit Meta
            </a>
          </div>
        </div>
        <button className="ml-3 bg-blue-500 text-white rounded-full px-4 py-1 text-sm">
          Join
        </button>
      </header>

      <div className="flex border-b border-gray-200 px-4 py-2 space-x-4">
        <button className="text-blue-500 font-bold border-b-2 border-blue-500 pb-1">
          All
        </button>
        <button className="text-blue-500">Updates</button>
        <button className="text-blue-500">Changelog</button>
        <button className="text-blue-500">Frivolity</button>
        <button className="text-blue-500">History</button>
      </div>

      <Post />
    </div>
  );
}
