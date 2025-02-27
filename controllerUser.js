const User = require('../models/modelUser');  // Correct import



async function handleGetAllUser(req ,res ) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers); 
}

async function handlegetUserById(req,res) {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ err: "User not found" });
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: "Invalid user ID" });
  }
}


async function handleUpdateUserById(req , res) {
  await User.findByIdAndUpdate(req.params.id, {lastName : "changed"})
  return res.json({ status: "success" });
}

async function handleDeleteUserById(req , res) {
  await User.findByIdAndDelete(req.params.id)
  return res.json({ status: "success" });
}

async function CreateNewUser(req , res){
  const body = req.body;
  if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.age) {
    return res.status(400).json("All fields are required");
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    age: body.age
  });

  res.status(201).json({ msg: "User created successfully", id: result._id });
}

module.exports = {
  handleGetAllUser , 
  handlegetUserById ,
  handleUpdateUserById,
  handleDeleteUserById,
  CreateNewUser,
};