import prisma from '../prisma/client.js';

// Write your solution here

const createPost= async (req, res)=>{
    try{
    const post = await prisma.post.create ({ data: req.body });
    return res.status(201).json({
        message: "Post created",
        data: post,
    });
    }catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
};

const getPosts= async (req, res)=>{
    try{
    const posts= await prisma.post.findMany();
    if (!posts || posts.length===0){
        return res.status(400).json({
            message: "No posts found"
        });
    }
    return res.status(201).json({
        message: "Posts found",
        data: posts,
    });
    }catch (err){
        return res.status(500).json({message: err.message});
    }
};

const getPost= async (req, res)=>{
    try{
        const post= await prisma.post.findUnique({
            where: {id},
        });
        if (!post){
            return res.status(201).json({message: "no post with that id found"});
        }
        return res.status(201).json({
            message: "player found",
            data: {player},
        });
    }catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
};

export{
    createPost,
    getPosts
}