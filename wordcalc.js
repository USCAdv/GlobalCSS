document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Target your specific link wrapper class
    const chapters = document.querySelectorAll('.chapter-link-wrapper');

    chapters.forEach(chapterLink => {
        // 2. Find the word count span INSIDE this specific link
        const countSpan = chapterLink.querySelector('.chapter-wordcount');

        // Safety check: if the span exists, set it to calculating
        if (countSpan) {
            countSpan.innerText = "Calculating...";
        } else {
            return; // Skip if no span found
        }

        // 3. Fetch the URL from the anchor's href
        fetch(chapterLink.href)
            .then(response => {
                if (response.ok) return response.text();
                throw new Error('Page not found');
            })
            .then(html => {
                // 4. Parse the HTML of the destination page
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                // IMPORTANT: Ensure your destination pages have <div id="main-content"> around the text
                const contentElement = doc.getElementById('main-article');

                if (contentElement) {
                    const text = contentElement.innerText;
                    const count = text.trim().split(/\s+/).filter(w => w.length > 0).length;

                    // 5. Update your specific span class
                    // Optional: You can add logic here to format "1200" as "1.2k" if you prefer
                    countSpan.innerText = `${count} words`;
                } else {
                    console.warn(`Could not find #main-content in ${chapterLink.href}`);
                    countSpan.innerText = "N/A";
                }
            })
            .catch(error => {
                console.error(error);
                countSpan.innerText = "Error";
            });
    });
});