import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

// Define the /users endpoint
app.post('/users', async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: { email, password },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

export default app;
