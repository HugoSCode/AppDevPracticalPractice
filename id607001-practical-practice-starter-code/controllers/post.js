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
    const id = Number(req.params.id);
    try{
        const post= await prisma.post.findUnique({
            where: { id },
        });
        if (!post){
            return res.status(404).json({message: `no post with the id ${id} found`});
        }
        return res.status(201).json({
            message: `Post with the id ${id} found`,
            data: {post},
        });
    }catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
};

const updatePost=async(req, res)=>{
    const id = Number(req.params.id);
    try{
        const post = await prisma.post.findUnique({
            where: {id},
        });
        if(!post){
            return res.status(404).json({
                message: "No post with that id found"
            });
        }
        const updatedPost= await prisma.post.update({
            where: {id},
            data: req.body,
        });
        return res.status(200).json({
            message: "Post successfully updated",
            data: updatedPost,
        });
    }catch (err){
        return res.status(500).json({message: err.message});
    }
};

const deletePost= async (req, res)=>{
    const id= Number(req.params.id);
    try{
        const post=await prisma.post.findUnique({
            where: {id}
        });
        if (!post){
            return res.status(404).json({
                message: `No post with the id ${id} found`
            });
        }
        await prisma.post.delete({
            where: {id: id},
        });
        return res.status(200).json({
            message: `Post with the id ${id} successfully deleted`
        });
    }catch (err){ 
        return res.status(500).json({message: err.message});
    }
};

export{
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost
}