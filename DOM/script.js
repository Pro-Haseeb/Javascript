// Array with suggestions
const suggestions = ["JavaScript", "HTML", "CSS", "Frontend Development", "Google Clone"];

// Elements
const searchBar = document.getElementById('search-bar');
const suggestionList = document.getElementById('suggestion-list');

// Show suggestions when search bar is clicked
searchBar.addEventListener('click', () => {
  // Remove 'hidden' class to show the list
  suggestionList.classList.remove('hidden');

  // Clear previous suggestions
  suggestionList.innerHTML = '';

  // Populate list with array items
  suggestions.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    suggestionList.appendChild(listItem);
  });
});

// Hide suggestions when clicking outside
document.addEventListener('click', (event) => {
  if (!searchBar.contains(event.target) && !suggestionList.contains(event.target)) {
    suggestionList.classList.add('hidden');
  }
});
