const popup = document.getElementById('cookie-popup');
const backdrop = document.getElementById('backdrop');
const acceptBtn = document.getElementById('accept-cookie');

window.onload = () => {
  popup.classList.add('show');
  backdrop.classList.add('show');
};

acceptBtn.addEventListener('click', () => {
  popup.classList.remove('show');
  backdrop.classList.remove('show');
});
