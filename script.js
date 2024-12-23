const nextWatchBox = document.querySelector(".boxNextWatch");
const apiKey = '949ceccc803d4d64aa682d6ef42b2b36';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDljZWNjYzgwM2Q0ZDY0YWE2ODJkNmVmNDJiMmIzNiIsIm5iZiI6MTczNDU5ODU3MC4zODgsInN1YiI6IjY3NjNkZmFhMGU5ZGMzMjgyY2FiMDFkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lB5_11EDjMg71dU-U06hH2_edPZLUcIUuKmIt1DqwgA' 
    }
};

fetch(`https://api.themoviedb.org/3/authentication?api_key=${apiKey}`, options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));

async function fetchApi(params) {
    try {
        if (!response.ok) {
            throw new Error("Error with the network while fetching api");
            
        }
        
    } catch (error) {
        
    }
}


function createMovies() {
    array.forEach(element => {
        
    });
}