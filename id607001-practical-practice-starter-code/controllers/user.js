import prisma from '../prisma/client.js';

const createUser= async (req, res)=>{
    try{
        const user=await prisma.user.create({data: req.body});
        return res.status(201).json({
            message: "player created",
            data: user
        });
    }catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
};

const getUsers= async(req, res)=>{
    try{
        const users=await prisma.user.findMany();
        if (!users || users.length===0){
            return res.status(404).json({
                message: "No users found"
            });
        }
        return res.status(200).json({
            message: "users",
            data: users,
        });
    }catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
};

const getUser= async(req, res)=>{
    const id= Number(req.params.id);
    try{
        const user=await prisma.user.findUnique({
            where: {id}
        });
        if(!user){
            return res.status(404).json({
                message: `No user with the id ${id} found`
            });
        }
        return res.status(200).json({
            message: "User found",
            data: user,
        });
    }catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
};

const updateUser= async(req, res)=>{
    const id = Number(req.params.id);
    try{
        const user= await prisma.user.findUnique({
            where: {id}
        });
        if (!user){
            return res.status(404).json({
                message: `no user with the id ${id} found`
            });
        }
      const updatedUser=  await prisma.user.update({
        where: {id},
        data: req.body,
      });
      return res.status(200).json({
        message: "User updated",
        data: updatedUser,
      });
    }catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
};

const deleteUser= async (req, res)=>{
    const id = Number(req.params.id);
    try{
     const user= await prisma.user.findUnique({
        where: {id}
     });
     if(!user){
        return res.status(400).json({
            message: `No user with the id ${id} found`
        });
     }
     await prisma.user.delete({
        where: {id: id}
     });
     return res.status(200).json({
        message:"user deleted"
     });
    }catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
};

export{
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}