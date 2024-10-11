const loadContent = (section) => {
  const contentArea = document.getElementById('content-area');

  // Simulated dynamic content based on section
  const contentMap = {
    cupertino: '<h1>Welcome to Cupertino</h1><p>Cupertino is known for...</p>',
    'new-york-city':
      '<h1>Welcome to New York City</h1><p>NYC is famous for...</p>',
    london: '<h1>Welcome to London</h1><p>London is known for...</p>',
    amsterdam: '<h1>Welcome to Amsterdam</h1><p>Amsterdam is famous for...</p>',
    tokyo: '<h1>Welcome to Tokyo</h1><p>Tokyo is known for...</p>',
    'hong-kong':
      '<h1>Welcome to Hong Kong</h1><p>Hong Kong is famous for...</p>',
    sydney: '<h1>Welcome to Sydney</h1><p>Sydney is known for...</p>',
  };

  // Set the content based on the section
  contentArea.innerHTML = contentMap[section] || '<h1>Section not found</h1>';
};
