var db = require('../db/db.js');

var Toilet = module.exports;

Toilet.findToiletById = function(id) {
  return db('toiletz').where({ id: id }).limit(1)
    .then(function (rows) {
      return rows[0];
    });
};

Toilet.findToiletByLocation = function(location) {
  return db('toiletz').where({ location: location }).limit(1)
    .then(function (rows) {
      return rows[0];
    });
};

Toilet.createToilet = function(attr) {
  return new Promise(function(resolve, reject) {
    return db('toiletz').insert(attr)
      .then(function(result) {
        attr.id = result[0];
        resolve(attr);
      });    
  });
};