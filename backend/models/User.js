// ============================================================
// models/User.js
// Simple User schema — stores email, password (plain text),
// name, and an optional child profile.
// No encryption, no roles — kept simple for college project.
// ============================================================

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Basic identity
  name:     { type: String, required: true, trim: true },
  email:    { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true }, // plain text (simple auth)

  // ── Email Verification ────────────────────────────────
  // isVerified: becomes true only after the user clicks the email link
  // verificationToken: random string sent in the email link; cleared after use
  isVerified:        { type: Boolean, default: false },
  verificationToken: { type: String,  default: null  },

  // Optional child profile attached to this account
  child: {
    name:   { type: String, default: '' },
    age:    { type: Number, default: 0 },
    avatar: { type: String, default: '🧒' }
  },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);