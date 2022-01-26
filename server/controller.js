const { findReports, makeReport } = require('./model.js');

module.exports = {
  getReports: (req, res) => {
    findReports(req.body.longitude, req.body.latitude)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch( err => res.sendStatus(500));
  },

  postReport: (req, res) => {
    res.send('post working')
    // makeReport()
    // .then((data) => {
    //   res.send(data)
    // })
    // .catch( err => res.sendStatus(500));
  }
}