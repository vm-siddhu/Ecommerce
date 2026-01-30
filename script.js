let container = document.getElementById('products')

let data
async function fetchingData() {
    await fetch('https://dummyjson.com/products').then((resp) => resp.json()).then((a) => {
        data = a.products
        renderproducts(data)
    })
}

fetchingData()

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




document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()
    let searchvalue = document.getElementById('search').value.toLowerCase()


    window.location.href = `search.html?q=${searchvalue}`

    let filteredproducts = data.filter((product) => {
            return product.title.toLowerCase().includes(searchvalue)
    })
    
    renderproducts(filteredproducts)
})

