// Footer HTML content
const footerHTML = `
    <footer>
        <p>&copy; 2025 University Advancement Salesforce Marketing Cloud User Guide. All rights reserved.</p>
        <p><a href="getting-started.html">getstarted</a>  | <a href="#top">Back to top</a></p>
    </footer>
`;

// Function to inject footer
function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
}

// Load footer when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
} else {
    loadFooter();
}
