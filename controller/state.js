const State = require("../models/state");
const Location = require("../models/location");
exports.createState = (req, res) => {
  const state = new State(req.body);
  state.save((error, state) => {
    if (error) {
      return res.status(400).json({
        error: "CREATING STATE FAILED",
      });
    }
    res.json(state);
  });
};

exports.getStateById = (req, res, next, id) => {
  State.findById(id)
    .populate("State", "_id statename ")
    .exec((error, state) => {
      if (error || !state) {
        return res.status(400).json({
          error: "STATE NOT EXIST",
        });
      }
      req.state = state;
      console.log(req.state);
      next();
    });
};
//getAll StatebYID
exports.getAllStatesById = (req, res) => {
  const state = req.state;
  return res.json(state);
};

exports.updateState = (req, res) => {
  let statename = req.body.name;
  let citynames = req.body.city;
  let u = req.body.city;

  State.findByIdAndUpdate(
    { _id: req.state._id },
    { $set: { citynames: citynames, statename: statename } },
    { new: true, useFindAndModify: false },
    (error, abc) => {
      // saving the new state (two line above)
      if (error) {
        return res.status(400).json({
          error: "STATE UPDATE FAILED",
        });
      }
      console.log(abc + "res");
      res.json(abc);
    }
  );
};

exports.removeState = (req, res) => {
  const state = req.state;
  state.remove((error, state) => {
    if (error) {
      return res.status(400).json({
        error: "DELETE FAILED",
      });
    }
    res.json({
      message: "SUCCESSFULLY DELETED",
    });
  });
};

exports.getAllStates = (req, res) => {
  State.find().exec((error, states) => {
    if (error || !states) {
      return res.status(400).json({
        error: "ZERO STATES IN DB",
      });
    }
    res.json(states);
  });
};

// exports.getLocationByStateName = (req, res, next, name) => {
//   State.findOne(name)
//     .populate("State", "_id statename citynames")
//     .exec((error, location) => {
//       console.log(error)
//       if (error || !location) {
//         return res.status(400).json({
//           error: "STATE NOT EXIST For This Location",
//         });
//       }
//       req.location = location;
//       console.log(req.location);
//       next();
//     });
// };


