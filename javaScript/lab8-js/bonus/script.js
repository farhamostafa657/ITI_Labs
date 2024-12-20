var http = new XMLHttpRequest();
http.open("GET", "https://fakestoreapi.com/products");
http.send();
var cards;
http.addEventListener("readystatechange", function () {
  if (http.readyState == 4 && http.status == 200) {
    cards = JSON.parse(http.response);
    displayProducts(cards);
  }
});

function displayProducts(data) {
  var card = "";
  for (let i = 0; i < data.length; i++) {
    card += `<div class="card">
        <img
          src="${data[i].image}"
          alt=""
          id="image"
        />

        <p id="desc">
        ${data[i].category}
        </p>
        <p></p>

        <span id="price">${data[i].price} EGP</span>
        <span id="rating">RATING</span>
        <div style="clear: both"></div>
        <p id="title"><strong>${data[i].title}</strong></p>
        <button id="cardButton" onclick="saveStorage(${data[i].id})">Add To Card</button>
      </div>`;
  }
  document.getElementById("card_style").innerHTML = card;
}
var arr = [];

function saveStorage(ele) {
  localStorage.setItem(`id${ele}`, ele);
  var myCategory;
  var myPrice;
  var myTitle;
  var myImg;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].id == ele) {
      myCategory = cards[i].category;
      console.log(myCategory);
      myPrice = cards[i].price;
      myTitle = cards[i].title;
      myImg = cards[i].image;
      break;
    }
  }

  var itemSelected = {
    category: myCategory,
    price: myPrice,
    title: myTitle,
    image: myImg,
  };
  arr.push(itemSelected);
}

function displaySelectedProducts() {
  var theItem = "";
  for (let i = 0; i < arr.length; i++) {
    theItem += `<div class="card">
        <img
          src="${arr[i].image}"
          alt=""
          id="image"
        />

        <p id="desc">
        ${arr[i].category}
        </p>
        <p></p>

        <span id="price">${arr[i].price} EGP</span>
        <span id="rating">RATING</span>
        <div style="clear: both"></div>
        <p id="title"><strong>${arr[i].title}</strong></p>
        <button id="cardButton" onclick="saveStorage(${data[i].id})">Add To Card</button>
      </div>`;
    console.log(arr[i].category);
  }
  document.getElementById("prouducts").innerHTML = theItem;
}
