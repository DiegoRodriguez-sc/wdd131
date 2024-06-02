import { flowers } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navbar = document.querySelector('.navbar');
  const flowerOfTheDayContainer = document.querySelector('.flower-of-the-day .flower-card_favorite');
  const favoritesCarousel = document.querySelector('.favorites-carousel .carousel');

  burger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    burger.classList.toggle('active');
  });

  const getFlowerOfTheDay = () => {
    const today = new Date().toISOString().split('T')[0];
    let storedFlower = JSON.parse(localStorage.getItem('flowerOfTheDay'));
    if (!storedFlower || storedFlower.date !== today) {
      const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
      storedFlower = { flower: randomFlower, date: today };
      localStorage.setItem('flowerOfTheDay', JSON.stringify(storedFlower));
    }
    return storedFlower.flower;
  };

  const displayFlowerOfTheDay = () => {
    const flower = getFlowerOfTheDay();
    const flowerHTML = `
      <img loading="lazy" src="${flower.image}" alt="Flower of the Day" onerror="this.onerror=null; this.src='./images/flor_no_available.webp'">
      <div class="flower-info">
        <h3>${flower.name}</h3>
        <p><em>${flower.cientific_name}</em></p>
        <p><strong>Height:</strong> ${flower.characteristics.height}</p>
        <p class="flower-info-desktop"> <strong>Description:</strong> ${flower.characteristics.data}</p>
        <p><strong>Meaning:</strong> ${flower.characteristics.meaning ? flower.characteristics.meaning : "Sorry, we don't have information about this flower's meaning." }</p>
      </div>
    `;
    flowerOfTheDayContainer.innerHTML = flowerHTML;
  };

  const displayFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.length > 0) {
      const favoriteFlowers = flowers.filter(flower => favorites.includes(flower.name));
      favoritesCarousel.innerHTML = '';
      favoriteFlowers.forEach(flower => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        carouselItem.innerHTML = `
          <img loading="lazy" src="${flower.image}" alt="${flower.name}">
          <p>${flower.name}</p>
          <p><em>${flower.cientific_name}</em></p>
        `;
        favoritesCarousel.appendChild(carouselItem);
      });
    } else {
      console.log("No favorites yet");
      favoritesCarousel.innerHTML = '<div class="carousel-not-favorites">No favorites yet</div>';
    }
  };
  if(flowerOfTheDayContainer){
    displayFlowerOfTheDay();
  }
  if(favoritesCarousel){
    displayFavorites();
  }
});
