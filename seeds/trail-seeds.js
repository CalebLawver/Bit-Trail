const { required } = require("joi");
const { Trail } = require("../models");

const traildata = [
  {
    tname: "Donut Falls Trail",
    address: "12 Cottonwood Canyon Rd, Salt Lake City, UT 84121",
    miles: 3.3,
    kilometers: 5.3,
    lat: 40.59569,
    lon: -111.58153,
    difficulty: "Easy",
    blurb: "A very easy and family/kids-friendly hiking trail.",
    user_id: 1,
  },
  {
    tname: "Living Room Lookout Trail",
    address: "Colorow Dr, Salt Lake City, UT 84108",
    miles: 2.4,
    kilometers: 3.9,
    lat: 40.76011,
    lon: -111.82217,
    difficulty: "Medium",
    blurb:
      "Pay attention to the trails you go on, there are many offshoots that can be very challenging, especially to go down.",
    user_id: 2,
  },
  {
    tname: "Cecret Lake Trail",
    address: "Cecret Lake Trail, Alta, UT 84092",
    miles: 1.8,
    kilometers: 2.9,
    lat: 40.57462,
    lon: -111.61636,
    difficulty: "Easy",
    blurb:
      "Short hike, beautiful scenery, chance to see moose and other animals.  Nice place to relax.  It`s fun to see the salamanders too. The kids like that.",
    user_id: 1,
  },
  {
    tname: "Lake Mary Trail",
    address: "Lake Mary Trail, Salt Lake City, UT 84121",
    miles: 12,
    kilometers: 15,
    lat: 40.61353,
    lon: -111.8082,
    difficulty: "Medium",
    blurb: "DO IT!!!  EXPERIENCE OF A LIFETIME!!!",
    user_id: 3,
  },
  {
    tname: "Grandeur Peak East Trail from Church Fork",
    address: "Lake Mary Trail, Salt Lake City, UT 84121",
    miles: 2.6,
    kilometers: 4.2,
    lat: 40.61353,
    lon: -111,
    difficulty: "Medium",
    blurb: "DO IT!!!  EXPERIENCE OF A LIFETIME!!!",
    user_id: 2,
  },
  {
    tname: "Lake Mary Trail, Salt Lake City, UT 84121",
    address: "Lake Mary Trail, Salt Lake City, UT 84121",
    miles: 4.6,
    kilometers: 4.2,
    lat: 40.61353,
    lon: -111,
    difficulty: "Medium",
    blurb: "It was awesome!!",
    user_id: 3,
  },
  {
    tname: "Church Fork",
    address: "8 South Wagon Rd Lynchburg, VA 24502",
    miles: 2.6,
    kilometers: 4.2,
    lat: 40.61353,
    lon: -111,
    difficulty: "Medium",
    blurb: "DO IT!!!!!!",
    user_id: 1,
  },
];


const seedTrails = () => Trail.bulkCreate(traildata);

module.exports = seedTrails;
