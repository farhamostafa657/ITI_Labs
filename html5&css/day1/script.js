// var stars = document.querySelectorAll(".stars");

// stars.forEach((star, index) =>
//   star.addEventListener("click", () => {
//     const clicked = star.getAttribute("data-clicked") == true;
//     if (clicked) {
//       fillStars(index);
//     } else {
//       fixStars(index);
//     }
//   })
// );
// function changeStar(ele) {
//   var index = ele.getAttribute("data-index");
//   fillStars(index);
// }

// function emptyStar(ele) {
//   var index = ele.getAttribute("data-index");
//   resetStars(index);
// }

// function fillStars(index) {
//   for (let i = 0; i <= index; i++) {
//     stars[i].src = "./Images/Filled_star.png";
//   }
// }

// function fixStars(index) {
//   for (let i = 0; i <= index; i++) {
//     stars[i].src = "./Images/Filled_star.png";
//     stars[i].setAttribute("data-clicked", "true");
//   }
// }

// function resetStars(index) {
//   for (let i = 0; i <= index; i++) {
//     stars[i].src = "./Images/empty_star.png";
//     stars[i].setAttribute("data-clicked", "false");
//   }
// }
///////////////////////////////////////////////////////////////////////////
var ele;

function dragImg(img) {
  ele = img;
}

function dropEle(box) {
  box.appendChild(ele);
}

////////////////////////////////////////////////////////////////////////
const stars = document.querySelectorAll(".stars");

stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    if (star.getAttribute("data-clicked") === "false") {
      fillStars(index);
    }
  });

  // Mouseout: Empty the stars if not clicked
  star.addEventListener("mouseout", () => {
    if (star.getAttribute("data-clicked") === "false") {
      clearStars(index);
    }
  });

  // Click: Fix the star rating
  star.addEventListener("click", () => {
    const clicked = star.getAttribute("data-clicked") === "true";
    if (clicked) {
      // Reset the star to empty and all above it
      resetStars(index);
    } else {
      // Fix the star as filled
      fixStars(index);
    }
  });
});

// Function to fill stars up to the hovered one
function fillStars(index) {
  for (let i = 0; i <= index; i++) {
    stars[i].src = "./Images/Filled_star.png";
  }
}

// Function to clear stars up to the hovered one
function clearStars(index) {
  for (let i = 0; i <= index; i++) {
    if (stars[i].getAttribute("data-clicked") === "false") {
      stars[i].src = "./Images/empty_star.png";
    }
  }
}

// Function to fix the stars when clicked
function fixStars(index) {
  for (let i = 0; i <= index; i++) {
    stars[i].src = "./Images/Filled_star.png";
    stars[i].setAttribute("data-clicked", "true");
  }
}

// Function to reset stars when clicked again
function resetStars(index) {
  for (let i = 0; i <= index; i++) {
    stars[i].src = "./Images/empty_star.png";
    stars[i].setAttribute("data-clicked", "false");
  }
}
