let likes = 0;
let likeBtn = document.getElementById("like");

likeBtn.addEventListener("click", () => {
  likes = likes === 0 ? 1 : 0;
  likeBtn.textContent = likes ? `👍 ${likes} Liked`: `👍 Like`;
});
