const dropDownList = document.getElementById("users");
const myButton = document.getElementById("userDetails");
const divUserData = document.getElementById("userData");
async function fetchData() {
  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/users");
    var data = await response.json();
    console.log(data);
    data.forEach((user) => {
      const option = document.createElement("option");
      option.value = user.id;
      option.textContent = user.name;
      dropDownList.appendChild(option);
    });
    myButton.disabled = false;
  } catch (e) {
    console.log(e);
  }
}

async function displayUserDetails(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = await response.json();
    divUserData.innerHTML = `
     <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>

    `;
  } catch (e) {
    console.log("error fetch user " + e);
  }
}

dropDownList.addEventListener("change", () => {
  myButton.disabled = dropDownList.value === "";
});

myButton.addEventListener("click", () => {
  const userId = dropDownList.value;
  if (userId) {
    displayUserDetails(userId);
  }
});

fetchData();

///////////////////////////////////////////////////
const addMyPost = document.getElementById("newPost");
async function addPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // HTTP method
      headers: {
        "Content-Type": "application/json", // Sending JSON data
      },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }), // The data being sent to the server
    });

    if (response.ok) {
      const data = await response.json(); // Parse the JSON response
      console.log("Post added successfully:", data);
      addMyPost.innerHTML = `
      <p style="align-items: center; text-align: center; font-size: 20px">
        <strong>Add Post</strong>
      </p>
        <div>
        <h1>${data.title}</h1>
        <p>${data.body}</p>
        <p>${data.userId}</p>
        <p>${data.id}</p>
      </div>
        `;
    } else {
      console.error("Failed to add post:", response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

addPost();

///////////////////////////////////////////
var displayPhoto = document.getElementById("imgUser");
function one() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      alert("welcome");
      resolve("sucess");
    }, 3000);
  });
}
function two() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      displayPhoto.innerHTML = `        <img src="./img/wallpaperflare.com_wallpaper (1).jpg" width=400px hight=200px alt="">
`;
      resolve("sucess");
    }, 50);
  });
}
function three() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      alert("thanks");
      resolve("sucess");
    }, 3000);
  });
}

async function calling() {
  try {
    var o = await one();
    var t = await two();
    var thre = await three();
  } catch (e) {
    console.log(e);
  }
}
calling();
///////////////////////////////////////////////////////////////////////////////////
const myGenDiv=document.getElementById("tips")
const buttonRead=document.getElementById("read")
const tip = [
  "tip 1",
  "tip 2",
  "tip 3",
  "tip 4",
  "tip 5",
  "tip 6",
  "tip 7",
  "tip 8",
  "tip 9",
  "tip 10",
];

function* generator(arr){
  yield* arr
}

var gen=generator(tip)
var tips=[]
buttonRead.addEventListener("click",()=>{
  myGenDiv.innerHTML=""
  
  const curTip=gen.next().value
  tips.push(curTip)
  myGenDiv.innerHTML=`${tips.join("<br>")}`
  if(tips.length==10){
    buttonRead.disabled=true
  }
})

