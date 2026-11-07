/* Pop up AD for visiting users (from limitlessmusic.official js/popup.js) */
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('close');
  if (!popup || !closeBtn) return;

  // Show the popup when the page loads
  popup.style.display = 'block';

  // Close the popup when the user clicks on the close button
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Close the popup if the user clicks anywhere outside of the popup content
  window.addEventListener('click', event => {
    if (event.target === popup) popup.style.display = 'none';
  });
});
