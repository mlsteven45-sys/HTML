// Abrir modal de galería
function openModal(element) {
  const modal = new bootstrap.Modal(document.getElementById('imageModal'));
  document.getElementById('modalImg').src = element.src;
  document.getElementById('caption').innerText = element.alt;
  modal.show();
}
