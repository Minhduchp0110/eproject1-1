const list = document.getElementById("list");
const searchForm = document.getElementById("search");

const listProducts = [
    {
        id: 'DPVD101',
        name: 'GƯƠNG VÀNH INOX VÀNG SOI TOÀN THÂN',
        price: 1500500,
        image: 'https://www.dehome.vn/images/products/2020/10/27/large/z2142668655074_7bf36b9881a0ff3b3be66615514cee1b_1603768339.jpg.jpg',
        variations: {
            colors: [2,2],
            sizes: [2,3],
          
        }
    },
    {
        id: 'DPVD102',
        name: 'Gương tròn khung inox mạ PVD màu vàng',
        price: 300000,
        image: 'https://www.dehome.vn/images/products/2021/10/07/resized/[000339]_1633599460.jpg.webp',
        variations: {
            colors: [2,2],
            sizes: [3,3],
        }
    },
    {
        id: 'DPVD103',
        name: 'Bộ Gương Phòng Tắm Hình Bầu Dục Khung Mạ PVD Cao Cấp',
        price: 200000,
        image: 'https://www.dehome.vn/images/products/2022/04/02/resized/guong-phong-tam-hinh-chu-nhat-co-led-hinh-chu-nhat_1648872756.jpg.webp',
        variations: {
            colors: [3],
            sizes: [2],
        }
    },
    {
        id: 'DPVD104',
        name: 'Gương khung sơn tĩnh điện màu đen phòng tắm cao cấp  ',
        price: 400000,
        image: 'https://www.dehome.vn/images/products/2022/02/12/resized/guong-khung-son-tinh-dien-mau-den-phong-tam-cao-cap-dehome---dkl65142a_1644662243.jpg.webp',
        variations: {
            colors: [1],
            sizes: [1],
        }
    },
    {
        id: 'DPVD105',
        name: 'Gương Chữ Nhật Khung Gỗ Đen Cao Cấp  ',
        price: 320000,
        image: 'https://www.dehome.vn/images/products/2020/08/10/resized/guong_chu_nhat_khung_gadyl_1597053745.jpg.webp',
        variations: {
            colors: [1],
            sizes: [1],
        }
    },
    {
        
        id: 'DPVD106',
        name: 'Gương phòng tắm khung sơn tĩnh điện trắng cao cấp ',
        price: 320000,
        image: 'https://www.dehome.vn/images/products/2022/02/12/resized/guong-phong-tam-khung-son-tinh-dien-trang-2_1623470831jpg_1644634951.jpg.webp',
        variations: {         
            colors: [3],  
            sizes: [1],
        }
    }
];


showProduct(listProducts);

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const filters = e.target.elements;
    console.log(filters.color.value);
    console.log(filters.size.value);
    const productFilter = listProducts.filter(e => 
        (e.variations.colors.includes(Number(filters.color.value)) && 
        e.variations.sizes.includes(Number(filters.size.value)) ||
        e.name === filters.name.value));
    showProduct(productFilter);
});
    


function showProduct(product){
    console.log(product);
    // count.innerText = productFilter.length;
    var newItem = ''
    product.forEach(item => {
        newItem += `<div class="col-4 mt-2">
        <div class="card" style="width: 100%;">
            <img src="${item.image}" alt="...">
            <div class="card-body">
                <p class="card-text">Code: ${item.id}</p>
                <h5 class="card-title">${item.name}</h5>
                <h4 style="color: red">${item.price} vnd</h4>
                <div>
                    <h5>Colors: ${convertColor(item.variations.colors)}</h5> 
                    <h5>Sizes: ${convertSize(item.variations.sizes)}</h5>
                </div>
                <a class="btn btn-primary">Add to cart</a>
            </div>
            </div>
    </div>`
    });
    list.innerHTML = newItem;
}

function convertColor(colors) {
    const converColors = colors.map(item => {
        switch(item) {
            case 1:
                item = 'Black';
                break;
            case 2:
                item = 'Gold';
                break;
            case 3:
                item = 'White';
                break;
            default:
              return item = '';
        }
        return item;
    })
    return converColors.toString();
}

function convertSize(sizes) {
    const converSizes = sizes.map(item => {
        switch(item) {
            case 1:
                item = 'High';
                break;
            case 2:
                item = 'Medium';
                break;
            case 3:
                item = 'Small';
                break;
            default:
              return item = '';
        }
        return item;
    })
    return converSizes.toString();
}