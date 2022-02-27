const api_key = 'api_key=df4826d559079375eb6f0e70eb993e2d';
const base_url = 'https://api.themoviedb.org/3';
const api_url = base_url + '/discover/movie?sort_by=popularity.desc&'
+ api_key;
const img_url = 'https://image.tmdb.org/t/p/w500';
const main = document.getElementById('main');
const form = document.getElementById('form');

// getMovies(api_url);

function getMovies(url) {
    const movieResponse = fetch(url);
    movieResponse.then(response => {
        return response.json();
}).then(results => {
  console.log(results.results);
  showMovies(results.results);
});
}
getMovies(api_url);
function showMovies(data) {

    
//console.log(data);
main.innerHTML = '';

data.forEach(movie => {
    //const {title, poster_path, vote_average, overview} = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML += `
        <img src="${img_url + movie.poster_path}" alt="${movie.title}">
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <span class="${getColor(movie.vote_average)}">${movie.vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${movie.overview}
            </div>
        `

        main.appendChild(movieElement);
    })
}

function getColor(vote) {
    if(vote>=8) {
        return 'green'
    } else if(vote>=5) {
        return 'orange'
    } else {
        return 'red'
    }
}
