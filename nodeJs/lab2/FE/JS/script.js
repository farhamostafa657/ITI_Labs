async function getData() {
  let res = await fetch("http://localhost:8888/items");
  let data = await res.json();
  console.log(data);
}

getData();
