// Function to remove articles from band names
function removeArticles(name) {
  // List of articles to remove
  const articles = ["the", "a", "an"];
  
  // Convert the band name to lowercase
  const lowercaseName = name.toLowerCase();
  
  // Check if the band name starts with any of the articles
  for (let article of articles) {
    if (lowercaseName.startsWith(article + " ")) {
      // If it does, remove the article and return the modified name
      return name.slice(article.length + 1);
    }
  }
  
  // If no articles found, return the original name
  return name;
}

// Array of band names
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Sorting function
function sortBandNames(names) {
  return names.sort((a, b) => {
    // Remove articles from the band names for comparison
    const nameA = removeArticles(a);
    const nameB = removeArticles(b);
    
    // Compare the modified band names
    if (nameA < nameB) {
      return -1;
    }
    
    if (nameA > nameB) {
      return 1;
    }
    
    return 0;
  });
}

// Sort the band names without considering articles
const sortedBandNames = sortBandNames(bandNames);

// Output the sorted band names
console.log(sortedBandNames);
