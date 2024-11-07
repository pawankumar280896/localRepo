function addBlog(blog) {
    // Create a new div for the blog post
    const blogPostDiv = document.createElement('div');
    blogPostDiv.className = 'blog-post';

    // Create and append the blog header
    const blogHeaderDiv = document.createElement('div');
    blogHeaderDiv.className = 'blog-header';
    
    const titleElement = document.createElement('h1');
    titleElement.textContent = blog.title;
    blogHeaderDiv.appendChild(titleElement);
    
    const dateElement = document.createElement('p');
    dateElement.textContent = blog.date;
    blogHeaderDiv.appendChild(dateElement);
    
    blogPostDiv.appendChild(blogHeaderDiv);

    // Create and append the blog content
    const contentElement = document.createElement('p');
    contentElement.textContent = blog.content;
    blogPostDiv.appendChild(contentElement);

    // Append the new blog post to the main blog section (assuming it exists)
    const blogSection = document.querySelector('.blog-section'); // Adjust selector as needed
    blogSection.appendChild(blogPostDiv);
}

// Example usage
const newBlogPost = {
    title: "My First Blog Post",
    date: "October 30, 2024",
    content: "This is the content of my first blog post!"
};

addBlog(newBlogPost);
