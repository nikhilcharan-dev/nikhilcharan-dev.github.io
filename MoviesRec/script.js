document.getElementById('generateBtn').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value;
    const recommendationsContainer = document.getElementById('recommendations');

    // Clearing previous results
    recommendationsContainer.innerHTML = '';

    // Example movies data (you can replace this with real data fetching logic)
    const movies = [
        { title: 'The Shawshank Redemption', poster: 'https://via.placeholder.com/150', year: 1994 },
        { title: 'The Godfather', poster: 'https://via.placeholder.com/150', year: 1972 },
        { title: 'Inception', poster: 'https://via.placeholder.com/150', year: 2010 }
    ];

    // Filtering movies
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()));

    // Displaying movie cards
    filteredMovies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.year}</p>
        `;

        recommendationsContainer.appendChild(card);
    });

    // No filtered movies Exception
    if (filteredMovies.length === 0) {
        recommendationsContainer.innerHTML = '<p>No movies found</p>';
    }
});
