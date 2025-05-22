// ==============================================
// ======= ⚠️ DO NOT MODIFY THIS FILE ⚠️ =======
// ==============================================

import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import postRoutes from './routes/post.js';
import userRoutes from './routes/user.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '',
      version: '1.0.0',
      description:
        'ID607001: Introductory Application Development Concepts - Practical',
      contact: {
        name: '',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT}. Visit http://localhost:${PORT}`,
  );
});

export default app;
