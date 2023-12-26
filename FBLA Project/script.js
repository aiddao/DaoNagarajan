const searchInput = document.querySelector("[data-search]");

var myArray = [ 'balls', 'jimmy'
    ]
console.log = myArray[0];
function buildCards(data) {
    var orgCards = document.getElementById('organization-cards');
    
    for (var i = 0; i < myArray.length; i++) {
        var card = document.createElement('div').setAttribute('class', 'content');
        var head = document.createElement('div').setAttribute('class','header');
        console.log = (myArray[i].name);
    }
}

window.onload = function() {
	if(localStorage.getItem('content')) {
		document.querySelectorAll('.content').innerHTML = localStorage.getItem('content');
  }
}

let editBtn = document.querySelector('#edit_content');
let content = document.querySelector('.content');

editBtn.addEventListener('click', () => {
	content.contentEditable = !content.isContentEditable;
  if(content.contentEditable === 'false') {
  	localStorage.setItem('content', content.innerHTML);
  }
});


//Requires way to return all data to work.
//let search = document.getElementById("search");
//search.addEventListener("keyup",function(){
    //var value = this.value;
    //console.log("Value:", value);
//});

//let users = []
//searchInput.addEventListener("input", e => {
    //*const value = e.target.value;
//});
