let list = document.querySelector("#list")
let productList = document.querySelector(".items")

let data = async () => {
    let catData = await fetch('https://dummyjson.com/products/category-list')


    let catList = await catData.json()

    console.log(catList);

    catList.forEach((v, i) => {
        // console.log(i);

        list.innerHTML += `<li onClick="item('${v}')"> ${v} </li>`
    });


}
data()

let item = async (value = '') => {
    // console.log(value);

    let apiUrl;
    if (value === '') {
        apiUrl = (`https://dummyjson.com/products`)
        // console.log(apiUrl);

    }

    else {
        apiUrl = (`https://dummyjson.com/products/category/${value}`)
        // console.log(apiUrl);


    }
    let Proresponse = await fetch(apiUrl)

    let dataPro = await Proresponse.json()
    // console.log(data);


    let { products } = dataPro
    // console.log(products);
    productList.innerHTML = ''

    products.forEach((v, i) => {
        // console.log(v);
        
        // products.innerHTML = ''

        // console.log(v);
        productList.innerHTML += `<div class="box">
                            <img src="${v.thumbnail}" alt="">
                            <h3>${v.title}</h3>
                            <h3>${v.price}$</h3>
                            <h3>${v.brand}</h3>
                        </div>`

    })

}
item()


