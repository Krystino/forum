import { useState } from 'react';

export default function StreamChat(content) {
  const dialog = content['children'];
  const [responseData, setResponseData] = useState('');
  const [loading, setLoading] = useState(false);
  const [showRes, setShowRes] = useState(false);

  console.log(dialog, 'dialog');

  const fetchData = async () => {
    setLoading(true);
    let previousContent = ''; // 用于存储之前的内容，防止重复

    try {
      const response = await fetch('https://api.coze.cn/v3/chat', {
        method: 'POST',
        headers: {
          Authorization:
            'Bearer pat_yFhStrOnafAA7E1qzygVzNoYYqKSr9HULU76r4uCJo5VzshsbphsUq9kgfde2UVI',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bot_id: '7435207914224107583',
          user_id: '123',
          stream: true, // 设置为流式
          auto_save_history: true,
          additional_messages: [
            {
              role: 'user',
              content: dialog,
              content_type: 'text',
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        // 读取流中的数据，并转换成字符串
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');
        const jsonContentArr = [];

        for (const line of lines) {
          if (line.startsWith('data:')) {
            try {
              const jsonData = JSON.parse(line.slice(5));

              // 仅当新的内容不等于上一次内容时，进行追加
              if (
                jsonData.content &&
                jsonData.content !== previousContent &&
                !jsonData.content.includes('{') &&
                jsonData.type === 'answer'
              ) {
                jsonContentArr.push(jsonData.content);
                console.log('jsonData', jsonData);
                console.log('jsonData.content', jsonData.content);
                console.log('jsonContentArr', jsonContentArr);

                setResponseData(jsonData.content);
                previousContent = jsonData.content;
              }

              if (jsonData.type === 'follow_up') {
                setShowRes(true);
              }
            } catch (error) {
              console.error('Error parsing JSON:', error);
            }
          }
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="my-4 p-4 bg-gray-100 rounded-lg shadow"
      style={{ width: '360px' }}
    >
      {/* AI Summarize Button */}
      <button
        type="button"
        onClick={fetchData}
        disabled={loading}
        className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none disabled:bg-gray-300"
      >
        {loading ? '生成中...' : 'AI 总结帖子内容'}
      </button>

      {/* Display Summary */}
      {showRes && (
        <div className="mt-4 p-3 bg-white rounded-lg border border-gray-300 text-gray-700">
          <h3 className="font-semibold text-lg mb-2">帖子摘要</h3>
          <p>{responseData}</p>
        </div>
      )}
    </div>
  );
}
