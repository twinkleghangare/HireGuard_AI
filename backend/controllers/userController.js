import crypto from "crypto";
import User from "../models/User.js";

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.json({
            success: true,
            data: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                organization: user.organization,
                role: user.role,
                apiKeys: user.apiKeys || []
            }
        });
    } catch (error) {
        console.error("Get User Profile Error:", error);
        res.status(500).json({ success: false, message: "Server error getting user profile" });
    }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateUserProfile = async (req, res) => {
    try {
        const { firstName, lastName, organization } = req.body;
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (organization) user.organization = organization;

        await user.save();

        res.json({
            success: true,
            message: "Profile updated successfully",
            data: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                organization: user.organization,
                role: user.role
            }
        });
    } catch (error) {
        console.error("Update User Profile Error:", error);
        res.status(500).json({ success: false, message: "Server error updating profile" });
    }
};

// @desc    Update user password
// @route   PUT /api/users/password
// @access  Private
export const updateUserPassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const user = await User.findById(req.user.id).select("+password");

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const isMatch = await user.matchPassword(currentPassword);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Current password is incorrect" });
        }

        if (!newPassword || newPassword.length < 6) {
            return res.status(400).json({ success: false, message: "New password must be at least 6 characters" });
        }

        user.password = newPassword;
        await user.save();

        res.json({ success: true, message: "Password updated successfully" });
    } catch (error) {
        console.error("Update Password Error:", error);
        res.status(500).json({ success: false, message: "Server error updating password" });
    }
};

// @desc    Get API Keys
// @route   GET /api/users/apikeys
// @access  Private
export const getApiKeys = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.json({
            success: true,
            apiKeys: user.apiKeys || []
        });
    } catch (error) {
        console.error("Get API Keys Error:", error);
        res.status(500).json({ success: false, message: "Server error fetching API keys" });
    }
};

// @desc    Generate API Key
// @route   POST /api/users/apikeys
// @access  Private
export const generateApiKey = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ success: false, message: "Key name is required" });
        }

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const generatedKey = `hg_live_${crypto.randomBytes(24).toString("hex")}`;
        const newKey = {
            name,
            key: generatedKey,
            createdAt: new Date()
        };

        user.apiKeys.push(newKey);
        await user.save();

        res.status(201).json({
            success: true,
            apiKey: newKey
        });
    } catch (error) {
        console.error("Generate API Key Error:", error);
        res.status(500).json({ success: false, message: "Server error generating API key" });
    }
};

// @desc    Revoke API Key
// @route   DELETE /api/users/apikeys/:keyId
// @access  Private
export const revokeApiKey = async (req, res) => {
    try {
        const { keyId } = req.params;
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        user.apiKeys = user.apiKeys.filter((k) => k._id.toString() !== keyId);
        await user.save();

        res.json({ success: true, message: "API key revoked successfully" });
    } catch (error) {
        console.error("Revoke API Key Error:", error);
        res.status(500).json({ success: false, message: "Server error revoking API key" });
    }
};
