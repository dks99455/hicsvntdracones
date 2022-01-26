const { findReports, makeReport } = require('./model.js');

module.exports = {
  getReports: (req, res) => {
    findReports()
    .then((data) => {
      res.send(data);
    })
    .catch( err => res.sendStatus(500));
  },

  postReport: (req, res) => {
    makeReport()
    .then((data) => {
      res.send(data)
    })
    .catch( err => res.sendStatus(500));
  }
}