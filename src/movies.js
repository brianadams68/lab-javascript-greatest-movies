// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((mapped) => mapped.director);
};


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }

    let dramaMovies = moviesArray.filter((eachMovie) => {
        return (eachMovie.genre.includes("Drama") && eachMovie.director === "Steven Spielberg")
    })
    return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0;
    }

    let totalScore = moviesArray.reduce((acc, elem) => {
        if (elem.score === undefined) {
            return acc;
        } else {
            return acc + elem.score;
        }
    }, 0);

    let avg = totalScore / moviesArray.length;
    let digiScore = avg.toFixed(2);
    let twoDigiScore = parseFloat(digiScore);
    return twoDigiScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaMovies = moviesArray.filter((eachMovie) => {
        return eachMovie.genre.includes('Drama')
    })
    if (!dramaMovies.length) {
        return 0
    }
    let avgDramas = dramaMovies.reduce((acc, eachMovie) => {
        return acc + eachMovie.score
    }, 0)
    return Number.parseFloat((avgDramas / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedByYear = moviesArray.map((movie) => {
        return movie
    })

    sortedByYear.sort((movie1, movie2) => {
        if (movie1.year > movie2.year) {
            return 1
        } else if (movie1.year < movie2.year) {
            return -1
        } else if (movie1.title > movie2.title) {
            return 1
        } else if (movie1.title < movie2.title) {
            return -1
        }
    })
    return sortedByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let movieOrder = moviesArray.map((movie) => {
        return movie.title
    })
    movieOrder.sort()
    if (movieOrder.length > 20) {
        return movieOrder.slice(0, 20)
    }
    return movieOrder
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
