const nextWatchBox = document.querySelector(".boxNextWatch");
const actionButton = document.getElementById('actionButton');
const adventureButton = document.getElementById('adventureButton');
const animationButton = document.getElementById('animationButton');
const comedyButton = document.getElementById('comedyButton');
const crimeButton = document.getElementById('crimeButton');
const documentaryButton = document.getElementById('documentaryButton');
const dramaButton = document.getElementById('dramaButton');
const horrorButton = document.getElementById('horrorButton');
const musicButton = document.getElementById('musicButton');
const mysteryButton = document.getElementById('mysteryButton');
const romanceButton = document.getElementById('romanceButton');
const sciFiButton = document.getElementById('sciFiButton');
const tvMovieButton = document.getElementById('tvMovieButton');
const thrillerButton = document.getElementById('thrillerButton');
const warButton = document.getElementById('warButton');
const westernButton = document.getElementById('westernButton');
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
        // const titleId = document.createElement("h4");
        const imgId = document.createElement("img");
        const scoreId = document.createElement("p");
        
        
        // titleId.textContent = movie.title; 
        imgId.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; 
        scoreId.textContent = `Rating: ${movie.vote_average}`; 

        
        // divBox.appendChild(titleId);
        divBox.appendChild(scoreId);
        divBox.appendChild(imgId);
        nextWatchBox.appendChild(divBox);
    });
}

fetchMovies('action') 
.then ((data)=>{
    createMovies(data)
})


actionButton.addEventListener("click", function () {
    fetchMovies('action') 
.then ((data)=>{
    createMovies(data)
})
})
adventureButton.addEventListener("click", function () {
    fetchMovies('adventure') 
.then ((data)=>{
    createMovies(data)
})
})
animationButton.addEventListener("click", function () {
    fetchMovies('animation') 
.then ((data)=>{
    createMovies(data)
})
})
comedyButton.addEventListener("click", function () {
    fetchMovies('comedy') 
.then ((data)=>{
    createMovies(data)
})
})
crimeButton.addEventListener("click", function () {
    fetchMovies('crime') 
.then ((data)=>{
    createMovies(data)
})
})
documentaryButton.addEventListener("click", function () {
    fetchMovies('documentary') 
.then ((data)=>{
    createMovies(data)
})
})
dramaButton.addEventListener("click", function () {
    fetchMovies('drama') 
.then ((data)=>{
    createMovies(data)
})
})
horrorButton.addEventListener("click", function () {
    fetchMovies('horror') 
.then ((data)=>{
    createMovies(data)
})
})
musicButton.addEventListener("click", function () {
    fetchMovies('music') 
.then ((data)=>{
    createMovies(data)
})
})
mysteryButton.addEventListener("click", function () {
    fetchMovies('mystery') 
.then ((data)=>{
    createMovies(data)
})
})
romanceButton.addEventListener("click", function () {
    fetchMovies('romance') 
.then ((data)=>{
    createMovies(data)
})
})
sciFiButton.addEventListener("click", function () {
    fetchMovies('sciFi') 
.then ((data)=>{
    createMovies(data)
})
})
thrillerButton.addEventListener("click", function () {
    fetchMovies('thriller') 
.then ((data)=>{
    createMovies(data)
})
})
westernButton.addEventListener("click", function () {
    fetchMovies('western') 
.then ((data)=>{
    createMovies(data)
})
})
tvMovieButton.addEventListener("click", function () {
    fetchMovies('tvMovie') 
.then ((data)=>{
    createMovies(data)
})
})
warButton.addEventListener("click", function () {
    fetchMovies('war') 
.then ((data)=>{
    createMovies(data)
})
})
