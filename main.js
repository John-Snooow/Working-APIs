//ultilizando o fatch do o then

// fetch("http://localhost:3333/products")
// .then((response) => response.json())//pasndo a respota para jsons
// .then((data) => console.log(data))

//ultilizando o fatch com async/await
//faz a mesma coisa que o fatch .then
async function fetchProducts() {
    const response = await fetch("http://localhost:3333/products")
    const data = await response.json()
    console.log(data)
}

//Temos aqui uma função que esta buscando por um produto especifico 
async function fetchProductById(id){
    const response = await fetch(`http://localhost:3333/products/${id}`)
    const data = await response.json()
    console.log(data)
}
// fetchProducts()
fetchProductById("3")