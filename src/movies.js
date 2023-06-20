// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((mapped) => mapped.director);
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }

    let dramaMovies = moviesArray.filter((movies) => {
        return (movies.genre.includes("Drama") && movies.director === "Steven Spielberg")
    })
    return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }

    const averageScore = moviesArray.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    const average = averageScore / moviesArray.length;



    return average;
}

const averageScore = scoresAverage(moviesArray);
console.log(averageScore);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const drama = moviesArray.filter(movie => movie.genre === "Drama");

    if (drama.length === 0) {
        return 0;
    }

    const sumScore = drama.reduce((acumulador, movie) => acumulador + movie.score, 0);
    const average = sumScore / drama.length;

    return average;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let sortedMovies = moviesArray.map((movie) => {
        return movie
    })

    sortedMovies.sort((opcion1, opcion2) => {
        if (opcion1.year !== opcion2.year) {
            return opcion1.year - opcion2.year;
        } else {
            return opcion1.title.localeCompare(opcion2.title)
        }

    });

    return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const byOrder = moviesArray.slice().map(movie => movie.title).sort();
    const firsTitles = byOrder.slice(0, 20)

    return firsTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
