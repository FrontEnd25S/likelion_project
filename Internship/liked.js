let likes = 0;
let likeButton = document.getElementById("like");

likeButton.addEventListener("click", () => {
  likes = likes === 0 ? 1 : 0;
  likeButton.textContext = likes ? `👍 ${likes} Liked` : "👍 Like";
});
