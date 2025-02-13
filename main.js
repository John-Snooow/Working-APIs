//ultilizando o fatch do o then

// fetch("http://localhost:3333/products")
// .then((response) => response.json())//pasndo a respota para jsons
// .then((data) => console.log(data))

//ultilizando o fatch com async/await
//faz a mesma coisa que o fatch .then, eu uso quando for uma função 
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
// fetchProductById("3")

const productName = document.getElementById("name")
const productPrice = document.getElementById("price")
const form = document.getElementsByTagName("form")

addEventListener("submit", async (event)=>{
    event.preventDefault()
    
    await fetch("http://localhost:3333/products",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //pegando o objeto e passando ele para texto 
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: productName.value,
            price: productPrice.value
        })
    })
    // await fetchProducts()
})