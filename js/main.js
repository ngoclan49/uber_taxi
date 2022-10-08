function layLoaiXe() {
    var ketqua;
    var uberX = document.getElementById('uberX').checked;
    var uberSUV = document.getElementById('uberSUV').checked;
    var uberBlack = document.getElementById('uberBlack').checked;

    if (uberX) { //nếu xe uberX được check
        ketqua = "uberX";
    } else if (uberSUV) { //nếu xe uberSUV được check
        ketqua = "uberSUV";
    } else if (uberBlack) { //nếu xe uberBlack được check
        ketqua = "uberBlack";
    }
    return ketqua; 
}
/**
 * trả về: tổng tiền dựa vào số KM người dùng nhập vào + thời gian chờ
 */

function TinhTien() {
    var soKM = document.getElementById('soKM').value;
    soKM = parseFloat(soKM);
    var thoiGianCho = document.getElementById('thoiGianCho').value;
    thoiGianCho = parseFloat(thoiGianCho);
    var divThanhTien = document.getElementById('divThanhTien');
    divThanhTien.style.display = 'block';
    var xuatTien = document.getElementById('xuatTien');
    
    loaiXe = layLoaiXe();
    // console.log(loaiXe);
    // Tính tiền tại đây 
    if (!loaiXe) {
        alert ('Vui lòng chọn loại xe');
    }

    var thanhTien = 0;
    var km1UberX = 8000;
    var km1UberSUV = 9000;
    var km1UberBlack = 10000;
    switch (loaiXe) {
        case 'uberX':
            if (soKM <= 1) {
                thanhTien = soKM * km1UberX + thoiGianCho * 2000;
            } else if (soKM > 1 && soKM <=20) {
               thanhTien = 1 * km1UberX + (soKM-1) * 12000 + thoiGianCho * 2000;
            } else if (soKM > 20) {
                thanhTien = 1 * km1UberX + 20 * 12000 + (soKM-21) * 10000 + thoiGianCho * 2000;
            }
        break;

        case 'uberSUV':
            if (soKM <=1) {
                thanhTien = soKM * km1UberSUV + thoiGianCho * 3000;
            } else if (soKM > 1 && soKM <=20) {
                thanhTien = 1 * km1UberSUV + (soKM - 1) * 14000 + thoiGianCho * 3000;
            } else if (soKM >20) {
                thanhTien = 1 * km1UberSUV + 20 * 14000 + (soKM-21) * 12000 + thoiGianCho * 3000;
            }
        break;

        case 'uberBlack':
            if (soKM <=1) {
                thanhTien = soKM * km1UberBlack + thoiGianCho * 4000;
            } else if (soKM > 1 && soKM <=20) {
                thanhTien = 1 * km1UberBlack + (soKM-1) * 16000 + thoiGianCho * 4000;
            } else if (soKM > 20) {
                thanhTien = 1 * km1UberBlack + 20 * 16000 + (soKM-21) * 14000 + thoiGianCho * 4000;
            }
        break;
    };
    xuatTien.innerHTML = thanhTien;
}

function showHoaDon() {
    var inHoaDon = document.getElementsByClassName('inhoadon');
}



