import Request from "../models/Request.js";


export const createRequest = async (req, res) => {
  try {
    const request = await Request.create({
      user: req.user._id,
      ...req.body
    });
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getUserRequests = async (req, res) => {
  try {
    const requests = await Request.find({ user: req.user._id });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
