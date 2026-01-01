const User = require("./User");
const monogoose = require("mongoose");
const adminSchema = new monogoose.Schema({
  adminLevel: { type: String, required: true },
});
const Admin = User.discriminator("Admin", adminSchema);
module.exports = Admin;
