//List of partners of the CTE department
let partnersCTE = [
{'name' : 'ASYNC' , 'email' : 'async@gmail.com' , 'info' : 'Quantum Science Research Facility'},
{'name' : 'Cover Corp' , 'email' : 'cover@gmail.com' , 'info' : 'Idol Agency'},
{'name' : 'Ball' , 'email' : 'balling@gmail.com' , 'info' : 'Ball Company'},
{'name' : 'Square' , 'email' : 'squaring@gmail.com' , 'info' : 'Square Company'},
{'name' : 'Among Us' , 'email' : 'sussy@gmail.com' , 'info' : 'Sus Company'},
{'name' : 'Triangle' , 'email' : 'triangling@gmail.com' , 'info' : 'Triangle Company'},
{'name' : 'Hexagon' , 'email' : 'hexagoning@gmail.com' , 'info' : 'Hexagon Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
{'name' : 'Hoyoverse' , 'email' : 'hoyoverse@gmail.com' , 'info' : 'Chinese Game Developer Company'},
];

//Gets the div that holds all the cards
let orgCards = document.getElementById('organization-cards');

//Creates a card for each partner
for (var i = 0; i < partnersCTE.length; i++) {
    let card = document.createElement('div');
    card.classList.add('content');
    card.setAttribute('data-id' , i);
    
    let head = document.createElement('div');
    head.classList.add('header');
    head.innerText = partnersCTE[i].name;
    
    let email = document.createElement('div');
    email.classList.add('email');
    email.innerText = partnersCTE[i].email;
    
    let info = document.createElement('div');
    info.classList.add('body');
    info.innerHTML = partnersCTE[i].info;
    
    card.append(head, email, info);
    orgCards.appendChild(card);
    
};

let searchInput = document.getElementById("search");

//Creates a new array named 'partners'
let partners = partnersCTE.map(item => ({
  'name': item.name,
  'email': item.email,
  'info': item.info
}));

//Reads the inputs in the search bar and filters the information.
searchInput.addEventListener("input", e => {
    let value = e.target.value.toLowerCase(); // Convert input value to lowercase for case-insensitive comparison
    let filteredPartners = partners.filter(partner =>
        partner.name.toLowerCase().includes(value) ||
        partner.email.toLowerCase().includes(value) ||
        partner.info.toLowerCase().includes(value)
    );
    console.log(filteredPartners);
  
  // Loop through all content divs
  document.querySelectorAll('.content').forEach(card => {
    let cardId = card.getAttribute('data-id'); // Get the data-id attribute of the card
    let cardIncluded = filteredPartners.some(partner => partner.name.toLowerCase() === partnersCTE[cardId].name.toLowerCase());
    
    // Toggle the "hide" class based on inclusion in filteredPartners
    card.classList.toggle('hide', !cardIncluded);
  });
  
}); 

window.onload = function() {
    // Load edited content for each .content div
    document.querySelectorAll('.content').forEach(element => {
    const contentKey = getContentKey(element);
    const savedContent = localStorage.getItem(contentKey);
    if (savedContent) {
        element.innerHTML = savedContent;
    }
    });
    
    // Identifies the edit button and all content divs
    let editBtn = document.querySelector('#edit_content');
    let content = document.querySelectorAll('.content');
    
    
    editBtn.addEventListener('click', () => {
    content.forEach(element => {
        const contentKey = getContentKey(element);
        element.contentEditable = !element.isContentEditable;
        
        if (!element.isContentEditable) {
        localStorage.setItem(contentKey, element.innerHTML);
        }
    });
    });
    
    function getContentKey(element) {
    // Get a unique identifier for each .content div
    // You can customize this based on your needs
    return 'content_' + element.getAttribute('data-id');
    };
};
