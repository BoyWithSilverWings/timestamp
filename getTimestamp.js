function getTimestamp(req, res) {
  const date = new Date(req.params.date || new Date());
  if(date instanceof Date && !isNaN(date.valueOf())) {
    const response = {"unix": date.getTime(), "utc" : date.toUTCString()};
    res.json(response);
  } else {
    res.json({"error" : "Invalid Date" });
  }
}

module.exports = getTimestamp;