// Toggle FAQ answers
function toggleAnswer(answerId) {
    const answer = document.getElementById(answerId);
    const allAnswers = document.querySelectorAll(".faq-answer");
    const clickedButton = event.currentTarget;
    const allButtons = document.querySelectorAll(".faq-question");

    // Close all answers first
    allAnswers.forEach((item) => {
      if (item.id !== answerId) {
        item.style.display = "none";
      }
    });

    // Remove active class from all buttons
    allButtons.forEach((button) => {
      button.classList.remove("active");
    });

    // Toggle the clicked answer
    if (answer.style.display === "block") {
      answer.style.display = "none";
      clickedButton.classList.remove("active");
    } else {
      answer.style.display = "block";
      clickedButton.classList.add("active");
    }
  }

  // Submit story function
  function submitStory() {
    const storyInput = document.getElementById("story-input");
    const userPosts = document.getElementById("user-posts");

    if (storyInput.value.trim() !== "") {
      // Create new blog post element
      const blogPost = document.createElement("div");
      blogPost.className = "blog-post";

      // Add post content
      const postContent = document.createElement("p");
      postContent.textContent = storyInput.value;

      // Add date
      const postDate = document.createElement("p");
      postDate.style.fontStyle = "italic";
      postDate.style.color = "#666";
      postDate.textContent = "Posted on: " + new Date().toLocaleDateString();

      // Append elements to blog post
      blogPost.appendChild(postContent);
      blogPost.appendChild(postDate);

      // Add to page
      userPosts.prepend(blogPost);

      // Clear input
      storyInput.value = "";

      // Success message
      alert("Your story has been posted successfully!");
    } else {
      alert("Please write your story before posting.");
    }
  }

  // Initialize FAQ answers to be hidden on page load
  document.addEventListener("DOMContentLoaded", function () {
    const allAnswers = document.querySelectorAll(".faq-answer");
    allAnswers.forEach((answer) => {
      answer.style.display = "none";
    });
  });