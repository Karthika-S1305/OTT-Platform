document.addEventListener('DOMContentLoaded', function() {
    const moviesData = [
        { 
            title: 'The Shawshank Redemption',
            image: 'C:/Users/admin/Downloads/The_shawshank.jpg',
            description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
            genre: 'Drama',
            releaseYear: 1994,
            rating: 9.3
        },
        { 
            title: 'The Godfather',
            image: 'C:/Users/admin/Downloads/The_godfather.jpg',
            description: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
            genre: 'Crime, Drama',
            releaseYear: 1972,
            rating: 9.2
        },
        { 
            title: 'The Dark Knight',
            image: 'C:/Users/admin/Downloads/The_Dark_Knight.jpg',
            description: 'When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
            genre: 'Action, Crime, Drama',
            releaseYear: 2008,
            rating: 9.0
        },
        // Add more movie objects as needed
    ];

    const movieListContainer = document.querySelector('.movie-list');

    moviesData.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const image = document.createElement('img');
        image.src = movie.image;
        image.alt = movie.title;

        const title = document.createElement('h3');
        title.textContent = movie.title;

        const description = document.createElement('p');
        description.textContent = movie.description;

        const genre = document.createElement('p');
        genre.textContent = 'Genre: ' + movie.genre;

        const releaseYear = document.createElement('p');
        releaseYear.textContent = 'Release Year: ' + movie.releaseYear;

        const rating = document.createElement('p');
        rating.textContent = 'Rating: ' + movie.rating;

        const movieInfo = document.createElement('div');
        movieInfo.classList.add('movie-info');
        movieInfo.appendChild(title);
        movieInfo.appendChild(description);
        movieInfo.appendChild(genre);
        movieInfo.appendChild(releaseYear);
        movieInfo.appendChild(rating);

        movieCard.appendChild(image);
        movieCard.appendChild(movieInfo);

        movieListContainer.appendChild(movieCard);
    });
});
