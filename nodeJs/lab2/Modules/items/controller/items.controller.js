let items = [
  { id: 1, name: "item 1", description: "description 1" },
  { id: 2, name: "item 2", description: "description 2" },
];

const getItems = (req, res) => {
  console.log("test");
  res.status(200).send(items);
};

const addItem = (req, res) => {
  // console.log(req.body);
  req.body.id = items[items.length - 1].id + 1 || 1;
  items.push(req.body);
  res.status(200).send(items);
};

const updateItem = (req, res) => {
  // console.log(req.params, req.body);
  let foundedItem = items.find((ele) => ele.id == parseInt(req.params.id));
  if (!foundedItem) res.send("not founded");
  let updated = req.body.name;
  foundedItem.name = updated;
  res.status(200).send(items);
};

const deleteItem = (req, res) => {
  items = items.filter((ele) => ele.id != parseInt(req.params.id));
  res.status(200).send(items);
};

export { getItems, addItem, updateItem, deleteItem };
