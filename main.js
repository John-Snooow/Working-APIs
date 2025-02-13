fetch("http://localhost:3333/products")
.then((response) => response.json())//pasndo a respota para jsons
.then((data) => console.log(data))