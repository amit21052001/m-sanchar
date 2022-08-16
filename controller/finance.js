const Finance = require("../models/Ministries/Finance");

const getAllRecords = async (req, res) => {
  //   res.send("sending all the records..");
  try {
    const recorde = await Finance.find({});
    res.status(200).json({ recorde });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

const createRecord = async (req, res) => {
  try {
    const record = await Finance.create(req.body);
    res.status(200).json(record);
  } catch (error) {
    res.status(404).send({ msg: error });
  }
};

module.exports = { getAllRecords, createRecord };
