import express, { Request, Response } from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Endpoint to check if server is running
app.get('/ping', (req: Request, res: Response) => {
  res.json({ success: true });
});

// Endpoint to submit a new form submission
app.post('/submit', (req: Request, res: Response) => {
  const { SubmissionName, Email, PhoneNum, GithubLink, StopwatchTime } = req.body;

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
    SubmissionName,
    Email,
    PhoneNum,
    GithubLink,
    StopwatchTime
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

// Endpoint to delete a submission by index
app.delete('/delete', (req: Request, res: Response) => {
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
    submissions.splice(idx, 1);
    fs.writeFileSync('db.json', JSON.stringify(submissions, null, 2), 'utf8');
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Submission not found' });
  }
});

// Endpoint to edit a submission by index
app.put('/edit', (req: Request, res: Response) => {
  const { index, SubmissionName, Email, PhoneNum, GithubLink, StopwatchTime } = req.body;
  const idx = Number(index);

  // Read submissions from db.json
  let submissions: any[] = [];
  try {
    const data = fs.readFileSync('db.json', 'utf8');
    submissions = JSON.parse(data);
  } catch (err) {
    console.error('Error reading db.json', err);
    return res.status(500).json({ error: 'Internal server error' });
  }

  if (idx >= 0 && idx < submissions.length) {
    submissions[idx] = {
      SubmissionName,
      Email,
      PhoneNum,
      GithubLink,
      StopwatchTime
    };

    try {
      fs.writeFileSync('db.json', JSON.stringify(submissions, null, 2), 'utf8');
      res.json({ success: true });
    } catch (err) {
      console.error('Error writing to db.json', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(404).json({ error: 'Submission not found' });
  }
});

// Endpoint to search for submissions by email
app.get('/search', (req: Request, res: Response) => {
  const { email } = req.query;

  // Read submissions from db.json
  let submissions: any[] = [];
  try {
    const data = fs.readFileSync('db.json', 'utf8');
    submissions = JSON.parse(data);
  } catch (err) {
    console.error('Error reading db.json', err);
  }

  // Filter submissions by email
  const filteredSubmissions = submissions.filter(submission => submission.Email === email);

  if (filteredSubmissions.length > 0) {
    res.json(filteredSubmissions);
  } else {
    res.status(404).json({ error: 'No submissions found for the provided email' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
