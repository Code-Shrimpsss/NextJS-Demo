'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1
        style={{
          color: 'red',
          fontSize: 40,
        }}
      >
        Something went wrong!
      </h1>
      <p
        style={{
          color: 'red',
          margin: '10px 0px',
        }}
      >
        Error Detail: {error.message}
      </p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
