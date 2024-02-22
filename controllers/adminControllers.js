const Event = require("../models/Event");
const User = require("../models/User");

module.exports.createEvent_post = async (req, res) => {
  const { uniqueName } = req.body;
  try {
    Event.create({ uniqueName })
      .then((result) => {
        res.status(201).json({ msg: result._id });
      })
      .catch((err) => {
        res.status(400).json({ msg: "Error" });
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateEventDetails_put = async (req, res) => {
  const data = req.body;

  Object.keys(data).forEach(
    (element) => data[element] === "" && delete data[element]
  );

  await Event.updateOne({ uniqueName: data.uniqueName }, data)
    .then((result) => {
      res.status(200).json({ msg: "success" });
    })
    .catch((err) => {
      res.status(400).json({ msg: "Error" });
    });
};

module.exports.getEvents_get = (req, res) => {
  Event.find({})
    .then((result) => {
      result = result.map((element) => element.uniqueName);
      res.status(200).json({ result });
    })
    .catch((err) => {
      res.status(400).json({ msg: "err" });
    });
};

module.exports.getEventData_post = (req, res) => {
  const { uniqueName } = req.body;
  Event.findOne({ uniqueName: uniqueName })
    .then((result) => {
      console.log(result);
      res.status(200).json({ result });
    })
    .catch((err) => {
      res.status(400).json({ msg: "err" });
    });
};

module.exports.remove_delete = (req, res) => {
  const { uniqueName } = req.body;
  console.log(uniqueName);
  Event.deleteOne({ uniqueName: uniqueName })
    .then((result) => {
      console.log(result);
      res.status(200).json({ msg: "success" });
    })
    .catch((err) => {
      res.status(400).json({ msg: "err" });
    });
};

module.exports.getStudents_get = (req, res) => {
  User.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json({ msg: "err" });
    });
};
