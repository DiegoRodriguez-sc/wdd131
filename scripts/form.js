const products = [
    { id: "fc-1888", name: "flux capacitor", avg_rating: 4.5 },
    { id: "fc-2050", name: "power laces", avg_rating: 4.7 },
    { id: "fs-1987", name: "time circuits", avg_rating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", avg_rating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", avg_rating: 5.0 }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    let modifiedDate = new Date(document.lastModified);
    let options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('lastModified').textContent = modifiedDate.toLocaleDateString('es-ES', options);
    
    const productSelect = document.getElementById('productName');
  
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.name;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  });
  