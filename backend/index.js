import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/weather', async (req, res) => {
  const { city } = req.query;
  const apiKey = 'YOUR_OPENWEATHER_KEY';
  const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await r.json();
  res.json(data);
});

app.listen(8080, () => console.log('Server running on port 8080'));
