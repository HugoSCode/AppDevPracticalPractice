// ==============================================
// ======= ⚠️ DO NOT MODIFY THIS FILE ⚠️ =======
// ==============================================

import express from 'express';
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/user.js';

import {
  validatePostUser,
  validatePutUser,
} from '../middleware/validation/user.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           example: "John"
 *         lastName:
 *           type: string
 *           example: "Doe"
 *         email:
 *           type: string
 *           example: "john.doe@gmail.com"
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 */
router.post('/', validatePostUser, createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - User
 */
router.get('/', getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by id
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user id
 */
router.get('/:id', getUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update a user by id
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 */
router.put('/:id', validatePutUser, updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user by id
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user id
 */
router.delete('/:id', deleteUser);

export default router;
