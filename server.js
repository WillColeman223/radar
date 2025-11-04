const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Serve files from root
app.use(express.static(__dirname));

// Test API endpoint
app.get('/api/test', (req, res) => {
  res.json({
    flights: [
      { callsign: 'TEST123', lat: 51.5, lon: -0.12, altitude: 10000, groundspeed: 250, heading: 90 }
    ],
    controllers: [
      { callsign: 'ATC1', lat: 52.0, lon: 0.0, frequency: '123.45', rating: 'GND' }
    ]
  });
});

// Start server on all interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
