function getTimeZone(city) {
  const timeZoneMap = {
    'new york city': 'America/New_York',
    cupertino: 'America/Los_Angeles',
    london: 'Europe/London',
    amsterdam: 'Europe/Amsterdam',
    tokyo: 'Asia/Tokyo',
    'hong kong': 'Asia/Hong_Kong',
    sydney: 'Australia/Sydney',
  };

  const normalizedCity = city.toLowerCase().replace(/\s+/g, ' ').trim();
  return timeZoneMap[normalizedCity] || null;
}

function updateTime() {
  const cityElement = document.querySelector('.city__title');
  let city = '';
  let timeZone = '';

  if (cityElement) {
    const city = cityElement.innerText;
    timeZone = getTimeZone(city);
  }

  if (!timeZone) {
    console.error('Invalid timezone:', city);
    return;
  }

  const options = {
    timeZone: timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };

  try {
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const currentTime = formatter.format(new Date());

    const timestamp = document.querySelector('.city__time');
    if (timestamp) {
      timestamp.innerText = currentTime;
    } else {
      console.error('Error finding time.');
    }
  } catch (error) {
    console.error('Error formatting time:', error);
  }
}

// Update time every second
setInterval(updateTime, 1000);
