// Fetch and display the content of blog.md

fetch('blog.md')
  .then(response => response.text())
  .then(text => {
    const markdown = marked(text, { headerIds: false });
    document.getElementById('content').innerHTML = markdown;

    // Syntax highlighting (if you've included the highlight.js library)
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
  })
  .catch(error => {
    console.error('Error fetching the Markdown file:', error);
  });
