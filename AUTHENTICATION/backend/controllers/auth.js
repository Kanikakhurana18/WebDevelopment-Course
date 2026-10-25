import uploadOnCloudinary from "../config/cloudinary.js"
import generateToken from "../config/token.js"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signUp = async (req, res) => {
    try {
        const { firstName, lastName, email, password, userName } = req.body
        if (!firstName || !lastName || !email || !password || !userName) {
            return res.status(400).json({ message: "Send all details" })
        }

        let profileImage;
        if (req.file) {
            profileImage = await uploadOnCloudinary(req.file.path)
        }

        let existUser = await User.findOne({ email })
        if (existUser) {
            return res.status(400).json({ message: "User already exist" })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashPassword,
            userName,
            profileImage
        })

        let token;
        try {
            token =await generateToken(user._id)
        } catch (error) {
            console.log(error);
        }

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENVIRONMENT == "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })


        return res.status(201).json({
            user: {
                firstName, lastName, email, userName, profileImage
            }
        })

    } catch (error) {
        console.error("SIGNUP ERROR:", error);
    return res.status(500).json({
        message: error.message
    });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        let existUser = await User.findOne({ email })
        if (!existUser) {
            return res.status(400).json({ message: "user does not exist" })
        }

        let match = await bcrypt.compare(password, existUser.password)
        if (!match) {
            return res.status(400).json({ message: "Incorrect password" })
        }

        let token;
        try {
            token = await generateToken(existUser._id)
        } catch (error) {
            console.log(error);
        }

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENVIRONMENT == "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            user: {
                firstName: existUser.firstName,
                lastName: existUser.lastName,
                email: existUser.email,
                userName: existUser.userName,
                profileImage: existUser.profileImage
            }
        })

    } catch (error) {
        return res.status(500).json(error)
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({ message: "logout successfully" })
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getUserData = async (req, res) => {
    try {
        let userId = req.userId
        if (!userId) {
            return res.status(400).json({ message: "user id is not found" })
        }
        let user = await User.findById(userId)
        if (!user) {
            return res.status(400).json({ message: "user id is not found" })
        }
        return res.status(200).json(user)
    } catch (error) {
        console.error("getUserData error:", error.message);
        return res.status(500).json({
            message: error.message
        });
    }
}