// const express = require('express');
// const mongodb = require('mongodb');


// const router = express.Router()

// //GET posts
// router.get('/', async (req, res) => {
//     const posts = await loadPostsCollection();
//     res.send(await posts.find({}).toArray());
// });

// //PUT posts
// router.post('/', async (req, res) => {
//     const posts = await loadPostsCollection();
//     await posts.insertOne({
//         text: req.body.text,
//         createdAt: new Date()
//     });
//     res.status(201).send();

// });

// //UPDATE posts
// router.get('/', async (req, res) => {
//     res.send(`Working`);
// })

// //DELETE posts
// router.delete('/:id', async (req, res) => {
//     const posts = await loadPostsCollection();
//     await posts.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
//     res.status(200).send();
// })

// const uri = "mongodb://user1:zwLw2o2g3aMFWAXH@ac-fxmu09j-shard-00-00.o6utkdl.mongodb.net:27017,ac-fxmu09j-shard-00-01.o6utkdl.mongodb.net:27017,ac-fxmu09j-shard-00-02.o6utkdl.mongodb.net:27017/?ssl=true&replicaSet=atlas-lx1p9k-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

// async function loadPostsCollection () {
//     const client = await mongodb.MongoClient.connect(uri);
    
//     return client.db('MEVN').collection('posts');
// }

// module.exports = router;

import { MongoClient } from '../../node_modules/mongodb';

const client = await MongoClient.connect(uri);

console.log(client);