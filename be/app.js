const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://cheeraboinasrilakshmi:sri1996@cluster0.hfzhku2.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('MongoDB connected') })
    .catch((err) => { console.log(err) })






app.post('/todos', async (req, res) => {
  console.log(req.body)
  const { text, completed } = req.body;

});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
