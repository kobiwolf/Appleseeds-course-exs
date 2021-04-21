const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose-test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const User = mongoose.model('user', {
//   name: {
//     type: String,
//     maxLength: 4,
//     validate(value) {
//       console.log(this);
//       console.log(value);
//     },
//     uppercase: true,
//   },
//   age: {
//     type: Number,
//   },
// });
const User = mongoose.model('user', {
  name: {
    type: String,
    maxLength: 4,
    validate(value) {
      console.log(this);
      console.log(value);
    },
    uppercase: true,
  },
  age: {
    type: Number,
  },
});
const user = new User({
  name: 'kobi',
  age: 5,
});
user
  .save()
  .then((user) => console.log(user))
  .catch((e) => console.log(e._message));
