function login () {
    const btn = document.querySelector("#btnLogin");

    // láng nghe sự kiện click nút đăng nhập 
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        // lấy giá trị người dùng nhập từ ô input
        const email = document.querySelector("#email").value;
        const pwd = document.querySelector("#password").value;

        //Lấy dữ liệu người dùng có sẵn từ localStorage
        const users = getDataLocalStorage("users");
        const isLogin = false;

        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            // Tìm kiếm tài khoản có giá trị giống của người dùng nhập vào
            if (user.email === email && user.password === pwd) {
                setDataToLocalStorage("isLogin", true)
                window.location.href = "index.html"
                isLogin = true
                break;
            }

        }
        if (isLogin === false) {
            alert("Tài khoản hoặc mật khẩu không chính xác!")
        }
    })
}

function checkLogin() {
    const isLogin = getDataLocalStorage("isLogin");
    if (isLogin === true) {
        window.location.href = "index.html"
    }
}

function getDataLocalStorage(item) {
    return JSON.parse(localStorage.getItem(item)) || []
}

function setDataToLocalStorage(item, data) {
    localStorage.setItem(item, JSON.stringify(data))
}

window.onload = function() {
    login()
}

checkLogin()