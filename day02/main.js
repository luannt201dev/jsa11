const users = [
    {
        id: 1,
        name: "Luan nguyen",
        avt: "data:image/jpeg;base64,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"
    },
    {
        id: 2,
        name: "Kiet Vu",
        avt: "data:image/jpeg;base64,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"
    }
]

const products = [
    {
        id: 1,
        name: "búa",
        price: 10000,
        desc: "bua cua thor"
    },
    {
        id:2,
        name: "Keo",
        price: 5000,
        desc: "Keo abc"
    },
    {
        id: 3,
        name: "Bao",
        price: 1000,
        desc: "Bao tai"
    }
]

const cart_data = [
    {
        user_id: 1,
        product_id: 1,
        quantity: 3,
    }, 
    {
        user_id: 2,
        product_id: 3,
        quantity: 1
    },
    {
        user_id: 2,
        product_id: 1,
        quantity: 2
    }
]

const current_user_id = 2;

const cart_list_product = document.querySelector(".list-cart-product")

const user_cart = [];

for (let i = 0; i < cart_data.length; i++) {
    if (cart_data[i].user_id === current_user_id) {
        user_cart.push(cart_data[i])
    }
}

const user_list_product_cart = []
for (let i = 0; i < user_cart.length; i++) {
    let product_id = user_cart[i].product_id;

    for (let i = 0; i < products.length; i++) { 
        if (products[i].id === product_id) {
            user_list_product_cart.push(products[i])
        }
    }
    
}

for(let i = 0; i < user_list_product_cart.length; i++) {
    let item = user_list_product_cart[i];
    let li = document.createElement("li");
    li.innerHTML = `${item.name} - ${item.price}`
    cart_list_product.appendChild(li)
}
