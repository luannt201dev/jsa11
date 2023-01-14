function login () {
    const btn = document.querySelector("#btnLogin");
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("check btn click")
    })
}

function getDataLocalStorage(item) {
    return JSON.parse(localStorage.getItem(item)) || []
}

function setDataToLocalStorage(item, data) {
    localStorage.setItem(item, JSON.stringify(data))
}


function run() {
    // register()
}

run()