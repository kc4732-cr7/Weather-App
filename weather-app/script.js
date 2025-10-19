const apiKey = '2959437a59d7ac7c6c195b851fd876e6'; 
const btn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const details = document.getElementById('weather-details');
const loading = document.getElementById('loading');
const toggleModeBtn = document.getElementById('toggle-mode');

btn.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert('Please enter a city name first!');
    return;
  }

  details.classList.add('hidden');
  loading.classList.remove('hidden');

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();

    loading.classList.add('hidden');

    if (data.cod !== 200) {
      details.innerHTML = `<p>${data.message}. Try another city.</p>`;
      details.classList.remove('hidden');
      return;
    }

    details.innerHTML = `
      <h2>${data.name} <i class="bi bi-thermometer-half"></i></h2>
      <p>${data.weather[0].description}</p>
      <p>Temp: ${data.main.temp} °C</p>
      <p>Wind: ${data.wind.speed} m/s</p>
    `;
    details.classList.remove('hidden');
  } catch (error) {
    loading.classList.add('hidden');
    details.innerHTML = `<p>Error fetching data. Try again.</p>`;
    details.classList.remove('hidden');
  }
});

// Dark mode toggle
toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
