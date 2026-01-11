import Membership from "../models/Membership.js";

/* ADD MEMBERSHIP (ADMIN) */
export const addMembership = async (req, res) => {
  try {
    const membership = await Membership.create(req.body);
    res.status(201).json(membership);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* GET ALL MEMBERSHIPS */
export const getMemberships = async (req, res) => {
  try {
    const memberships = await Membership.find();
    res.json(memberships);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* UPDATE MEMBERSHIP */
export const updateMembership = async (req, res) => {
  try {
    const updated = await Membership.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* TOGGLE STATUS */
export const toggleMembership = async (req, res) => {
  try {
    const membership = await Membership.findById(req.params.id);
    membership.isActive = !membership.isActive;
    await membership.save();
    res.json(membership);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
