let likes = 0;
let likeButton = document.getElementById("like");
let likeCount = document.getElementById("likeCount");

likeButton.addEventListner("click", () => {
  likes = likes === 0 ? 1 : 0;
  likeCount.textContext = likes;
  likeButton.textContext = likes ? "👍 Liked" : "👍 Like";
});
