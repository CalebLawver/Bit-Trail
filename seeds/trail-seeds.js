const { Trail } = require('../models')

const traildata = [
    {
      name: 'Donut Falls Trail',
      address: '12 Cottonwood Canyon Rd, Salt Lake City, UT 84121',
      miles: 3.3,
      kilometers: 5.3,
      lat: 40.595690,
      lon: -111.581530,
      difficulty: 'Easy',
      blurb: 'A very easy and family/kids-friendly hiking trail.',
      user_id: 1,
    },
    {
        name: 'Living Room Lookout Trail',
        address: 'Colorow Dr, Salt Lake City, UT 84108',
        miles: 2.4,
        kilometers: 3.9,
        lat: 40.760110,
        lon: -111.822170,
        difficulty: 'Medium',
        blurb: 'Pay attention to the trails you go on, there are many offshoots that can be very challenging, especially to go down.',
        user_id: 1,
        },
      {
        name: 'Cecret Lake Trail',
        address: 'Cecret Lake Trail, Alta, UT 84092',
        miles: 1.8,
        kilometers: 2.9,
        lat: 40.574620,
        lon: -111.616360,
        difficulty: 'Easy',
        blurb: 'Short hike, beautiful scenery, chance to see moose and other animals.  Nice place to relax.  It`s fun to see the salamanders too. The kids like that.',
        user_id: 1,
      },
      {
        name: 'Lake Mary Trail',
        address: 'Lake Mary Trail, Salt Lake City, UT 84121',
        
        lat: 40.613530,
        lon: -111.808200,
        difficulty: 'Medium',
        blurb: 'DO IT!!!  EXPERIENCE OF A LIFETIME!!!',
        user_id: 1,
      },
      {
        name: 'Grandeur Peak East Trail from Church Fork',
        address: 'Lake Mary Trail, Salt Lake City, UT 84121',
        miles: 2.6,
        kilometers: 4.2,
        lat: 40.613530,
        lon: -111,
        difficulty: 'Medium',
        blurb: 'DO IT!!!  EXPERIENCE OF A LIFETIME!!!',
        user_id: 1,
      },
  ];

  const seedTrails = () => Trail.bulkCreate(traildata);

  module.exports = seedTrails;