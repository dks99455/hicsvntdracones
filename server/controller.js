const { findReports, makeReport } = require('./model.js');

module.exports = {
  getReports: (req, res) => {
    const longitude = parseFloat(req.query.longitude);
    const latitude = parseFloat(req.query.latitude);
    findReports(longitude, latitude)
    .then((data) => {
      res.send(data);
    })
    .catch( err => console.log(err));
  },

  postReport: (req, res) => {
    let body = req.body;
    makeReport(body);
  }
}