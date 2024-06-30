// components/MarkdownContent.js
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { fetchMarkdownContent } from '../utils/fetchContent';

const MarkdownContent = ({ path }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getContent = async () => {
      setLoading(true);
      const data = await fetchMarkdownContent(path);
      setContent(data);
      setLoading(false);
    };
    getContent();
  }, [path]);

  return (
    <div className="markdown-content text-left">
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="loading loading-ring"></div>
        </div>
      ) : (
        <ReactMarkdown className="prose" remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      )}
    </div>
  );
};

export default MarkdownContent;
