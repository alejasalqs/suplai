const mongoose = require("mongoose");
const { Schema } = mongoose;

const RequestSchema = new Schema({
	title: { type: String, required: true, trim: true },
	description: { type: String, required: true, trim: true },
	budget: { type: Number, required: true },
	status: { type: String, required: true },
	dateCreated: { type: Date, required: true, default: Date.now() },
	owner: { type: Schema.Types.ObjectId, ref: "User"}
});

module.exports = mongoose.model("Request", RequestSchema);
