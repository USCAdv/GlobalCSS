// Navigation HTML content
const navigationHTML = `
    <nav>
        <div class="container-main">
            <div class="nav-brand">
                <a href="index.html" style="color: inherit; text-decoration: none;">Salesforce Marketing Cloud User Guide</a>
                <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">☰</button>
            </div>
            <ul class="nav-links" id="navLinks">
                <li class="nav-item">
                    <a href="getting-started.html">Getting Started</a>
                </li>
                <li class="nav-item has-dropdown">
                    <a href="creating-emails.html">Creating Emails</a>
                    <ul class="dropdown-menu">
                        <li><a href="create-email.html">Create an Email</a></li>
                        <li><a href="layouts-templates.html">Layouts and Templates</a></li>
                        <li><a href="content-blocks.html">Content Blocks</a></li>
                        <li><a href="best-practices.html">Best Practices</a></li>
                        <li><a href="testing.html">Testing Emails</a></li>
                    </ul>
                </li>
                <li class="nav-item has-dropdown">
                    <a href="audiences.html">Audiences & Targeting</a>
                    <ul class="dropdown-menu">
                        <li><a href="data-extensions.html">Data Extensions</a></li>
                        <li><a href="segmentation.html">Segmentation</a></li>
                        <li><a href="personalization.html">Personalization</a></li>
                    </ul>
                </li>
                <li class="nav-item has-dropdown">
                    <a href="automation.html">Automation</a>
                    <ul class="dropdown-menu">
                        <li><a href="journey-builder.html">Journey Builder</a></li>
                        <li><a href="automation-studio.html">Automation Studio</a></li>
                        <li><a href="triggered-sends.html">Triggered Sends</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="reporting.html">Reporting</a>
                </li>
                <li class="nav-item">
                    <a href="support.html">Support</a>
                </li>
            </ul>
        </div>
    </nav>
`;

// Function to inject navigation
function loadNavigation() {
    const navContainer = document.getElementById('nav-container');
    if (navContainer) {
        navContainer.innerHTML = navigationHTML;
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Mobile dropdown toggle
document.addEventListener('DOMContentLoaded', function() {
    // Load navigation first
    loadNavigation();
    
    // Then set up dropdown functionality
    const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('nav');
        const toggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.getElementById('navLinks');
        
        if (nav && !nav.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
});