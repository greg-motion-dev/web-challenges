console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// //create
// const newPost = document.createElement("article");
// //configure
// newPost.classList.add("post");

// const postText = document.createElement("p");
// postText.classList.add("post__content");
// postText.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

// const postFooter = document.createElement("footer");
// postFooter.classList.add("post__footer");

// const postUsername = document.createElement("span");
// postUsername.classList.add("post__username");
// postUsername.textContent = "@username";

// const likeBtn = document.createElement("button");
// likeBtn.classList.add("post__button");
// likeBtn.textContent = "♥ Like";
// likeBtn.addEventListener("click", handleLikeButtonClick);

// //append
// postFooter.append(postUsername, likeBtn);
// newPost.append(postText, postFooter);

// document.body.append(newPost);


//create
const newPost = document.createElement("article");
const postText = document.createElement("p");
const postFooter = document.createElement("footer");
const postUsername = document.createElement("span");
const likeBtn = document.createElement("button");

//configure
newPost.classList.add("post");
postText.classList.add("post__content");
postText.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
postFooter.classList.add("post__footer");
postUsername.classList.add("post__username");
postUsername.textContent = "@username";
likeBtn.classList.add("post__button");
likeBtn.textContent = "♥ Like";
likeBtn.addEventListener("click", handleLikeButtonClick);

//append
postFooter.append(postUsername, likeBtn);
newPost.append(postText, postFooter);
document.body.append(newPost);


//