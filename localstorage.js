
        const insaneMovies = JSON.parse(localStorage.getItem('insaneMovies')) || [];
        const greatMovies = JSON.parse(localStorage.getItem('greatMovies')) || [];
        const watchLaterMovies = JSON.parse(localStorage.getItem('watchLaterMovies')) || [];

        const insaneMovieSection = document.querySelector('.insaneMovie');
        const greatMovieSection = document.querySelector('.greatmovie');
        const watchLaterSection = document.querySelector('.watchLater');
        


        insaneMovies.forEach((movie, index) => {
            const favMovieBox = document.createElement("div");
            const imgId = document.createElement("img");
            const deleteButton = document.createElement("button");

            imgId.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; 
            imgId.alt= `${movie.title}`;
            deleteButton.innerText = "Delete from my toprated"


            deleteButton.addEventListener("click", function () {
                
                const updatedInsaneMovies = JSON.parse(localStorage.getItem('insaneMovies')) || [];
                updatedInsaneMovies.splice(index, 1); 
                localStorage.setItem('updatedInsaneMovies', JSON.stringify(updatedInsaneMovies)); 
        
                favMovieBox.remove(); 
        });
           
            insaneMovieSection.appendChild(favMovieBox)
            favMovieBox.appendChild(imgId)
            favMovieBox.appendChild(deleteButton)
            
        });
        greatMovies.forEach((movie, index ) => {
            const favMovieBox = document.createElement("div");
            const imgId = document.createElement("img");
            const deleteButton = document.createElement("button");
          

            imgId.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; 
            imgId.alt= `${movie.title}`;
            deleteButton.innerText = "Delete from my toprated"


            deleteButton.addEventListener("click", function () {
                
                const updatedGreatMovies = JSON.parse(localStorage.getItem('greatMovies')) || [];
                updatedGreatMovies.splice(index, 1); 
                localStorage.setItem('updatedGreatMovies', JSON.stringify(updatedGreatMovies)); 
        
                favMovieBox.remove(); 
        });
            greatMovieSection.appendChild(favMovieBox)
            favMovieBox.appendChild(imgId)
            favMovieBox.appendChild(deleteButton)
           
        });
        watchLaterMovies.forEach((movie, index ) => {
            const favMovieBox = document.createElement("div");
            const imgId = document.createElement("img");
            const deleteButton = document.createElement("button");
           

            imgId.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; 
            imgId.alt= `${movie.title}`;
            deleteButton.innerText = "Delete from my nextwatch"

            deleteButton.addEventListener("click", function () {
                
                const updatedWatchLaterMovies = JSON.parse(localStorage.getItem('watchLaterMovies')) || [];
                updatedWatchLaterMovies.splice(index, 1); 
                localStorage.setItem('watchLaterMovies', JSON.stringify(updatedWatchLaterMovies)); 
        
                favMovieBox.remove(); 
            });



            watchLaterSection.appendChild(favMovieBox)
            favMovieBox.appendChild(imgId)
            favMovieBox.appendChild(deleteButton)
            
        });


