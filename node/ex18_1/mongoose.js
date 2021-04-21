const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ex18_1new', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
