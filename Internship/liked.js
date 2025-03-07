let likes = 0;
const likeButton = document.getElementID("like");
const likeCount = document.getElementID("likeCount");

likeButton.addEventListner("click", () => {
  likes = likes === 0 ? 1 : 0;
  likeCount.textContext = likes;
  likeButton.textContext = likes ? "👍 Liked" : "👍 Like";
});
