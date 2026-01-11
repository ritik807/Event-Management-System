import RequestItem from "../models/RequestItem.js";
import Vendor from "../models/Vendor.js";

export const createRequest = async (req, res) => {
  try {
    const { vendorId, message } = req.body;

    if (!vendorId || !message) {
      return res.status(400).json({ message: "Vendor and message required" });
    }

    const vendor = await Vendor.findById(vendorId);
    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    const request = await RequestItem.create({
      user: req.user.id,
      vendor: vendor._id,
      message
    });

    res.status(201).json(request);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const userRequests = async (req, res) => {
  try {
    const requests = await RequestItem.find({ user: req.user.id })
      .populate("vendor")
      .sort({ createdAt: -1 });

    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const vendorRequests = async (req, res) => {
  try {
    const requests = await RequestItem.find({ vendor: req.vendorId })
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["APPROVED", "REJECTED"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const request = await RequestItem.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    request.status = status;
    await request.save();

    res.json({ message: "Request status updated", status });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
