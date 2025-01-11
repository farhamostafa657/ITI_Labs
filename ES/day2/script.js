////////////////////////////////////////////
//fetching data from API
//1

const userSelect = document.getElementById("user-select");
const showDetailsButton = document.getElementById("show-details");
const userDetailsDiv = document.getElementById("user-details");

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    users.forEach((user) => {
      const option = document.createElement("option");
      option.value = user.id;
      option.textContent = user.name;
      userSelect.appendChild(option);
    });
    showDetailsButton.disabled = false;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
async function displayUserDetails(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await response.json();

    userDetailsDiv.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
    `;
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
}

userSelect.addEventListener("change", () => {
  showDetailsButton.disabled = userSelect.value === "";
});

showDetailsButton.addEventListener("click", () => {
  const userId = userSelect.value;
  if (userId) {
    displayUserDetails(userId);
  }
});

fetchUsers();

//////////////////////////////////////////////////////////////////////////////////

//add post
//2
const form = document.getElementById("form");
const inputTitle = document.getElementById("title");
const inputBody = document.getElementById("body");
const postsDiv = document.getElementById("post");

async function fetchPosts(post) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    const data = await response.json();

    postsDiv.innerHTML = `
    <p><strong>ID:</strong> ${data.id}</p>
    <p><strong>Title:</strong> ${data.title}</p>
    <p><strong>Body:</strong> ${data.body}</p>
    <p><strong>User ID:</strong> ${data.userId}</p>
  `;
  } catch (error) {
    console.error("Error adding post:", error);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newPost = {
    title: inputTitle.value,
    body: inputBody.value,
    userId: 1,
  };
  fetchPosts(newPost);
  inputTitle.value = "";
  inputTitle.value = "";
});

/////////////////////////////////////////
//3

///////////////////////////////////////////////
//4

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

function* getTip() {
  let index = 0;
  while (index < tip.length) {
    yield tip[index];
    index++;
  }
}

console.log(getTip().next());
console.log(getTip().next());
console.log(getTip().next());
console.log(getTip().next());
console.log(getTip().next());
console.log(getTip().next());
console.log(getTip().next());
console.log(getTip().next());
