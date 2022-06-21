const { trails } = require('../models')

const trailsdata = [
    {
      name: 'Donut Falls Trail',
      address: '12 Cottonwood Canyon Rd, Salt Lake City, UT 84121',
      lat: '40.595690',
      lon: '-111.581530',
      miles: '3.3',
      kilometers: '5.3',
      difficulty: 'Easy',
      blurb: 'A very easy and family/kids-friendly hiking trail.',
      poster_id: '1',
    },
    {
        name: 'Living Room Lookout Trail',
        address: 'Colorow Dr, Salt Lake City, UT 84108',
        lat: '40.760110',
        lon: '-111.822170',
        miles: '2.4',
        kilometers: '3.9',
        difficulty: 'Medium',
        blurb: 'Pay attention to the trails you go on, there are many offshoots that can be very challenging, especially to go down.',
        poster_id: '1',
        },
      {
        name: 'Cecret Lake Trail',
        address: 'Cecret Lake Trail, Alta, UT 84092',
        lat: '40.574620',
        lon: '-111.616360',
        miles: '1.8',
        kilometers: '2.9',
        difficulty: 'Easy',
        blurb: 'Short hike, beautiful scenery, chance to see moose and other animals.  Nice place to relax.  It`s fun to see the salamanders too. The kids like that.',
        poster_id: '1',
      },
      {
        name: 'Lake Mary Trail',
        address: 'Lake Mary Trail, Salt Lake City, UT 84121',
        lat: '40.613530',
        lon: '-111.808200',
        miles: '2.6',
        kilometers: '4.2',
        difficulty: 'Medium',
        blurb: 'DO IT!!!  EXPERIENCE OF A LIFETIME!!!',
        poster_id: '1',
      },
      {
        name: 'Grandeur Peak East Trail from Church Fork',
        address: 'Lake Mary Trail, Salt Lake City, UT 84121',
        lat: '40.613530',
        lon: '-111',
        miles: '2.6',
        kilometers: '4.2',
        difficulty: 'Medium',
        blurb: 'DO IT!!!  EXPERIENCE OF A LIFETIME!!!',
        poster_id: '1',
      },
  ];

  const seedTrails = () => Trail.bulkCreate(trailsdata);

  module.exports = seedTrails;