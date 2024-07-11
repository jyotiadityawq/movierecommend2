document.getElementById('movie-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const language = document.getElementById('language').value;
    const genre = document.getElementById('genre').value;
    const apiKey = 'Plsenteryouapikey (key not entered due to security regions)';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${language}&with_genres=${genre}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const movieList = document.getElementById('movie-list');
            movieList.innerHTML = '';
            
            data.results.forEach(movie => {
                const movieItem = document.createElement('div');
                movieItem.className = 'movie-item';
                
                const movieTitle = document.createElement('h3');
                movieTitle.textContent = movie.title;
                
                const moviePoster = document.createElement('img');
                moviePoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                moviePoster.alt = movie.title;
                
                movieItem.appendChild(moviePoster);
                movieItem.appendChild(movieTitle);
                movieList.appendChild(movieItem);
            });
        })
        .catch(error => {
            console.error('Error fetching movie data:', error);
        });
});
