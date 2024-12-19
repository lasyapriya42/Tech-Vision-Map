// Event listener for the Home button
document.getElementById('home-btn').addEventListener('click', function () {
    // Show the welcome section
    document.querySelector('.welcome-section').style.display = 'flex';
    
    // Hide the interactive content
    document.getElementById('interactive-content').style.display = 'none';
});

// Event listener for the Technology button
document.getElementById('resources-btn').addEventListener('click', function () {
    // Hide the welcome section
    document.querySelector('.welcome-section').style.display = 'none';
    
    // Show the interactive content (i.e., the technologies grid)
    document.getElementById('interactive-content').style.display = 'block';
});