// Navigation loader and handler
(function() {
    // Configure the navigation URL here
    // You can set this as a global variable before loading this script
    const NAV_URL = window.MC_NAV_URL || 'https://uscadv.github.io/GlobalCSS/sidebar-nav.html';
    
    // Load the navigation HTML
    function loadNavigation() {
        fetch(NAV_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                // Insert navigation at the beginning of body
                document.body.insertAdjacentHTML('afterbegin', html);
                
                // Set active state based on current page
                setActiveNavLink();
                
                // Initialize mobile nav handlers
                initializeMobileNav();
            })
            .catch(error => {
                console.error('Error loading navigation:', error);
                console.error('Attempted to load from:', NAV_URL);
            });
    }
    
    // Set active class on current page link
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop();
        
        // Find all nav links
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            // Check if this link matches current page
            if (href === currentPage) {
                link.classList.add('active');
            }
        });
    }
    
    // Initialize mobile navigation handlers
    function initializeMobileNav() {
        // Close mobile menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeMobileNav();
            }
        });
    }
    
    // Load navigation when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadNavigation);
    } else {
        loadNavigation();
    }
})();

// Mobile navigation functions (global scope for onclick handlers)
function toggleMobileNav() {
    const nav = document.getElementById('mobileNav');
    const overlay = document.getElementById('mobileNavOverlay');
    const toggle = document.getElementById('mobileMenuToggle');
    
    if (!nav || !overlay || !toggle) return;
    
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    toggle.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMobileNav() {
    const nav = document.getElementById('mobileNav');
    const overlay = document.getElementById('mobileNavOverlay');
    const toggle = document.getElementById('mobileMenuToggle');
    
    if (!nav || !overlay || !toggle) return;
    
    nav.classList.remove('active');
    overlay.classList.remove('active');
    toggle.classList.remove('active');
    document.body.style.overflow = '';
}