document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Find all links that need counting
    const links = document.querySelectorAll('.count-me');

    links.forEach(link => {
        // 2. Go fetch the page content in the background
        fetch(link.href)
            .then(response => {
                // If the page loads successfully
                if (response.ok) return response.text();
                throw new Error('Page not found');
            })
            .then(html => {
                // 3. Convert the text HTML into a virtual DOM document
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                // 4. Find the main content on that fetched page
                // IMPORTANT: This ID ('main-content') must match the ID used on your inner pages
                const contentElement = doc.getElementById('main-article');

                if (contentElement) {
                    // 5. Calculate count (same logic as before)
                    const text = contentElement.innerText;
                    const count = text.trim().split(/\s+/).filter(w => w.length > 0).length;

                    // 6. Find the span next to the link and update it
                    const outputSpan = link.nextElementSibling;
                    if (outputSpan) {
                        outputSpan.innerText = `[${count} words]`;
                    }
                }
            })
            .catch(error => {
                console.error("Could not count words for " + link.href, error);
            });
    });
});