import User from "../models/User.js";
import Request from "../models/Request.js";

// GET ALL USERS OR VENDORS
export const getAllUsers = async (req, res) => {
  try {
    const { role } = req.query; // role=user/vendor
    const users = await User.find(role ? { role } : {}).select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE USER / VENDOR
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    await user.remove();
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL REQUESTS
export const getRequests = async (req, res) => {
  try {
    const requests = await Request.find().populate("user", "name email");
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE REQUEST Status

export const updateRequestStatus = async (req, res) => {
  try {
    const { status } = req.body; 
    const request = await Request.findById(req.params.id);

    if (!request) return res.status(404).json({ message: "Request not found" });

    request.status = status;
    await request.save();
    res.json({ message: "Request updated", request });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
