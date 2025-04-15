// display Data =>https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1

// .Movie Search => https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${sValue}

// .Movie Image => https://image.tmdb.org/t/p/w1280

let out = document.querySelector(".output")

let url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

let more = document.querySelector("#more")

let page = 1


let movie = async () => {

    
    let api = await fetch(url)
    let res = await api.json()
    console.log(res);

    let { results } = res

    // console.log(results);
    out.innerHTML = ''
    results.forEach((v, i) => {
        // console.log(v);


        out.innerHTML += `<div class="box" >
            <img src="https://image.tmdb.org/t/p/w1280/${v.poster_path}" alt="">
            
            <h3 class="name"> ${v.original_title} </h3>
            <h3 class="date"> ${v.release_date}</h3>
        </div>`
    });




}

movie()

let overlay = document.querySelector(".overlay")
let infoBox = document.querySelector(".info")

let sValue = document.querySelector("#sText")

sValue.addEventListener("keyup", () => {


    let searh = async () => {

        if (sValue.value !== '') {
            url = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${sValue.value}`
        }
        else {
            url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
        }
        movie()

    }
    searh()
})



more.addEventListener("click", () => {

    let more = async () => {
        page++
        let api = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`)
        let res = await api.json()
        console.log(res);

        let { results } = res

        // console.log(results);
        // out.innerHTML = ''
        results.forEach((v, i) => {
            // console.log(v);


            out.innerHTML += `<div class="box">
                <img src="https://image.tmdb.org/t/p/w1280/${v.poster_path}" alt="">
                
                <h3 class="name"> ${v.original_title} </h3>
                <h3 class="date"> ${v.release_date}</h3>
            </div>`
        });
    }
    more()
})

// function infoFun(a, b, c, d, e) {


//     console.log(a, b, c, d, e );

//     overlay.classList.add("active")
//     infoBox.classList.add("active")
//     infoBox.innerHTML = `<div class="img">
//             <img src="https://image.tmdb.org/t/p/w1280/${e}" alt="">
//         </div>
//         <div class="text">
//             <h3 class="title">${a}</h3>

//             <h3 class=".rew"> Reviews - ${ Math.floor(b)}✨ </h3>

//             <h3 class=".rel"> ${d} </h3>
//              <h3 class=".rel"> More Images </h3>
//             <img src="https://image.tmdb.org/t/p/w1280/${c}" alt="">
            
//         </div>`

// }

// overlay.addEventListener("click", () => {
//     overlay.classList.remove("active")
//     infoBox.classList.remove("active")
// })

