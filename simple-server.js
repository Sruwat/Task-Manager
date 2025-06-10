const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
  console.log('? Test route accessed!');
  res.json({ 
    success: true, 
    message: 'Backend is working!',
    port: 5000,
    timestamp: new Date().toISOString()
  });
});

app.post('/api/auth/register', (req, res) => {
  console.log('? Register route accessed!');
  console.log('Request body:', req.body);
  
  res.json({
    success: true,
    message: 'Registration working!',
    data: {
      user: { 
        name: req.body.name || 'Test User', 
        email: req.body.email || 'test@test.com' 
      },
      token: 'test-token-123'
    }
  });
});

app.post('/api/auth/login', (req, res) => {
  console.log('? Login route accessed!');
  console.log('Request body:', req.body);
  
  res.json({
    success: true,
    message: 'Login working!',
    data: {
      user: { 
        name: 'Test User', 
        email: req.body.email || 'test@test.com' 
      },
      token: 'test-token-123'
    }
  });
});

const PORT = 3333;

app.listen(PORT, '0.0.0.0', () => {
  console.log('?????? SERVER STARTED SUCCESSFULLY! ??????');
  console.log('?? Server running on: http://localhost:' + PORT);
  console.log('?? Test URL: http://localhost:' + PORT + '/api/test');
  console.log('? Started at:', new Date().toLocaleString());
});
