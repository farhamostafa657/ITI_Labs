var http = new XMLHttpRequest();
http.open("GET", "https://fakestoreapi.com/products");
http.send();
var cards;
http.addEventListener("readystatechange", function () {
  if (http.readyState == 4 && http.status == 200) {
    cards = JSON.parse(http.response);
    dislayOurProducts();
  }
});

function dislayOurProducts() {
  var item = "";
  for (let i = 1; i <= cards.length; i++) {
    for (let y = i; y <= cards.length; y++) {
      if (localStorage.getItem(`id${i}`)) {
        if (cards[y].id == localStorage.getItem(`id${i}`)) {
          item += `<div class="card">
                  <img
                    src="${cards[i].image}"
                    alt=""
                    id="image"
                  />
          
                  <p id="desc">
                  ${cards[i].category}
                  </p>
                  <p></p>
          
                  <span id="price">${cards[i].price} EGP</span>
                  <span id="rating">RATING</span>
                  <div style="clear: both"></div>
                  <p id="title"><strong>${cards[i].title}</strong></p>
                  <button id="cardButton" onclick="saveStorage(${cards[i].id})">Add To Card</button>
                </div>`;
        }
      } else {
        continue;
      }
    }
    console.log("ppppppp");
    document.getElementById("prouducts").innerHTML = item;
  }
}
