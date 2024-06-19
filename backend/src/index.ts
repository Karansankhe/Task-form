import express, { Request, Response } from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint to check if server is running
app.get('/ping', (req: Request, res: Response) => {
  res.json({ success: true });
});

// Endpoint to submit a new form submission
app.post('/submit', (req: Request, res: Response) => {
  const { name, email, phone, github_link, stopwatch_time } = req.body;

  // Read current submissions from db.json
  let submissions: any[] = [];
  try {
    const data = fs.readFileSync('db.json', 'utf8');
    submissions = JSON.parse(data);
  } catch (err) {
    console.error('Error reading db.json', err);
  }

  // Add new submission
  const newSubmission = {
    name,
    email,
    phone,
    github_link,
    stopwatch_time
  };
  submissions.push(newSubmission);

  // Write updated submissions to db.json
  fs.writeFileSync('db.json', JSON.stringify(submissions, null, 2), 'utf8');

  res.json({ success: true });
});

// Endpoint to read a submission by index
app.get('/read', (req: Request, res: Response) => {
  const { index } = req.query;
  const idx = Number(index);

  // Read submissions from db.json
  let submissions: any[] = [];
  try {
    const data = fs.readFileSync('db.json', 'utf8');
    submissions = JSON.parse(data);
  } catch (err) {
    console.error('Error reading db.json', err);
  }

  if (idx >= 0 && idx < submissions.length) {
    res.json(submissions[idx]);
  } else {
    res.status(404).json({ error: 'Submission not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
