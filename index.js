document.addEventListener('DOMContentLoaded', function() {

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
 }
})

const dexList = document.getElementById('dexList');
const searchBar = document.getElementById('searchbar');
let rCharacters = [];

//triggers when key released, calls search bar
searchBar.addEventListener('keyup', (e) => {
  const searchString = (e.target.value.toLowerCase());
  //filters for name
  const filteredCharacters = rCharacters.filter((character) => {
    return (
        character.name.toLowerCase().includes(searchString)
    );
});
  displayCharacters(filteredCharacters);
});
  


const loadCharacters = async () => { 
    try {
        const res = await fetch('dex.json');
        rCharacters = await res.json();
        displayCharacters(rCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <img src="${character.image}"></img>
                <p> ${character.name}</p>
            </li>
            
        `;
        })
        
        .join('');
    dexList.innerHTML = htmlString;
};

loadCharacters();
