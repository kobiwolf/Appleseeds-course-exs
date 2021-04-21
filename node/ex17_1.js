const mongoose = require('mongoose');
const validator = require('validator');
mongoose.connect('mongodb://localhost:27017/ex17_1', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model('Product', {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: Boolean,
  detailes: {
    description: {
      type: String,
      require: true,
      minlength: 10,
    },
    price: {
      type: Number,
      require: true,
      validate(value) {
        if (value < 0) throw new Error('price must be positivie number');
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
    imgs: {
      type: Array,
      minItems: 2,
    },
    phone: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isMobilePhone(value, 'he-IL')) {
          throw new Error('must be a valid israeli number');
        }
      },
    },
    dataAdded: {
      type: Date,
      default: new Date(),
    },
  },
});
const one = new Product({
  name: 'tv101',
  category: 'electronic',
  isActive: false,
  detailes: {
    description: 'a great tv',
    price: '4a',
    discount: 2,
    imgs: ['wow'],
    phone: '0532004001',
  },
});
one
  .save()
  .then((promise) => {
    console.log(promise);
    mongoose.connection.close();
  })
  .catch((e) => console.log(e.message));
