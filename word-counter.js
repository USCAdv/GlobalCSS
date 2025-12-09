function countWords() {
  // 1. target the element
  const contentElement = document.getElementById('main-article');
  const displayElement = document.getElementById('counter-display');

  // SAFETY CHECK: This ensures the code only runs if the elements actually exist
  // This prevents errors on pages that might not have a "main-content" area.
  if (!contentElement || !displayElement) {
    return;
  }

  // 2. Count the words
  const text = contentElement.innerText;
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);

  // 3. Update display
  displayElement.innerText = `Words: ${words.length}`;
}

// Run this function when the window finishes loading
window.onload = countWords;