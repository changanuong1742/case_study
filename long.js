let UserName = function () {
    this.arrAdmin = [["long", "1", "admin2"], ["long", "1", "789789789"]];

    this.login = function () {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        if (username.trim() === '') {
            document.getElementById("show").innerHTML = "Vui Lòng Nhập Tài Khoản";
        } else if (password.trim() === '') {
            document.getElementById("show").innerHTML = "Vui Lòng Nhập Mật Khẩu";
        } else {
            for (let i = 0; i < this.arrAdmin[0].length; i++) {
                if (username === this.arrAdmin[0][i] && password === this.arrAdmin[1][i]) {
                    //this.logged = 1;
                    alert("Chào " + this.arrAdmin[0][i] + " Đăng Nhập Thành Công!");
                    return window.location = "classManageProduct.html";
                }
            }
            alert("Tài Khoản Hoặc Mật Khẩu Sai");
            clearLogin();
        }
    };
};


let AppProducts = function () {
    this.listProducts = [
        ["ASUS TUF Gaming FX505DV " + '\n' +
        "          Windows 10 Pro      \n" +
        "   GeForce      RTX™ 2060 GPU \n" +
        "    AMD®      Ryzen™ 7 3750H CPU \n" +
        "    15.6-inch      FHD, up to 144Hz/3ms display \n", "https://www.asus.com/media/global/products/R0aLUBgprfy023VC/P_setting_F5F5F5_1_90_end_225.png", "8",],

        ["ASUS VivoBook 17 X705UQ\n" + '\n' +
        "   17.3\" FHD display  \n" +
        "   Latest Intel® Core™ i7 processor \n" +
        "   16GB memory  \n" +
        "    2 TB HDD + 512 GB  SSD sto...  \n", "https://www.asus.com/media/global/products/qaATka2hLiEbdw7Q/P_setting_F5F5F5_1_90_end_225.png", "6",],

        ["ASUS VivoBook S14 S410UN\n" + '\n' +
        "          Windows 10 Pro      \n" +
        "   Thin and light: 1.3kg, 18.8mm \n" +
        "    14\" FHD Nanoedge display  \n" +
        "    Latest Intel® Core™ i7 processor \n", "https://www.asus.com/media/global/products/sjcpIMnc0kebaQcF/P_setting_F5F5F5_1_90_end_225.png", "5",],

        ["ASUS VivoBook Pro 17 N705UQ\n" + '\n' +
        "          Windows 10 Pro      \n" +
        "   8th Gen Intel® Core™ i7 processor  \n" +
        "   Nvidia GeForce® 940MX  \n" +
        "   17.3\" FHD display \n", "https://www.asus.com/media/global/products/qlGMPBolTjpdoiUF/P_setting_F5F5F5_1_90_end_225.png", "3",],

    ];
    this.setLocalStorageListProducts = function () {
        sessionStorage.listProducts = JSON.stringify(this.listProducts);
    };

    this.getLocalStorageListProducts = function () {
        this.listProducts = JSON.parse(sessionStorage.listProducts);
    };


    this.displayProductsAdmin = function () {
        this.getLocalStorageListProducts();
        let sout = '';
        for (let i = 0; i < this.listProducts.length; i++) {
            sout = sout + '<tr>';
            sout = sout + '<td style="width: 50px; text-align: center"><p>' + (i + 1) + '</p></td>';
            sout = sout + '<td style="width: 1200px"><p id="' + i + '">&nbsp;&nbsp;' + this.listProducts[i][0] + '</p></td>';
            sout = sout + '<td><img src="' + this.listProducts[i][1] + '" width="300" height="300" ></td>';
            sout = sout + '<td>' + 'Số Lượng: ' +  this.listProducts[i][2]  +'</td>';
            sout = sout + '<td style="width: 80px; text-align: center"><input type="button" class="button" value="Sửa SL" onclick="editSl(' + i + ')"></input></td>';
            sout = sout + '<td style="width: 80px; text-align: center"><input type="button" class="button" value="Sửa Ảnh" onclick="editProductImg(' + i + ')"></input></td>';
            sout = sout + '<td style="width: 80px; text-align: center"><input type="button" class="button" value="Sửa Tiêu Đề" onclick="editProduct(' + i + ')"></input></td>';
            sout = sout + '<td style="width: 80px; text-align: center"><input type="button" class="button" value="Xóa Sản Phẩm" onclick="deleteProduct(' + i + ')"></input></td>';
            sout = sout + '</tr>';
        }
        document.getElementById("result0").innerHTML = sout;
    };



    this.addProduct = function () {
        let product = document.getElementById("newProduct").value;
        let imgs = document.getElementById("imgProduct").value;
        let sll = document.getElementById("sllProduct").value;
        if (product === "") {
            document.getElementById("show").innerHTML = "Vui Lòng Nhập Tiêu Đề";
        } else if (imgs === "") {
            document.getElementById("show").innerHTML = "Vui Lòng Nhập Đường Dẫn";
        } else if(sll === ""){
            document.getElementById("show").innerHTML = "Vui Lòng Nhập Số Lượng";
        } else {
            this.listProducts.push([product, imgs, sll,]);
            document.getElementById("show").innerHTML = "Thêm Thành Công !";
            this.setLocalStorageListProducts();
            return this.displayProductsAdmin();

        }
    };


    this.editSl = function (i) {
        let sl = prompt("Nhập Số Lượng Muốn Sửa ");
        if (sl.trim() === "") {
            alert("Vui Lòng Nhập Số Lượng Muốn Sửa");
            return;
        }
        this.listProducts[i][2] = sl;
        this.setLocalStorageListProducts();
        return this.displayProductsAdmin();
    };


    this.editProductImg = function (i) {
        let link = prompt("Nhập Link Ảnh Muốn Sửa ");
        if (link.trim() === "") {
            alert("Vui Lòng Nhập Link Ảnh Muốn Sửa");
            return;
        }
        this.listProducts[i][1] = link;
        this.setLocalStorageListProducts();
        return this.displayProductsAdmin();
    };





    this.editProduct = function (i) {
        let temp = prompt("Nhâp Tên Muốn Sửa ");
        if (temp.trim() === "") {
            alert("Vui Lòng Nhâp Tên Muốn Sửa");
            return;
        }
        this.listProducts[i][0] = temp;
        this.setLocalStorageListProducts();
        return this.displayProductsAdmin();

    };


    this.deleteProduct = function (i) {
        let confirmAnswer = confirm("Bạn Muốn Xóa " + this.listProducts[i][0] + " ?");
        if (confirmAnswer) {
            let arr1 = [];
            let x = 0;
            while (x < this.listProducts.length) {
                if (x == i) {
                    x++;
                    continue;
                } else {
                    arr1.push(this.listProducts[x]);
                    x++;
                }
            }
            this.listProducts = arr1;
            this.setLocalStorageListProducts();
            return this.displayProductsAdmin();
        } else {
            return;
        }


    };


};


let pro = new AppProducts();

function logOut() {
    return window.location = "home.html"
}

function clearLogin() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}


function open() {
    pro.setLocalStorageListProducts();
    log.login();
}

let log = new UserName();

function open2() {
    pro.displayProductsAdmin();

}

function editSl(i) {
    return pro.editSl(i);
}
function editProduct(i) {
    return pro.editProduct(i);
}

function editProductImg(i) {
    return pro.editProductImg(i);
}

function deleteProduct(i) {
    return pro.deleteProduct(i);
}
