let options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2a18e8057cmsh19a413299ca09e2p173a8fjsn0dee202cefb7',
        'X-RapidAPI-Host': 'most-popular-movies-right-now-daily-update.p.rapidapi.com'
    }
};

async function getMovieData() {
    let response = await fetch('https://most-popular-movies-right-now-daily-update.p.rapidapi.com/', options);
    let data = await response.json();
    render(data);
}

getMovieData()

function render(data) {
    let table = `<tr>
  <th>id</th>
  <th>title</th>
  <th>url</th>
  <th>img</th>
  <th>year</th>
  <th>starring</th>
  <th>directedBy</th>
  </tr>`;

    for (let key in data) {
        table += `<tr>  
          <td>${data[key].id}</td>
          <td>${data[key].title}</td>
          <td><a href="${data[key].url}" target="_blank">${data[key].url}</a></td> 
          <td><img src=${data[key].img}></td>
          <td>${data[key].year}</td>
          <td>${data[key].starring}</td>
          <td>${data[key].directedBy}</td>
          </tr>`
    }
    document.getElementById("MovieAPI").innerHTML = table;
}





// let options = {
//     method: 'GET',
//     params: {s: 'jaws'},
//     headers: {
//       'X-RapidAPI-Key': '2a18e8057cmsh19a413299ca09e2p173a8fjsn0dee202cefb7',
//       'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
//     }
//   };

// async function getMovieData() {
//     let response = await fetch('https://mdblist.p.rapidapi.com/', options);
//     let data = await response.json();
//     render(data);
// }

// getMovieData()

// function render(data) {
//     let table = `<tr>
//   <th>title</th>
//   <th>year</th>
//   <th>released</th>
//   <th>description</th>
//   <th>runtime</th>
//   <th>score</th>
//   <th>score_average</th>
//   <th>imdbid</th>
//   <th>traktid</th>
//   <th>tmdbid</th>
//   <th>type</th>
//   <th>ratings</th>
//   <th>streams</th>
//   <th>watch_providers</th>
//   <th>keywords</th>
//   <th>language</th>
//   <th>spoken_language</th>
//   <th>country</th>
//   <th>certification</th>
//   <th>commonsense</th>
//   <th>age_rating</th>
//   <th>status</th>
//   <th>trailer</th>
//   <th>poster</th>
//   <th>backdrop</th>
//   <th>response</th>
//   <th>apiused</th>
//   </tr>`;

//     for (let key in data) {
//         table += `<tr>
//       <td>${data[key].title}</td>
//       <td>${data[key].year}</td>
//       <td>${data[key].released}</td>
//       <td>${data[key].description}</td>
//       <td>${data[key].runtime}</td>
//       <td>${data[key].score}</td>
//       <td>${data[key].score_average}</td>
//       <td>${data[key].imdbid}</td>
//       <td>${data[key].traktid}</td>
//       <td>${data[key].tmdbid}</td>
//       <td>${data[key].type}</td>
//       <td>${data[key].ratings}</td>
//       <td>${data[key].streams}</td>
//       <td>${data[key].watch_providers}</td>
//       <td>${data[key].keywords}</td>
//       <td>${data[key].language}</td>
//       <td>${data[key].spoken_language}</td>
//       <td>${data[key].country}</td>
//       <td>${data[key].certification}</td>
//       <td>${data[key].commonsense}</td>
//       <td>${data[key].age_rating}</td>
//       <td>${data[key].status}</td>
// <td><a href="${data[key].trailer}" target="_blank">${data[key].trailer}</a></td> 
//       <td><img src=${data[key].Poster}></td> 
//       <td><img src=${data[key].backdrop}></td>  
//       <td>${data[key].response}</td>
//       <td>${data[key].apiused}</td>
//       </tr>`
//     }
//     document.getElementById("MovieAPI").innerHTML = table;
// }