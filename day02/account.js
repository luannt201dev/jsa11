


function register() {
    const btn = document.querySelector("#btnRegister");
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value
    
        const users = getDatasLocalStorage("users");
    
        users.push({email, password})
    
        setDataToLocalStorage("users", users)
    })
   
    
}

function getDatasLocalStorage(item) {
    return JSON.parse(localStorage.getItem(item)) || []
}

function setDataToLocalStorage(item, data) {
    localStorage.setItem(item, JSON.stringify(data))
}


function run() {
    register()
}

run()