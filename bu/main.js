console.log("test connect file")

const items = [
    {
      id: 1,
      image: "https://ngonaz.com/wp-content/uploads/2022/01/cach-ve-anime-2.jpg",
      name: "Sản phẩm 1",
      price: 129000,
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/premium-photo/woman-portrait-park-anime-manga-style_691560-1170.jpg?w=2000",
      name: "Sản phẩm 2",
      price: 99000,
    },
    {
      id: 3,
      image:
        "https://mondaycareer.com/wp-content/uploads/2020/11/anime-l%C3%A0-g%C3%AC-v%C3%A0-kh%C3%A1i-ni%E1%BB%87m.jpg",
      name: "Sản phẩm 3",
      price: 99000,
    },
    {
      id: 4,
      image: "https://i1.sndcdn.com/artworks-000248908839-wlug27-t500x500.jpg",
      name: "Sản phẩm 4",
      price: 99000,
    },
    {
      id: 5,
      image:
        "https://static.wikia.nocookie.net/kimetsu-no-yaiba-vietnam/images/2/2b/Kimetsu_no_Yaiba_Key_Visual_3.png",
      name: "Sản phẩm 5",
      price: 99000,
    },
    {
      id: 6,
      image:
        "https://cdn.oneesports.vn/cdn-data/sites/4/2022/10/Anime_Fall2022_featured.jpg",
      name: "Sản phẩm 6",
      price: 99000,
    },
  ];

  var list_item = document.querySelector("#list-item");


  for(let i = 0; i < items.length; i++) {
    const item = items[i];
    const item_div = document.createElement("div");
    item_div.setAttribute("class", "item");
    item_div.innerHTML = `<div class="item-image">
                                <img src="${item.image}" alt="">
                            </div>
                            <div class="item-content">
                                <div class="item-name">${item.name}</div>
                                <div class="item-price">${item.price}</div>
                            </div>
                            <div class="add-to-cart">
                                <button>Thêm vào giỏ hàng</button>
                            </div>`
    list_item.appendChild(item_div)
  }