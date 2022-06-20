const socket = io()


fetch('/req').then(r=>r.json()).then(user=>{

    socket.emit('createCart')

    let imgDiv = document.getElementById('img')
    let img = document.createElement('img')
    img.src = user.file
    imgDiv.append(img)
    let nameDiv = document.getElementById('name')
    let name = document.createElement('p')
    name.innerHTML = `Hello ${user.name}`
    nameDiv.append(name)
})


socket.on('products',data=>{
    let products = data.payload
    let productContainer = document.getElementById('productContainer')
    
    products.forEach(product => {
        let card = document.createElement('div')
        card.id = 'card'
        let img = document.createElement('img')
        img.src = product.image
        let name = document.createElement('h2')
        name.innerHTML = product.name
        let price = document.createElement('p')
        price.innerHTML = product.price
        let btn = document.createElement('button')
        btn.id = product.code
        btn.innerHTML = 'Add to cart'

        btn.addEventListener('click',()=>{
            socket.emit('addProductToCart',product._id)
        })

        card.append(img)
        card.append(name)
        card.append(price)
        card.append(btn)
        productContainer.append(card)
    });
})


socket.on('refreshCart',cart=>{

    let cartContainer = document.getElementById('cartContainer')
    cartContainer.innerHTML = null
    let btn = document.createElement('button')
    btn.innerHTML = 'finish purchase'
    let cartProd = cart
    cartProd.forEach(cart => {
        let card = document.createElement('div')
        card.id = 'card'
        let img = document.createElement('img')
        img.src = cart.image
        let name = document.createElement('h2')
        name.innerHTML = cart.name
        let price = document.createElement('p')
        price.innerHTML = cart.price

        card.append(img)
        card.append(name)
        card.append(price)
        cartContainer.append(card)
    });
    btn.addEventListener('click',()=>{
        let cartMessage = cart.map((p)=>{
            let obj = {}
            obj.name = p.name
            obj.price = p.price
            obj.id = p._id
            return obj
        })

        fetch('/req').then(r=>r.json()).then(user=>{
            cartMessage.push({user:user.name, email:user.username, phone:user.phone})
            console.log(cartMessage)
            socket.emit('finishPurchase',cartMessage)
            cartContainer.innerHTML = null
        })

    })
    cartContainer.append(btn)
})



