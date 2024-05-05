window.onload = function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    let modifiedDate = new Date(document.lastModified);
    let options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('lastModified').textContent = modifiedDate.toLocaleDateString('es-ES', options);

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
    });
};
