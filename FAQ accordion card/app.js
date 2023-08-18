const acordeon = document.querySelectorAll('li');

for (const p of acordeon) {
  p.addEventListener('click', () => {
    p.classList.toggle('mostrar');
  });
}
