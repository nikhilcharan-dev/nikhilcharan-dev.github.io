const API_KEY = '';
const BASE_URL = '';
const POSTER_BASE_URL = ''; // is api provides poster_path

const getMovies = async (genre) => {
    try {
        const url = `${BASE_URL}?api_key=${API_KEY}&with_genres=${genre}`;
        const respone = await fetch(url);
        // check if promise is brken
        const data = await respone.json();
        return data.results; // returns results
    }catch(e) {
        console.error('Error during api call: ', e);
        return [];
    }
}


document.getElementById('generateBtn').addEventListener('click', function() { // if got data make fn async don't forget
    const searchInput = document.getElementById('searchInput').value;
    const recommendationsContainer = document.getElementById('recommendations');

    // Clearing previous results
    recommendationsContainer.innerHTML = '';

    // for testing used
    const movies = [
        { title: 'The Shawshank Redemption', poster: 'https://via.placeholder.com/150', year: 1994 },
        { title: 'The Godfather', poster: 'https://via.placeholder.com/150', year: 1972 },
        { title: 'Inception', poster: 'https://via.placeholder.com/150', year: 2010 }
    ];

    // next step to call the api that returns the data
    // const movies = await getMovies(searchInput);

    
    // Filtering movies
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()));
    
    /** (checking data received)
     * if(movies.size() == 0) {
     *      recommendationsContainer.innerHTML = '<p>No movies found for the selected genre.</p>';
     *      return;   
     * }
     */

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
