const { Report } = require('../database');

module.exports = {
  findReports: (longitude, latitude) => { //get nearest reports for coordinates
    return Report.find({
      $or: [
        {longitude: {$gt: (longitude - 0.5), $lt:(longitude + 0.5)}, latitude: {$gt: (latitude - 0.5), $lt: (latitude + 0.5)}},
        {city_longitude: {$gt: (longitude - 0.5), $lt:(longitude + 0.5)}, city_latitude: {$gt: (latitude - 0.5), $lt: (latitude + 0.5)}}
      ]
    }).exec();
  },

  makeReport: (longitude, latitude, reportdata) => { //submit a report with coordinates

  }
}