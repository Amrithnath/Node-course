//object property shorthand
const name = "Amrith"
const age = "24"

const user={
    name,
    age,
    location:"Bangalore"
}

console.log(user)

//opbjet destructuring

const product={
    label:'red notebook',
    price:3,
    stock:201,
    salePrice:undefined,
    rating:4.2
}
const {label:productlabel,stock,rating= 5}=product
console.log(productlabel)
console.log(stock)
console.log(rating)
const transaction=(type,{label,stock})=>{
    console.log(type,label,stock)
}
transaction('order',product)