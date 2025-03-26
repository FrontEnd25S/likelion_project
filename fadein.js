document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.getElementById("map-container");
  const iframe = mapContainer.querySelector("iframe");

  iframe.onload = () => {
    mapContainer.style.opacity = "1";
  };
});
