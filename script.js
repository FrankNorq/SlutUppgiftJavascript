const nextWatchBox = document.querySelector(".boxNextWatch");
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
        console.log(data);
        return data.results; 
        
    } catch (err) {
        console.error('Fetch error:', err);
    }
}

function createMovies(data) {
   
    nextWatchBox.innerHTML = '';

    data.forEach(movie => {
        const divBox = document.createElement("div");
        const titleId = document.createElement("h4");
        const imgId = document.createElement("img");
        const scoreId = document.createElement("p");
        
        
        titleId.textContent = movie.title; 
        imgId.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; 
        scoreId.textContent = `Rating: ${movie.vote_average}`; 

        
        divBox.appendChild(titleId);
        divBox.appendChild(imgId);
        divBox.appendChild(scoreId);
        nextWatchBox.appendChild(divBox);
    });
}

fetchMovies('action') 
.then ((data)=>{
    createMovies(data)
})


