import { useState } from 'react';

export default function AISummary(content) {
  console.log(content);

  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  // 模拟生成摘要的函数
  const generateSummary = async () => {
    setLoading(true);
    setSummary(''); // 清空之前的摘要
    try {
      // 模拟 API 调用或 AI 模型
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve('这是帖子内容的简短总结。'); // 模拟生成的摘要
        }, 2000);
      });
      setSummary(response);
    } catch (error) {
      setSummary('抱歉，生成摘要时出现了问题。' + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-4 p-4 bg-gray-100 rounded-lg shadow">
      {/* AI Summarize Button */}
      <button
        type="button"
        onClick={generateSummary}
        disabled={loading}
        className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none disabled:bg-gray-300"
      >
        {loading ? '生成中...' : 'AI 总结帖子内容'}
      </button>

      {/* Display Summary */}
      {summary && (
        <div className="mt-4 p-3 bg-white rounded-lg border border-gray-300 text-gray-700">
          <h3 className="font-semibold text-lg mb-2">帖子摘要</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
