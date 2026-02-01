const productContainer = document.querySelector('.product')

 export const renderItem = function(poducts){
    productContainer.innerHTML =""

    poducts.forEach(product=>{
        productContainer.innerHTML +=  `
         <div class="product">
            <h3>${product.title}</h3>
            <p>${product.price}</p>
            <button data-id="${product.id}">купити</button>
        </div>
        `
    })
}