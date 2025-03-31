// display Data =>https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1

// .Movie Search => https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${sValue}

// .Movie Image => https://image.tmdb.org/t/p/w1280

let out = document.querySelector(".output")

let url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"


let movie = async () => {
    let api = await fetch(url)
    let res = await api.json()
    console.log(res);

    let { results } = res

    // console.log(results);
    out.innerHTML = ''
    results.forEach((v, i) => {
        // console.log(v);
        out.innerHTML += `<div class="box" onClick="info(this)">
            <img src="https://image.tmdb.org/t/p/w1280/${v.poster_path}" alt="">
            
            <h3 class="name"> ${v.original_title} </h3>
            <h3 class="date"> ${v.release_date}</h3>
        </div>`
    });




}

movie()




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

let more = document.querySelector("#more")

let page = 1

more.addEventListener("click" , ()=>{

   let more =   async () => {
        page++
            let api = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`)
            let res = await api.json()
            console.log(res);

            let { results } = res

        // console.log(results);
        // out.innerHTML = ''
            results.forEach((v, i) => {
            // console.log(v);
            out.innerHTML += `<div class="box" onClick="info(this)">
                <img src="https://image.tmdb.org/t/p/w1280/${v.poster_path}" alt="">
                
                <h3 class="name"> ${v.original_title} </h3>
                <h3 class="date"> ${v.release_date}</h3>
            </div>`
        });
    }
    more()
})


// let infoBox = document.querySelector(".info")
// function info(event) {

//     async () => {
//         let api = await fetch(url)
//         let res = await api.json()
//         console.log(res);
    
//         let { results } = res
//     }
//     infoBox.classList.add("active")
//     infoBox.innerHTML  = `<div class="img">
//             <img src="1.jpg" alt="">
//         </div>
//         <div class="text">
//             <h3 class="title"> moie title</h3>

//             <h3 class=".rew"> ✨reveiw </h3>

//             <h3 class=".rel"> realease date </h3>
            
//             <p class="des">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi aut amet adipisci architecto nam suscipit ex deserunt magnam modi, distinctio quia necessitatibus placeat nihil eum ducimus aspernatur accusantium animi.
//             </p>
//         </div>`
    

// }