document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('success-message').textContent = 'Pesan berhasil dikirim!';
  this.reset();
});