/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function PostAction({ vote }) {
  const [upvote, setUpvote] = useState(vote);

  return (
    <div className="flex justify-between items-center space-x-4">
      <div className="flex gap-x-4">
        <button
          type="button"
          className="inline-flex items-center gap-x-1 rounded-full bg-white px-2.5 py-2 text-sm font-light text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
        >
          {/* thumb up */}
          <div
            className="flex gap-1 items-center"
            onClick={() => setUpvote(upvote + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>

            {upvote > 0 ? upvote : ''}
          </div>
          <div className="w-px h-5 bg-gray-300 mx-2" /> {/* 竖线 */}
          {/* down-vote */}
          <div className="flex gap-1" onClick={() => setUpvote(upvote - 1)}>
            {upvote < 0 ? upvote : ''}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </button>

        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-2.5 py-1 text-sm font-light text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
        </button>
      </div>

      <div className="flex gap-x-4">
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-2.5 py-2 text-sm font-light text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
            />
          </svg>
          分享
        </button>
      </div>
    </div>
  );
}
