let likes = 0;
let likeButton = document.getElementById("like");

likeButton.addEventListner("click", () => {
  likes = likes === 0 ? 1 : 0;
  likeButton.textContext = likes ? `👍 ${likes} Liked` : "👍 Like";
});
