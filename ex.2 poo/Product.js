class Product {
    constructor(name, description, price){
        this.name = name
        this.description = description 
        this.price = price
        this.inStock = 0
}

addToStock(quantity) {
    this.inStock += quantity
    console.log ('
        Nome do produto: ${this.name}
        Descrição do produto:: ${this.description}
        Valor do produto: R$${this.price.toFixed(2)}
        Quantidade do produto: ${this.inStock} 
    ')
}

calculateDiscoun(discount) {
    this.price = this.price (discount * this.price / 100)
    console.log ('
        ===============================
        Desconto no produto: ${discount}%
        Novo valor do produto: ${this.price.toFixed(2)}
       ')
    }
}

const product1 = new Product('Biquíni', 'Biquíni preto', 1000)
product1.addToStock(10)
product1.calculateDiscount(5)
