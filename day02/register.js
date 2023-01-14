function register() {
  const btn = document.querySelector("#btnRegister");
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const users = getDataLocalStorage("users");

    users.push({ email, password });

    setDataToLocalStorage("users", users);
  });
}

function getDataLocalStorage(item) {
  return JSON.parse(localStorage.getItem(item)) || [];
}

function setDataToLocalStorage(item, data) {
  localStorage.setItem(item, JSON.stringify(data));
}

function run() {
  register();
}

run();

// Đổi tên file account.js => register.js
// vào file register.html đổi src="account.js" thẻ script thành src="register.js"
// Taọ file mới tên là login.js
//  vào file login.html đổi src="account.js" thẻ script thành src="login.js"
// copy hàm run, getDataLocalStorage, setDataToLocalStorage qua file login.js