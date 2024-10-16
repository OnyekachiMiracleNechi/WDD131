const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    
   
    
    {
     
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253016,
      imageUrl: 
      "https://www.churchofjesuschrist.org/imgs/7761e87183d3a9d62055ebb8b18035d6f7441789/full/1600%2C/0/default/"
  },
  {
      templeName: "Lisbon Portugal",
      location: "Lisbon, Portugal",
      dedicated: "2010, December, 17",
      area: 17000,
      imageUrl:
       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lisbon-portugal/1200x1200/02-e8863cabbdad35c4efdf1301e5b453cd7d622423.jpeg"
  },
  {
      templeName: "Okinawa Japan",
      location: "Okinawa, Japan",
      dedicated: "2019, October, 20",
      area: 12000,
      imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x720/90f777d0202511ee8f0eeeeeac1eeda9b7debddc.jpeg"
  },


  {
    templeName: "Atlanta Georgia",
    location: "Atlanta, Georgia, United States",
    dedicated: "1983, June, 1",
    area: 155000,
    imageUrl:
     "https://newsroom.churchofjesuschrist.org/media/960x540/atlanta_georgia_temple_exterior.jpg"
},
{
    templeName: "Seattle Washington",
    location: "Seattle, Washington, United States",
    dedicated: "2000, November, 17",
    area: 20000,
    imageUrl:
     "https://newsroom.churchofjesuschrist.org/media/960x540/Seattle-Washington-Temple.jpg"
}

  
    
    
    
    
  ];


  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active'); // Toggle the 'active' class
        hamburger.textContent = navMenu.classList.contains('active') ? '✖' : '☰'; // Change to "X" or hamburger
    });
});






  function displayTemples(templesArray) {
    const container = document.getElementById('temple-container');
    container.innerHTML = ''; // Clear previous content
    
    templesArray.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('temple-card');
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p>${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        container.appendChild(card);
    });
}




document.getElementById('show-all').addEventListener('click', () => displayTemples(temples));
document.getElementById('show-old').addEventListener('click', () => {
    const oldTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    displayTemples(oldTemples);
});
document.getElementById('show-new').addEventListener('click', () => {
    const newTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    displayTemples(newTemples);
});
document.getElementById('show-large').addEventListener('click', () => {
    const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
});
document.getElementById('show-small').addEventListener('click', () => {
    const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
});


document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
