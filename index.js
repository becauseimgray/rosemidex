function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
//usage:
readTextFile("dex.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});


function search_semi() {
  readTextFile("dex.json", function(text){
    var data = JSON.parse(text);
  });
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.querySelector('#results');
  x.innerHTML = ""

  for (i = 0; i < data.length; i++) {
    let obj = data[i];

    if (obj.name.toLowerCase().includes(input)) {
      const elem = document.createElement("div")
		  elem.setAttribute("name", "desc");
      elem.innerHTML = `${obj.name} - ${obj.desc}`
      x.appendChild(elem)
    }
  }
}



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











/*
fetch('dex.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
});
        function appendData(data) {
            var mainContainer = document.getElementById("results");
            for (var i = 0; i < data.length; i++) {

                var div1 = document.createElement("div");
		div1.setAttribute("id", "name");

                var div2 = document.createElement("div");
		div2.setAttribute("id", "info");
                

                div1.innerHTML = data[i].name;
		div2.innerHTML = data[i].desc;
	                

                mainContainer.appendChild(div1);
                mainContainer.appendChild(div2);
            }
        }
*/
})