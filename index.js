const express = require('express')
const app = express()
const port = process.env.PORT || 5500;
const cors = require('cors')
// middleware
app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('ji Bhai kya hoga aur boliye !')
})

//ASHISHMAJOR2024
// MONGODB CONFIGURATION


const { MongoClient, ServerApiVersion, ObjectId} = require('mongodb');
const url = "mongodb+srv://mern-book-store:ASHISHMAJOR2024@clustera.foxcnwt.mongodb.net/?retryWrites=true&w=majority&appName=ClusterA";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // create a collection of document
    const bookCollection = client.db("BookInventory").collection("books");

    // insert a book to the db : post method
    app.post("/upload-book", async (req, res) =>{
      const data = req.body;
      const result = await bookCollection.insertOne(data);
      res.send(result);

    })
    

    //get all books from the database

    // app.get("/all-books", async(req, res) =>{
    //   const books = bookCollection.find();
    //   const result = await books.toArray();
    //   res.send(result);
    // })

    //update a book data : patch or update methods
    app.patch("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const objectId = ObjectId.createFromTime(id);
        const filter = { _id: objectId }; // Define the filter based on the book ID
        // Rest of your update logic...
        // ...
        const updateBookData = req.body;
        const updateDoc = {
          $set: {
            ...updateBookData
          }
        };
        const options = { upsert: true };
        // Update the document
        const result = await bookCollection.updateOne(filter, updateDoc, options);
        res.status(200).send("Book updated successfully");
      } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).send("Internal server error");
      }
    });
    
    // delete a book data
    app.delete("/book/:id", async (req,res) =>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollection.deleteOne(filter);
      res.send(result);
    })

    //find by category
    app.get("/all-books", async(req, res) =>{
      let query ={};
      if(req.query?.category){
        query = {category: req.query.category}
      }
      const result = await bookCollection.find(query).toArray();
      res.send(result);
    })

    // to get single book data
    app.get("/book/:id", async(req,res) =>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollection.findOne(filter);
      res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})