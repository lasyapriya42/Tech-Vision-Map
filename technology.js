// Event listener for the Home button
document.getElementById('home-btn').addEventListener('click', function () {
    // Redirect to the homepage
    window.location.href = 'index.html';
});

// Event listener for the Technology button
document.getElementById('resources-btn').addEventListener('click', function () {
    // Redirect to the technology page (it will be the same since you're already on the page)
    window.location.href = 'technology.html';
});

// Search functionality
document.getElementById('search-bar').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const blocks = document.querySelectorAll('.block');
    
    blocks.forEach(block => {
        if (block.textContent.toLowerCase().includes(query)) {
            block.style.display = 'block'; // Show matching blocks
        } else {
            block.style.display = 'none'; // Hide non-matching blocks
        }
    });
});

// Add event listeners to all blocks
const blocks = document.querySelectorAll('.block');
blocks.forEach(block => {
    block.addEventListener('click', function () {
        const page = block.getAttribute('data-page');
        window.location.href = page; // Redirect to the corresponding page
    });
});
