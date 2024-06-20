// components/Leadership.js
import React from 'react';
import MarkdownContent from './MarkdownContent';

const Leadership = () => (
  <section id="leadership" className="container mx-auto p-8">
    <h2 className="text-3xl font-bold mb-4">Leadership</h2>
    <MarkdownContent path="content/leadership/index.md" />
  </section>
);

export default Leadership;
