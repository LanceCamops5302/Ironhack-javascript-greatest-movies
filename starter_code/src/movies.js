/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    let copy = [...array];
  
    copy.sort((a,b)=>{
      if(a.year < b.year){
        return -1
      }
      else if (b.year < a.year){
        return 1
      }
      else if (a.title < b.title){
        return -1
      }
      else if (b.title < a.title){
        return 1
      }
      else () =>{
        return 0
      }
  })
  return copy
  }
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(anArray) {


    let SDrama = anArray.filter((movie)=>{
      return (movie.director == 'Steven Spielberg' && movie.genre.includes ('Drama'))
    })
  
    return SDrama.length
  }


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(order){

  let alph = [...order];

alph.sort(function (a, b){
  if (b.title < a.title){
    return 1
  }
  else if (a.title < b.title){
    return -1
  }
})
  let top = alph.map((eachMovie)=>{
    return eachMovie.title
  });
return top.splice(0,20)
};


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){

  if(array.length == 0){
    return 0;
  }

  let total = array.reduce( (a, c) =>{
    if(c.rate){
      return a + c.rate;
    }
    else{
      return a + 0;
    }
  }, 0);

  let avgRate = (total / array.length).toFixed(2);
  return Number(avgRate);


}

// Iteration 5: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(anArray){

  let dMovies= anArray.filter(function(movie){
      return movie.genre.includes ('Drama');
    });
  
    return dMovies.reduce((a, c) =>{
    return (a + c.rate);
  }, 0)
  
  }
  function ratesAvg(dMovies){
    return ((dramaMoviesRate(dMovies))/dMovies.length).toFixed(2)
  }
  

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(anArray){

  let minutes = [...anArray]





  return minutes
}



// BONUS Iteration: Best yearly rate average - Best yearly rate average
