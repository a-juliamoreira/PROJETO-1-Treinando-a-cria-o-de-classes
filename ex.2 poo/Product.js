class Product {
    constructor(name, description, price, inStock){
        this.name = name
        this.description = description 
        this.price = price
        this.inStock = 0
}


addToStock(quantity) {
    this.inStock += quantity
}

calculateDiscoun(discountPercentage) {
    const valorDesconto = (this.price * discountPercentage) / 100
    return this.price - valorDesconto
    }
}

const product1 = new Product('Biquíni', 'Biquíni preto', 1000)
console.log(product1)
product1.addToStock(10)
console.log('Quantidade no estoque:', product1.inStock)

const descontoPrice = product1.calculateDiscoun(10)
console.log('Preço com desconto:', descontoPrice)