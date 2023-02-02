//Books
{
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2a18e8057cmsh19a413299ca09e2p173a8fjsn0dee202cefb7',
    'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
  }
}

async function getData() {
  let response = await fetch('https://hapi-books.p.rapidapi.com/month/2022/3', options)
  let data = await response.json();
  render(data);
}
getData()

function render(data) {
  let table = `<tr>
  <th>book_id</th>
  <th>position</th>
  <th>cover</th>
  <th>rating</th>
  <th>url</th>
  </tr>`;

  for (let key in data) {
    table += `<tr>  
      <td>${data[key].book_id}</td>
      <td>${data[key].position}</td>
      <td><img src=${data[key].cover}></td> 
      <td>${data[key].rating}</td>
      <td><a href="${data[key].url}" target="_blank">${data[key].url}</a></td> 
      </tr>`
  }
  document.getElementById("BookAPI").innerHTML = table;
}
}
//movies
{
let options= {
  method: 'GET',
  headers: {
      'X-RapidAPI-Key': '2a18e8057cmsh19a413299ca09e2p173a8fjsn0dee202cefb7',
      'X-RapidAPI-Host': 'most-popular-movies-right-now-daily-update.p.rapidapi.com'
  }
}

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
}
