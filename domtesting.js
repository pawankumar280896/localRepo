// function changeBackgroundColor(selector){
//     //Implement your function here
//     document.querySelector(selector).style.backgroundColor = "yellow";
//    }
// changeBackgroundColor("my-class");
//  console.log("hello I am from js");

// function changeBackgroundColor(selector) {
//         const elements = document.querySelectorAll(selector);
//         for (let i = 0; i < elements.length; i++) {
//           elements[i].style.backgroundColor = "yellow";
//           elements[i].style.color = "black";
//         }
//       }
//       //changeBackgroundColor("#my-id");
//       changeBackgroundColor(".my-class");
//       changeBackgroundColor("#my-id");
//       changeBackgroundColor("button");    

//       console.log("i am end of js");

//       function hello(say){
//         console.log(say);
//       }

//       hello("say Hi");

// const btn=document.createElement("button");
// btn.textContent="Clic kHere";
// btn.className="btn1";

// const division=document.querySelector("div");
// division.appendChild(btn);

// const param=document.createElement("button");
// param.textContent="I am your new paragraph";
// param.className="param1";

// const pa=document.querySelector("h1");
// pa.appendChild(param);
// const blogData = [
//     {
//       title: 'First Blog Post',
//       date: 'January 1, 2022',
//       content: 'this is content of the first blog page.'
//     },
//     {
//       title: 'Second Blog Post',
//       date: 'February 1, 2022',
//       content: 'This is the content of the second blog post.'
//     },
//     {
//       title: 'Third Blog Post',
//       date: 'March 1, 2022',
//       content: 'This is the content of the third blog post.'
//     }
//   ];
// //Create your function here with the name addBlog which takes a blog object as parameter

//  function addBlog(blogData){

// const bp=document.createElement("div");
// bp.className=".blog-post";
// const blogPost = document.querySelector('bp');
//     const blogHeader = document.querySelector('bp1');

//     blogPost.appendChild(blogHeader);
// const bp1=document.createElement("div");
// bp1.className=".blog-header";
// const div1=document.querySelector("h2");
// div1.appendChild( "bp1");

// const div2=document.querySelector("p");
// div2.appendChild( "bp1");
// const bp2=document.createElement("h2");
// bp2.textContent=blog.title;
// bp2.className=".blog-title";
// const bp5=document.createElement("p");
// bp5.textContent=blog.date;
// bp5.className=".blog-date";
// const bp6=document.createElement("p");
// bp6.textContent=blog.content;
// bp6.className=".blog-content";

//     const blogcontent = document.querySelector('bp6');
//     blogPost.appendChild(blogcontent);
// const  bloglist = document.querySelector('.blog-list');

  
//     bloglist.appendChild(blogPost);
// } 


//document.querySelector("h1").remove();

// const pp=document.querySelector('p');
// pp.addEventListener('click',sss());

// function sss(){
//     console.log("Para clicked");
// }

//complete the addBlog function to add moveup, movedown and delete button. 
function addBlog(blog) {
    const blogList = document.querySelector('.blog-list');
    
      
    const newBox = document.createElement('div');
    newBox.classList.add('blog-box');

    const newBlogPost = document.createElement('div');
    newBlogPost.classList.add('blog-post');
      newBox.appendChild(newBlogPost);
      

    const newBlogHeader = document.createElement('div');
    newBlogHeader.classList.add('blog-header');
    newBlogPost.appendChild(newBlogHeader);

    const newBlogTitle = document.createElement('h2');
    newBlogTitle.classList.add('blog-title');
    newBlogTitle.textContent = blog.title;
    newBlogHeader.appendChild(newBlogTitle);

    const newBlogDate = document.createElement('p');
    newBlogDate.classList.add('blog-date');
    newBlogDate.textContent = blog.date;
    newBlogHeader.appendChild(newBlogDate);

    const newBlogContent = document.createElement('p');
    newBlogContent.classList.add('blog-content');
    newBlogContent.textContent = blog.content;
    newBlogPost.appendChild(newBlogContent);
// create a new div with className blog-buttons and append it to newBox

const blogbuttons = document.createElement('div');
blogbuttons.classList.add('blog-buttons');
newBox.appendChild(blogbuttons);

    //Create moveup button with class blog-button and move-up
    //Add event listerner to moveup button

    const moveup = document.createElement('button');
    moveup.classList.add('blog-button');
    moveup.textContent = "MoveUp";
    blogbuttons.appendChild(moveup);
    moveup.addEventListener('click',moveUp);

    function moveUp(){
      if(newBlogPost && newBlogPost.previousSibling){
        newBlogPost.parentNode.insertAfter(newBlogPost.previousSibling, newBlogPost);
      }
    }


    //Create movedown button with class blog-button and move-down
    //Add event listerner to movedown button

    const movedown = document.createElement('button');
    movedown.classList.add('blog-button');
    movedown.textContent = "MoveDown";
    blogbuttons.appendChild(movedown);

    movedown.addEventListener('click',moveDown);

    function moveDown(){
      if(newBlogPost && newBlogPost.previousElementSibling){
        newBlogPost.parentNode.insertBefore(newBlogPost.previousElementSibling,newBlogPost);
      }
    }
    //Create deletebutton with class blog-button and delete
    //Add event listerner to delete button
    const deletebutton = document.createElement('button');
    deletebutton.classList.add('blog-button');
    deletebutton.textContent = "Delete";
    blogbuttons.appendChild(deletebutton);

    deletebutton.addEventListener('click',deleteContent);

    function deleteContent(){
      if(newBlogPost)
      {
        newBlogPost.remove();
        blogbuttons.remove();
      }
    }
  

    blogList.appendChild(newBox);

  // Add event listeners to the buttons
}

const blogData = [
{
title: 'First Blog Post',
date: 'January 1, 2022',
content: 'This is the content of the first blog post.'
},
{
title: 'Second Blog Post',
date: 'February 1, 2022',
content: 'This is the content of the second blog post.'
},
{
title: 'Third Blog Post',
date: 'March 1, 2022',
content: 'This is the content of the third blog post.'
}
];

blogData.forEach(blog => addBlog(blog)); 
