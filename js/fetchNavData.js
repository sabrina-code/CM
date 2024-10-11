export const fetchNavData = async () => {
  try {
    const response = await fetch('data/navigation.json');
    if (!response.ok) {
      throw new Error('Network error');
    }
    const data = await response.json();

    return data.cities;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
