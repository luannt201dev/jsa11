// //lấy bài đăng số 1 => cung cấp tác giả của bài đăng đó => lấy bàì đăng số 1 => lấy user của bài đăng đó
// // liệt kê tất cả comment của bbaif đăng đó (thể hiện rõ comment đó của ai) => lấy hết comment của bài đăng đó => chạy mảng lấy lần lượt các user comment

// // bài đăng số 1 của tác giả eanne Graham
// // comment số 2 của usereanne Graham
// // comment số 3 của usereanne Graham
// // comment số 4 của usereanne Graham
// // comment số 4 của usereanne Graham

// async function getPost(postId) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//   const post = await res.json()
//   return post
// }

// async function getAuthor(userId) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//   const user = await res.json()
//   return user
// }

// async function getComments(postId) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
//   const comments = await res.json()
//   return comments
// }

// function renderUi(post, author, comments) {
//   const content = document.querySelector("#content");
//   const title = document.createElement("h1");
//   title.innerHTML = `${post.title} của tác giả ${author.name}`
//   const listComment = document.createElement("ul");
//   comments.forEach(comment => {
//     const li = document.createElement("li");
//     li.innerHTML = `${comment.name} - ${comment.email}`
//     listComment.appendChild(li)
//   });
//   content.appendChild(title)
//   content.appendChild(listComment)
// }

// async function run() {
//   const postId = 1;
//   const post = await getPost(postId);
//   console.log("post >>", post)
//   const author = await getAuthor(post.userId)
//   console.log("post's author >>", author)

//   const comments = await getComments(postId)
//   console.log("post's comments >>",comments)

//   renderUi(post, author, comments)
// }

// console.log("name >>>", asdads)

// run()

// let menu = read() || ["rau xào", "thịt luộc", "gà rán"];

// const letter = prompt("Nhập vào thao tác cần xử lý: ");

// if (letter === "c" || letter === "C") {
//   const meal = prompt("Nhập món ăn :");
//   create(meal);
// } else if (letter === "r" || letter === "R") {
//   const content = menu.toString();
//   alert(content);
// } else if (letter === "u" || letter === "U") {
//   let meal = prompt("Nhập món ăn cần cập nhật :");
//   meal = meal.trim();
//   const index = menu.indexOf(meal);
//   if (index < 0) {
//     alert("món ăn này không tồn tại!");
//   } else {
//     let newMeal = prompt("Nhập món ăn mới :");
//     update(index, newMeal)
//   }
// } else if (letter === "d" || letter === "D") {
//   let meal = prompt("Nhập món ăn cần xoá :");
//   meal = meal.trim();
//   const index = menu.indexOf(meal);
//   if (index < 0) {
//     alert("món ăn này không tồn tại!");
//   } else {
//     deleteC(index)
//   }
// } else {
//   alert("Thao tác không tồn tại");
// }

// function create(meal) {
//   menu.push(meal);
//   localStorage.setItem("menu", JSON.stringify(menu));
// }

// function deleteC(index) {
//   menu.shift(index);
//   localStorage.setItem("menu", JSON.stringify(menu));
// }

// function read() {
//   return JSON.parse(localStorage.getItem("menu"));
// }

// function update(index, newMeal) {
//   menu[index] = newMeal;
//   localStorage.setItem("menu", JSON.stringify(menu));
// }



async function getPokemon(name = null) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
  const pokemons = await res.json()
  return pokemons
}

async function run() {
  const pokemons = await getPokemon()
  console.log(pokemons)
}

run()