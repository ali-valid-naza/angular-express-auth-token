const incrementCount = (req, res) => {
  let counterValue = req.body.counterValue;
  if (counterValue === 0) {
    res.status(200).json({ counterValue: counterValue, nextValue: counterValue += 1, });
  } else {
    res.status(200).json({ counterValue: counterValue, nextValue: counterValue *= 2, });
  }
};

module.exports = {
  incrementCount,
};
