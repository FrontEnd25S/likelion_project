let likes = 0;
let likeButton = document.getElementByID("like");
let likeCount = document.getElementByID("likeCount");

likeButton.addEventListner("click", () => {
  likes = likes === 0 ? 1 : 0;
  likeCount.textContext = likes;
  likeButton.textContext = likes ? "👍 Liked" : "👍 Like";
});
