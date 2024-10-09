
// Smooth Scroll for Navigation Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Button interactions for "View Menu" and "Order Now"
document.querySelector('.btn').addEventListener('click', () => {
    window.location.href = '#exploreMenu';  // Scroll to Explore Menu section
});

document.querySelector('.btn2').addEventListener('click', () => {
    alert('Taking you to the order page!');
    // You can redirect to the order page here.
});

// Redeem Gift Modal interaction
document.querySelector('.custom-button[data-target="#exampleModal"]').addEventListener('click', () => {
    alert('Congratulations! You have redeemed your gift.');
});

// Adding a hover effect to menu items
document.querySelectorAll('.menu-item-card shadow p-3 mb-3').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = '0.3s';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

// Social Media Icon Hover Effect
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.color = '#ffba00';  // Change to a highlighted color
    });
    icon.addEventListener('mouseout', () => {
        icon.style.color = '#d0b200';  // Revert to original color
    });
});
