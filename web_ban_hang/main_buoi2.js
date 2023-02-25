const items = [
  {
    id: 1,
    image: "https://ngonaz.com/wp-content/uploads/2022/01/cach-ve-anime-2.jpg",
    name: "Bút chì",
    price: 129000,
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-photo/woman-portrait-park-anime-manga-style_691560-1170.jpg?w=2000",
    name: "Bút mực",
    price: 99000,
  },
  {
    id: 3,
    image:
      "https://mondaycareer.com/wp-content/uploads/2020/11/anime-l%C3%A0-g%C3%AC-v%C3%A0-kh%C3%A1i-ni%E1%BB%87m.jpg",
    name: "Sách giáo khoa",
    price: 99000,
  },
  {
    id: 4,
    image: "https://i1.sndcdn.com/artworks-000248908839-wlug27-t500x500.jpg",
    name: "Truyện khoa học",
    price: 99000,
  },
  {
    id: 5,
    image:
      "https://static.wikia.nocookie.net/kimetsu-no-yaiba-vietnam/images/2/2b/Kimetsu_no_Yaiba_Key_Visual_3.png",
    name: "Vở ghi",
    price: 99000,
  },
  {
    id: 6,
    image:
      "https://cdn.oneesports.vn/cdn-data/sites/4/2022/10/Anime_Fall2022_featured.jpg",
    name: "Tập sách",
    price: 99000,
  },
];

const carts = [];

// hàm tạo ra đoạn html của mỗi item
function createItem(item) {
  let div_item = document.createElement("div");
  div_item.setAttribute("class", "item");
  div_item.innerHTML = `<div class="item-image">
                <img src="${item.image}" alt="">
            </div>
            <div class="item-content">
                <div class="item-name">${item.name}</div>
                <div class="item-price">${item.price} VND</div>
            </div>
            <div class="add-to-cart">
                <button id=${item.id} onclick="handleClickAddToCart(this)">Thêm vào giỏ hàng</button>
            </div>`;
  return div_item;
}

function renderListItem(data) {
  const list_item = document.querySelector("#list-item");
  list_item.innerHTML = "";
  data.forEach(function (item, index) {
    const itemUI = createItem(item);
    list_item.appendChild(itemUI);
  });
}

function search(){
  //lấy phần tử input với class header-search
  const inputSearch = document.querySelector(".header-search");
  // Lắng nghe sự kiện thay đổi của ô input trên
  inputSearch.addEventListener("change", function(){
    // lấy giá trị từ ô search
    const searchValue = inputSearch.value;
    // khai báo mảng tìm kiếm rỗng
    const searchArray = [];
    // lặp lần lượt qua các sản phẩm
    items.forEach(function(item) {
      //kiểm tra từ tìm kiếm có trong tên của sản phẩm hay không
      if (item.name.includes(searchValue) === true) {
        //Nếu có thì thêm sản phẩm đó vào mảng tìm kiếm
        searchArray.push(item)
      }
    })

    renderListItem(searchArray)
  })
}

function handleClickAddToCart(button) {
  const id = button.id;
  const product = items.filter(function(item) {
    return item.id === Number(id)
  })[0]

  const newCart ={
    product: product,
    quantity: 1,
    type: "default"
  }

  carts.push(newCart)
  alert("Thêm vào giỏ hàng thành công!")
}

function handleLogout() {
  localStorage.removeItem("isLogin");
  window.location.href = "login.html"
}

function checkLogin() {
  const isLogin =JSON.parse(localStorage.getItem("isLogin"));
  console.log(isLogin)
  if (!isLogin) {
      window.location.href = "login.html"
  }
}

window.onload = function() {
  renderListItem(items);
  search()
}

// checkLogin();





