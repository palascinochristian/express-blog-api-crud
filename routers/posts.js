const express = require('express');
const posts = require("../data/posts");
const router = express.Router();

//Index
router.get('/', (req, res) =>{
    res.json(posts)
});

//Show
router.get('/:id', (req, res) =>{
    const post = posts.find(elm => elm.id == req.params.id)
    res.json(post)
});

//Store
router.post('/',(req, res) => {
    res.send("Creo nuovo post")
});

//Update
router.put('/:id', (req, res) =>{
    res.send(`Modifico interamente il post ${req.params.id}`)
})

//Modify
router.patch('/:id', (req, res) =>{
    res.send(`Modifico parzialmente il post ${req.params.id}`)
});

//Delete
router.delete('/:id', (req, res) =>{
    res.send(`Cancellazione del post ${req.params.id}`)
});

module.exports = router;