const { Report } = require('../database');

module.exports = {
  findReports: (longitude, latitude) => { //get nearest reports for coordinates
    const distance = 0.25;
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

  makeReport: (reportdata) => { //submit a report with coordinates
    const newReport = new Report({
      city: reportdata.city,
      country: reportdata.country,
      description: reportdata.description,
      location: reportdata.location,
      state: reportdata.state,
      state_abbrev: reportdata.state_abbrev,
      longitude: reportdata.longitude,
      latitude: reportdata.latitude,
      city_longitude: null,
      city_latitude: null
    })
    newReport.save();
  }
}