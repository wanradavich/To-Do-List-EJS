//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday, go to sleep"
            break;
            case 1:
                day = "Monday, Let's go"
                break;
                case 2:
                    day = "Tuesday, and you're now blessed by Lord Tuesday"
                    break;
                    case 3:
                        day = "Wednessday, hey hey heyy"
                        break;
                        case 4:
                            day = "Thursday, and it looks good on you"
                            break;
                            case 5:
                                day = "Friday, yay yay yay"
                                break;
                                case 6:
                                    day = "Saturday, and Saturday loves you too"
                                    break;
                                    default:
                                        console.log("Error, current day is equal to" + currentDay);
    }

    res.render("list", {kindOfDay: day});
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
