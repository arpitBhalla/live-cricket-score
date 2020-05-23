var jwt = require('jsonwebtoken');

module.exports = (res, err, data) => {
  // data = jwt.sign(JSON.stringify(data), "arpitbhallaKEY")
  if (err) {
    res.json({
      success: false,
      message: err
    })
  } else if (!data) {
    res.json({
      success: false,
      message: "Not Found"
    })
  } else {
    res.json({
      success: true,
      data: data
    })
  }
}