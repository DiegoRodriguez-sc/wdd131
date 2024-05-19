const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg",
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg",
  },
  {
    templeName: "Nauvoo Illinois",
    location: "Nauvoo, Illinois, United States",
    dedicated: "2002, June, 27",
    area: 24500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-756527-wallpaper.jpg",
  },
];


const createTempleCard = (templesFiltered) => {
    document.querySelector(".box").innerHTML = "";
    templesFiltered.forEach((temple) => {
        const card = document.createElement("section");
        const h3 = document.createElement("h3");
        const pLocation = document.createElement("p");
        const pDedicated = document.createElement("p");
        const pArea = document.createElement("p");
        const img = document.createElement("img");

        card.classList.add("card");
        h3.textContent = temple.templeName;
        pLocation.innerHTML = `<span>Location: </span>${temple.location}`;
        pDedicated.innerHTML = `<span>Dedicated: </span>${temple.dedicated}`;
        pArea.innerHTML = `<span>Size: </span>${temple.area} sq ft`;
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy";

       
        card.appendChild(h3);
        card.appendChild(pLocation);
        card.appendChild(pDedicated);
        card.appendChild(pArea);
        card.appendChild(img);
        document.querySelector(".box").appendChild(card);
    });
};



window.onload = function () {
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  let modifiedDate = new Date(document.lastModified);
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  document.getElementById("lastModified").textContent =
    modifiedDate.toLocaleDateString("es-ES", options);

  const hamButton = document.querySelector("#menu");
  const navigation = document.querySelector(".navigation");

  hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });
  document.getElementById("home").addEventListener("click", () => {
    createTempleCard(temples);
  });
  document.getElementById("old").addEventListener("click", () => {
    const templesFiltered = temples.filter((temple) => temple.dedicated < "1900");
    createTempleCard(templesFiltered);
  });
  document.getElementById("new").addEventListener("click", () => {
    const templesFiltered = temples.filter((temple) => temple.dedicated > "2000");
    createTempleCard(templesFiltered);
  });
  document.getElementById("large").addEventListener("click", () => {
    const templesFiltered = temples.filter((temple) => temple.area > 90000);
    createTempleCard(templesFiltered);
  });
  document.getElementById("small").addEventListener("click", () => {
    const templesFiltered = temples.filter((temple) => temple.area < 10000);
    createTempleCard(templesFiltered);
  });
  createTempleCard(temples);
};
