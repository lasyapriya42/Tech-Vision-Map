// Event listener for the Home button
document.getElementById('home-btn').addEventListener('click', function () {
    // Show the welcome section
    document.querySelector('.welcome-section').style.display = 'flex';
    
    // Hide the interactive content
    document.getElementById('interactive-content').style.display = 'none';
});

// Event listener for the Resources button
document.getElementById('resources-btn').addEventListener('click', function () {
    // Hide the welcome section
    document.querySelector('.welcome-section').style.display = 'none';
    
    // Show the interactive content
    document.getElementById('interactive-content').style.display = 'block';
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
