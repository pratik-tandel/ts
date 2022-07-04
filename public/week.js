"use strict";
var week;
(function (week) {
    week["one"] = "Monday";
    week["two"] = "Tuesday";
    week["three"] = "Wednesday";
    week["four"] = "Thursday";
    week["five"] = "Friday";
    week["six"] = "Saturday";
    week["seven"] = "Sunday";
})(week || (week = {}));
console.log(week.one);
