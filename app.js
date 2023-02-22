const mongoose = require('mongoose');

mongoose.connect('mongodb://UserDB:C8etXWTP@34.226.232.52:27017/fruitsDB',{auth:{authdb:"admin"}});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


