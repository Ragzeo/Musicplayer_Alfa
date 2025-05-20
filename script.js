const contenedorCanciones = document.getElementById('playlistid')

function CrearHTMLCancion (loquesea) {
    const li = document.createElement('div')
    li.setAttribute("class", "songlist_songs")
    li.innerHTML = `
            <img src=${loquesea.image.url} alt="" id="song_1_cover">
            <h3 id="song_1_name">${loquesea.title}</h3>
            <p id="song_1_artist">${loquesea.author}</p>
            <audio controls> <source src="${loquesea.audio.url}"</audio>
    `
    return li
}

// Make a request for a user with a given ID
axios.get('https://api.institutoalfa.org/api/songs/')
  .then(function (response) {
    // handle success
    response.data.songs.map(function (loquesea) {
        contenedorCanciones.appendChild(CrearHTMLCancion(loquesea))
    })
  })

// axios.get('https://api.institutoalfa.org/api/songs')
//     .then(function (response) {
//         console.log(response.data.songs);
//         response.data.songs.map(function(Todalamusica, index){
//     } document.getElementById("song_1").innerHTML = (Todalamusica.title))
// } )