// components/MarkdownContent.js
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
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
    <div className="markdown-content">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loading loading-ring"></div>
        </div>
      ) : (
        <ReactMarkdown>{content}</ReactMarkdown>
      )}
    </div>
  );
};

export default MarkdownContent;
