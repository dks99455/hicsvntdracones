const { Report } = require('../database');

module.exports = {
  findReports: (longitude, latitude) => { //get nearest reports for coordinates
    const distance = 0.5;
    const minLon = longitude - distance;
    const maxLon = longitude + distance;
    const minLat = latitude - distance;
    const maxLat = latitude + distance;
    return Report.find({
      $or: [
        {longitude: {$gt: minLon, $lt:maxLon}, latitude: {$gt: minLat, $lt: maxLat}},
        {city_longitude: {$gt: minLon, $lt:maxLon}, city_latitude: {$gt: minLat, $lt: maxLat}}
      ]
    }).exec();
  },

  makeReport: (longitude, latitude, reportdata) => { //submit a report with coordinates

  }
}