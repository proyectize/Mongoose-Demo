const mongoose = require('mongoose');

mongoose.connect('mongodb://Course01:ABC123@34.226.232.52:27017/fruitsDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [ true, "Please check your data entry. No name specified" ] 
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit"
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//     name: "Nestor",
//     age: 54
// })

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 5,
    review: "A Pineapple"
});

pineapple.save();

const person = new Person({
    name: "Sandra",
    age: 49,
    favouriteFruit: pineapple
})

person.save();

// person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "A Kiwi"
});

const orange = new Fruit({
    name: "Orange",
    rating: 8,
    review: "An Orange"
});

const banana = new Fruit({
    name: "Banana",
    rating: 5,
    review: "A Banana"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Successfully updated! ")
//     }
// });

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err)
    } else {

        mongoose.connection.close();
        console.log(fruits);
        fruits.forEach( function(fruit){
            console.log(fruit.name)
        })
    }
});

// Fruit.updateOne({_id : "63f823b0404af18d1b952314"}, { rating : 9}, function(err){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Successfully Updated!!!")
//     }
// });

// Fruit.deleteOne({_id : "63f823b0404af18d1b952316"}, function(err){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Successfully Deleted!!!")
//     }
// })