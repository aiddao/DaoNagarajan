//List of partners of the CTE department
let partnersCTE = [ {'name' : 'ASYNC' , 'email' : 'async@gmail.com' , 'info' : 'Quantum Science Research Facility'},
{'name' : 'Cover Corp' , 'email' : 'cover@gmail.com' , 'info' : 'Idol Agency'}
]

var orgCards = document.getElementById('organization-cards');

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
    info.innerText = partnersCTE[i].info;
    
    card.append(head, email, info);
    orgCards.appendChild(card);
    
};

let searchInput = document.querySelector("#search");

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
/*
//Loads edited content
window.onload = function() {
  if (localStorage.getItem('content')) {
    document.querySelectorAll('.content').forEach(element => {
      element.innerHTML = localStorage.getItem('content');
    });
  }
}

//Creates button that makes the content editable
let editBtn = document.querySelector('#edit_content');
let content = document.querySelectorAll('.content');

editBtn.addEventListener('click', () => {
    content.forEach(element => {
        element.contentEditable = !element.isContentEditable;
        if (!element.isContentEditable) {
        localStorage.setItem('content', element.innerHTML);
        }
    });
});
*/
/*
window.onload = function() {
  // Load edited content for each .content div
  document.querySelectorAll('.content').forEach(element => {
    const contentKey = getContentKey(element);
    const savedContent = localStorage.getItem(contentKey);
    if (savedContent) {
      element.innerHTML = savedContent;
    }
  });

  // Creates button that makes the content editable
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
    return 'content_' + element.dataset.id;
  }
};
*/
