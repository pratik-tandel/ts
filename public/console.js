"use strict";
var greet = function (user) {
    console.log(user.name + " gets a " + user.item);
};
greet({ name: 'Pratik', item: 'Gift' });
var gree;
gree = function (name, greeting) {
    console.log(name + " says " + greeting);
};
gree('Pratik', 'Hi');
