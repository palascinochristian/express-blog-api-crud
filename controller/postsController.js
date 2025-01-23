const postsData = require("../data/postsData");

//index

const index = (req, res) => {
  let postFiltered = postsData;
  const { tags } = req.query;
  if (tags) {
    postFiltered = postFiltered.filter((post) => post.tags.includes(tags));
  }

  res.json(postFiltered);
};

//show
const show = (req, res) => {
  const post = postsData.find((post) => post.id == req.params.id);
  if (!post) {
    return res.status(404).json({
      error: "Post not found",
    });
  }
  res.json(post);
};

//store
const store = (req, res) => {
  const id = Date.now();

  const newPost = {
    id,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };
  console.log(req.body);
  postsData.push(newPost);

  res.status(201).json(newPost);
};

//update
const update = (req, res) => {
  const post = postsData.find((elm) => elm.id == req.params.id);

  if (!post) {
    return res.status(404).json({
      error: "Post not found",
    });
  }

  post.title = req.body.title;
  post.content = req.body.content;
  post.image = req.body.image;
  post.tags = req.body.tags;

  res.json(post);
};

//modify
const modify = (req, res) => {
  res.send("Modifica parziale post");
};

//destroy
const destroy = (req, res) => {
  const post = postsData.find((post) => post.id == req.params.id);
  if (!post) {
    return res.status(404).json({
      error: "Post not found",
    });
  }
  postsData.splice(postsData.indexOf(post), 1);
  res.sendStatus(204);
};
module.exports = { index, show, store, update, modify, destroy };
