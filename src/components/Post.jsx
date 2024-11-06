import { useNavigate } from 'react-router-dom';

export default function Post() {
  const navigate = useNavigate();

  return (
    <div
      className="flex p-4 border-b border-gray-200"
      onClick={() => navigate('/detail')}
    >
      <img
        src="https://styles.redditmedia.com/t5_379gw/styles/communityIcon_mx3mfwfzpup91.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=d8343c9d7c2be645935e65af21d3c019c0c671b3"
        alt="User Avatar"
        className="w-10 h-10 rounded-full mr-3"
      />
      <div className="flex-1">
        <div className="text-sm text-gray-500 flex items-center space-x-2">
          <p className="font-medium">traceroo</p>
          <span>•</span>
          <p className="text-xs">126d</p>
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mt-1">
          Update to “Defending the open Internet (again)”: What happened at the
          Supreme Court?
        </h2>
        <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded mt-2">
          Updates
        </span>
        <p className="text-sm text-gray-700 mt-2">
          TL;DR: Yesterday, the Supreme Court issued a decision reinforcing that
          the First Amendment prevents governments from interfering with the
          expressive moderation decisions of online communities while sending
          the NetChoice cases back to the lower courts. It’s...
        </p>
        <div className="flex text-gray-500 text-sm mt-2 space-x-4">
          <span>👍 262</span>
          <span>💬 256</span>
          <span>🙏 2</span>
        </div>
      </div>
    </div>
  );
}
