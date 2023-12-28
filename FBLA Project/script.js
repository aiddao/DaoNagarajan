buildCards();

const searchInput = document.querySelector("[data-search]");

let myArray = [ {'name' : 'ASYNC' , 'email' : 'async@gmail.com' , 'info' : 'Quantum Science Research Facility'},
{'name' : 'Cover Corp' , 'email' : 'cover@gmail.com' , 'info' : 'Idol Agency'}
]

function buildCards() {
    var orgCards = document.getElementById('organization-cards');
    
    for (var i = 0; i < myArray.length; i++) {
        let card = document.createElement('div');
        card.classList.add('content');
        
        let head = document.createElement('div');
        head.classList.add('header');
        head.innerHTML = myArray[i].name;
        
        let email = document.createElement('div');
        email.classList.add('email');
        email.innerHTML = myArray[i].email;
        
        let info = document.createElement('div');
        info.classList.add('body');
        info.innerHTML = myArray[i].info;
        
        card.append(head, email, info);
        orgCards.appendChild(card);
    };
};

window.onload = function() {
  if (localStorage.getItem('content')) {
    document.querySelectorAll('.content').forEach(element => {
      element.innerHTML = localStorage.getItem('content');
    });
  }
}

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


//Requires way to return all data to work.
/*let search = document.getElementById("search");
search.addEventListener("keyup",function(){
    var value = this.value;
    console.log("Value:", value);
}); */

/*let users = []
searchInput.addEventListener("input", e => {
    const value = e.target.value;
}); */
