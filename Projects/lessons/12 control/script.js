// Задание 1

//const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
//console.log(numberOfFilms);

// Задание 2

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    ganers:[],
    privat:true,
};





const a = prompt('какой последний фильм вы смотрели?', ''),
    b = prompt('какую оценку вы ему поставите?', '');
    c = prompt('какой последний фильм вы смотрели?', ''),
    d = prompt('какую оценку вы ему поставите?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
