/* Pop up AD for visiting users (from limitlessmusic.official js/popup.js) */
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('close');
  if (!popup || !closeBtn) return;

  const setPopupOpen = open => popup.classList.toggle('is-open', open);

  // Show the popup when the page loads
  setPopupOpen(true);

  // Close with the "x", a click outside the popup content, or Escape
  closeBtn.addEventListener('click', () => setPopupOpen(false));

  popup.addEventListener('click', event => {
    if (event.target === popup) setPopupOpen(false);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setPopupOpen(false);
  });
});
