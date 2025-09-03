const track = document.getElementById('track');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const card = document.querySelector('.card');
const gap = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap')) || 20;
let cardWidth = card.offsetWidth + gap;

function updateCardWidth() {
  cardWidth = card.offsetWidth + gap;
}

window.addEventListener('resize', updateCardWidth);

next.addEventListener('click', () => {
  track.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

prev.addEventListener('click', () => {
  track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});
