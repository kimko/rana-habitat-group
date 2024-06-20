export const fetchMarkdownContent = async (path) => {
  const response = await fetch(`${process.env.PUBLIC_URL}/${path}`);
  const text = await response.text();
  return text;
};
