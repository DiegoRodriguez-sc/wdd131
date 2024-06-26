import { flowers } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const flowerId = urlParams.get('id');
    const flowerDetailContainer = document.getElementById('flower-detail');

    const flower = flowers.find(flower => flower.name === flowerId);

    if (flower) {
        const flowerHTML = `
            <img loading="lazy" src="${flower.image}" alt="${flower.image}" onerror="this.onerror=null; this.src='./images/flor_no_available.webp'">
            <div class="flower-info">
                <h3>${flower.name}</h3>
                <p><em>${flower.cientific_name}</em></p>
                <p><strong>Height:</strong> ${flower.characteristics.height}</p>
                <p><strong>Description:</strong></p>
                <p>${flower.characteristics.data}</p>
                <p><strong>Meaning:</strong> ${flower.characteristics.meaning ? flower.characteristics.meaning : "Sorry, we don't have information about this flower's meaning." }</p>
            </div>
        `;
        flowerDetailContainer.innerHTML = flowerHTML;
    } else {
        flowerDetailContainer.innerHTML = '<p>Flower not found.</p>';
    }
});
