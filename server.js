const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/js')));

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/schmoozer",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  
  // logs mongoose queries being executed
  mongoose.set("debug", true);
  
  app.listen(PORT, () =>
    console.log(gradient.atlas(`🌍 Connected on http://localhost:${PORT}`))
  );

