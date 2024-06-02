import { flowers } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const flowerList = document.getElementById('flower-list');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageNumber = document.getElementById('page-number');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    let currentPage = 1;
    const itemsPerPage = 6;

    const getPaginatedFlowers = (page, searchTerm = '') => {
        const filteredFlowers = flowers.filter(flower => 
            flower.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            flower.cientific_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = page * itemsPerPage;
        const paginatedFlowers = filteredFlowers.slice(startIndex, endIndex);

        return {
            data: paginatedFlowers,
            meta: {
                previous_page: page > 1,
                next_page: endIndex < filteredFlowers.length,
                total_pages: Math.ceil(filteredFlowers.length / itemsPerPage),
            }
        };
    };

    const renderFlowers = (flowers) => {
        flowerList.innerHTML = '';
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        flowers.forEach(flower => {
            const flowerCard = document.createElement('div');
            flowerCard.classList.add('flower-card');

            const flowerImage = document.createElement('img');
            flowerImage.loading = 'lazy';
            flowerImage.src = flower.image || './images/flor_no_available.webp';
            flowerImage.alt = flower.name || 'Unknown';

            const flowerName = document.createElement('h3');
            const flowerLink = document.createElement('a');
            flowerLink.href = `flower-detail.html?id=${flower.name}`;
            flowerLink.textContent = flower.name || 'Unknown';
            flowerName.appendChild(flowerLink);

            const flowerScientificName = document.createElement('p');
            flowerScientificName.textContent = flower.cientific_name || 'Unknown';

            const favoriteIcon = document.createElement('i');
            favoriteIcon.classList.add('favorite-icon', 'fas', 'fa-heart');
            if (favorites.includes(flower.name)) {
                favoriteIcon.classList.add('active');
            }

            favoriteIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFavorite(flower.name, favoriteIcon);
            });

            flowerCard.appendChild(flowerImage);
            flowerCard.appendChild(flowerName);
            flowerCard.appendChild(flowerScientificName);
            flowerCard.appendChild(favoriteIcon);

            flowerList.appendChild(flowerCard);
        });
    };

    const toggleFavorite = (name, icon) => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.includes(name)) {
            favorites = favorites.filter(favoriteId => favoriteId !== name);
            icon.classList.remove('active');
        } else {
            favorites.push(name);
            icon.classList.add('active');
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    const loadPage = (page, searchTerm = '') => {
        const data = getPaginatedFlowers(page, searchTerm);
        renderFlowers(data.data);
        pageNumber.textContent = `Page ${page}`;
        prevPageBtn.disabled = !data.meta.previous_page;
        nextPageBtn.disabled = !data.meta.next_page;
    };

    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        currentPage = 1;
        loadPage(currentPage, searchTerm);
    });

    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            currentPage = 1;
            loadPage(currentPage, searchTerm);
        }
    });

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            loadPage(currentPage, searchInput.value.trim());
        }
    });

    nextPageBtn.addEventListener('click', () => {
        currentPage++;
        loadPage(currentPage, searchInput.value.trim());
    });

    loadPage(currentPage);
});
