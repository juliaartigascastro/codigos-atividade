// Arquivo de apoio. O foco pedagógico deste exercício é a semântica do HTML.
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('nav a[aria-current]').forEach((item) => item.removeAttribute('aria-current'));
    link.seAttribute('aria-current', 'location');
  });
});
console.info('Exercício 01 carregado.');