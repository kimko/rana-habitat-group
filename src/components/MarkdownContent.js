// components/MarkdownContent.js
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { fetchMarkdownContent } from '../utils/fetchContent';

const MarkdownContent = ({ path }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const getContent = async () => {
      const data = await fetchMarkdownContent(path);
      setContent(data);
    };
    getContent();
  }, [path]);

  return (
    <div className="markdown-content">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
