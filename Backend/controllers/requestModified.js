const cr = require("../model/crData");

const approveRequest = async (req, res) => {
    try {
        const { data } = req.body;

        const updated = await cr.findByIdAndUpdate(
            data,
            { approved: true },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ status: "fail" });
        }

        res.json({ status: "success" });

    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
};


const declineRequest = async (req, res) => {
    try {
        const { id } = req.body;

        const deleted = await cr.findOneAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ status: "fail", message: "Request not found" });
        }

        res.json({ status: "success", data: deleted });

    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

module.exports = { approveRequest, declineRequest };
