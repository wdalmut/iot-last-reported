
const time = (max, data) => {
  if (data.timestamp === undefined) {
    return Object
      .keys(data)
      .map((k) => time(max, data[k]))
      .reduce((memo, value) => (value > memo) ? value : memo, max)
  }

  if (data.timestamp > max) {
    return data.timestamp;
  }

  return max;
}

module.exports = (metadata) => {
  return time(0, metadata);
}
