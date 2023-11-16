const contenedor = document.getElementById('character-list');
const prev_page = document.getElementById('prev-page');
const next_page = document.getElementById('next-page');
let btnNext;
let btnPrev;
let urlNext = '';
let urlPrev = '';
let url;

url = 'https://rickandmortyapi.com/api/character/?page=';


fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error('La solicitud ha fallado');
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        data.results.forEach((personaje => {
            let templatePersonajes = `<li id="contenedor" class="img">
            <img src=${personaje.image}>
            <h3>${personaje.name}</h3>
            <h2>${personaje.species}</h3>
            </li>`;
            contenedor.innerHTML += templatePersonajes
            btnNext = data.info.next;
            btnPrev = data.info.prev;
            console.log(btnNext);
        }));
    })
    .catch((error) => {
        character_list.innerText = 'Error';

    });

next_page.addEventListener('click', () => {
    urlNext = btnNext;
    console.log(urlNext);
    fetch(urlNext)
        .then((response) => {
            if (!response.ok) {
                throw new Error('La solicitud ha fallado');
            }
            return response.json();
            console.log(urlNext);
        })
        .then((data1) => {
            console.log(data1);
            contenedor.innerHTML = '';
            data1.results.forEach((personaje => {
                let templatePersonajes = `<li id="contenedor"class="img">
                <img id="img" src=${personaje.image}>
                <h3 id="h3">${personaje.name}</h3>
                <h2 id="h2">${personaje.species}</h3>
                </li>`;
                contenedor.innerHTML += templatePersonajes
                console.log(personaje.image);
                btnNext = data1.info.next;
                btnPrev = data1.info.prev;
                //console.log(btnNext);
                urlNext = btnNext;
            }));
        })
        .catch((error) => {
            character_list.innerText = 'Error';
        });
})
prev_page.addEventListener('click', () => {
    urlPrev = btnPrev;
    console.log(urlPrev);
    if (urlPrev == null) {
        urlPrev = url;
    } else {
        urlPrev = btnPrev;
    }
    console.log(url);

    fetch(urlPrev)
        .then((response) => {
            if (!response.ok) {
                throw new Error('La solicitud ha fallado');
            }
            return response.json();
            console.log(urlPrev);
        })
        .then((data1) => {
            console.log(data1);
            contenedor.innerHTML = '';
            data1.results.forEach((personaje => {
                let templatePersonajes = `<li id="contenedor"class="img">
                <img id="img" src=${personaje.image}>
                <h3 id="h3">${personaje.name}</h3>
                <h2 id="h2">${personaje.species}</h3>
                </li>`;
                contenedor.innerHTML += templatePersonajes
                console.log(personaje.image);
                btnNext = data1.info.next;
                btnPrev = data1.info.prev;

                urlPrev = btnPrev;
            }));
        })
        .catch((error) => {
            character_list.innerText = 'Error';
        });
})