const nextWatchBox = document.querySelector(".boxNextWatch");
const genreButtons = document.querySelectorAll('#genreButtons button');
const searchInput = document.querySelector('.searchInput');
const searchButton = document.querySelector('.searchButton');
const modal = document.getElementById('movieModal');
const closeButton = document.querySelector('.close-button');
const apiKey = '949ceccc803d4d64aa682d6ef42b2b36';
const genreMap = {
    action: 28,
    adventure: 12,
    animation: 16,
    comedy: 35,
    crime: 80,
    documentary: 99,
    drama: 18,
    horror: 27,
    music: 10402,
    mystery: 9648,
    romance: 10749,
    sciFi: 878,
    tvMovie: 10770,
    thriller: 53,
    war: 10752,
    western: 37
};
let allMovies = [];

async function fetchMovies(genre) {
    const genreId = genreMap[genre]; 
    
    if (!genreId) {
        console.error('Genre not found:', genre);
        return; 
    }
    
    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        allMovies = data.results; 
        console.log(data);
        return data.results; 
        
    } catch (err) {
        console.error('Fetch error:', err);
    }
}
genreButtons.forEach(button => {
    button.addEventListener("click", function () {
        const genre = this.getAttribute('data-genre'); 
        fetchMovies(genre)
            .then((data) => {
                createMovies(data);
            });
    });
});

function createMovies(data) {
    
    nextWatchBox.innerHTML = '';
    
    data.forEach(movie => {
        const divBox = document.createElement("div");
        const imgId = document.createElement("img");
        const scoreId = document.createElement("p");
        const viewMoreButton = document.createElement("button");
        
        
        
        viewMoreButton.innerText = "Read about the movie";
        imgId.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; 
        imgId.alt= `${movie.title}`;
        scoreId.textContent = ` IMDB ${movie.vote_average.toFixed(1)}`; 
        
        
        viewMoreButton.addEventListener('click', () => {
            document.getElementById('modalTitle').textContent = movie.title;
            document.getElementById('modalOverview').textContent = `${movie.overview}`;
            document.getElementById('modalReleaseDate').textContent = movie.release_date;
            document.getElementById('modalRating').textContent = ` IMDB ${movie.vote_average} `;
            document.getElementById('modalPopularity').textContent = `Total views ${movie.popularity}`;
        
            modal.style.display = 'block'; 
        });
        
        divBox.appendChild(scoreId);
        divBox.appendChild(imgId);
        divBox.appendChild(viewMoreButton);
        nextWatchBox.appendChild(divBox);
    });
}
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
searchInput.addEventListener('input', function() {
    const filterText = searchInput.value.toLowerCase(); 
    const movieElements = nextWatchBox.children; 

    Array.from(movieElements).forEach((movieElement, index) => {
        const movieTitle = allMovies[index].title.toLowerCase(); 
        if (movieTitle.includes(filterText)) {
            movieElement.style.display = ''; 
        } else {
            movieElement.style.display = 'none'; 
        }
    });
});




window.onload = function() {
    document.getElementById('actionButton').click();
};
