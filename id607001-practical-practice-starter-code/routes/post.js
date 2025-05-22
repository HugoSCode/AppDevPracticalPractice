// ==============================================
// ======= ⚠️ DO NOT MODIFY THIS FILE ⚠️ =======
// ==============================================

import express from 'express';
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
} from '../controllers/post.js';

import {
  validatePostPost,
  validatePutPost,
} from '../middleware/validation/post.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: "My First Blog Post"
 *         content:
 *           type: string
 *           example: "This is the content of the blog post."
 *         published:
 *           type: boolean
 *           example: false
 *         authorId:
 *           type: integer
 *           example: 1
 */

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new post
 *     tags:
 *       - Post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 */
router.post('/', validatePostPost, createPost);

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get all posts
 *     tags:
 *       - Post
 */
router.get('/', getPosts);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Get a post by id
 *     tags:
 *       - Post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post id
 */
router.get('/:id', getPost);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Update a post by id
 *     tags:
 *       - Post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 */
router.put('/:id', validatePutPost, updatePost);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Delete a post by id
 *     tags:
 *       - Post
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post id
 */
router.delete('/:id', deletePost);

export default router;
