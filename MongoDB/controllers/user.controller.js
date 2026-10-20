import User from "../models/userModel"

export const Home=(req, res) => {
    res.send("hello")
}

export const create= async (req,res)=>{
    try {
     let   {name,age,email,userName}=req.body
     const newUser=await User.create({
        name,
        age,
        email,userName
     })
     res.status(201).json({message:"User created"})
    } catch (error) {
        res.status(400).json({message:error})
    }
}

export const read=async (req, res) => { //PRINT ALL USERS
    try {
        // const users= await User.find({age:{$gt:18}})
        const users = await User.find({ $and: [{ age: { $gt: 18 } }, { name: { $eq: "kanika" } }] })
        res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({ message: "user not found" })
    }
}

export const readUser =async (req, res) => {
    try {
        const users = await User.findOne({ userName: req.params.userName })
        res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({ message: "user not found" })
    }
}

export const updateID=async (req, res) => {
    try {
        let { name, age } = req.body
        let id = req.params.id
        let user = await User.findByIdAndUpdate(id, { name, age }, { new: true })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({ message: "user not found" })
    }
}

export const updateAll=async (req, res) => {
    try {
        let { name, age, email } = req.body
        let id = req.params
        let user = await User.updateOne({ email }, { name, age }, { new: true })
        return res.status(200).json({ message: "user updated" })
    } catch (error) {
        return res.status(400).json({ message: "user not found" })
    }
}

export const deleteAll=async (req, res) => {
    try {
        let {userName} = req.body
        let user = await User.deleteOne({userName})
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({ message: "user not found" })
    }
}