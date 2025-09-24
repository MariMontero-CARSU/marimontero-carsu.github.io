// Simple Node.js server for local image upload (dev only)
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve static files from docs/
app.use(express.static(path.join(__dirname, 'docs')));

// Multer setup for uploads/
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, 'temp-profile-pic' + path.extname(file.originalname))
});
const upload = multer({ storage });

// Image upload endpoint
app.post('/upload-profile-pic', upload.single('profilePic'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ url: '/uploads/' + req.file.filename });
});

// Serve uploaded images (dev only)
app.use('/uploads', express.static(uploadDir));

// Always serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

// On server start, clear uploads dir (reset on restart)
fs.readdir(uploadDir, (err, files) => {
  if (!err) files.forEach(f => fs.unlinkSync(path.join(uploadDir, f)));
});

app.listen(PORT, () => {
  console.log(`Dev server running at http://localhost:${PORT}`);
});
