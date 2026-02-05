let url = new URLSearchParams(window.location.search)
let searchvalue = url.get('q')
console.log(searchvalue)

fetch('https://dummyjson.com/products').then(res => res.json()).then(data => {
    data = data.products

    let filteredproducts = data.filter((product) => {
        return product.title.toLowerCase().includes(searchvalue)
    })

    renderproducts(filteredproducts)
})


let container = document.getElementById('products')
function renderproducts(products) {
    container.innerHTML = ''
    products.forEach((product) => {
        let div = document.createElement('div')
        let id = document.createElement('p')
        let title = document.createElement('p')
        let desc = document.createElement('p')
        let category = document.createElement('p')
        let price = document.createElement('p')
        let img = document.createElement('img')

        img.src = product.thumbnail
        id.innerText = product.id
        title.innerText = product.title
        category.innerText = product.category
        desc.innerText = product.description
        price.innerText = product.price
        console.log
        div.append(img)
        div.append(id)
        div.append(title)
        div.append(desc)
        div.append(category)
        div.append(price)

        container.append(div)
    });
}
