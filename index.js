// BÀI 1: TÍNH LƯƠNG NHÂN VIÊN
function tinhLuongNhanVien(soNgayLam) {
  let tinhLuongNhanVien = soNgayLam * 100000;
  return tinhLuongNhanVien;
}
document.getElementById("btnTinhLuong").onclick = function () {
  console.log(`bắt đầu`);
  // ĐẦU VÀO
  let soNgayLam = document.getElementById("soNgayLam").value * 1;
  console.log(soNgayLam);
  // XỬ LÝ
  let luong = tinhLuongNhanVien(soNgayLam);
  console.log(luong);
  let tienTe = luong.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  console.log(tienTe);
  // ĐẦU RA
  document.querySelector(
    ".ketQua"
  ).innerHTML = `Tiền lương của bạn là: ${tienTe}`;
};

// BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH
function tinhTrungBinh5So(soThuc1, soThuc2, soThuc3, soThuc4, soThuc5) {
  let tinhTrungBinh5So = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
  return tinhTrungBinh5So;
}
document.getElementById("btnTinhTB").onclick = function () {
  console.log(`bắt đầu`);
  // ĐẦU VÀO
  let soThuc1 = document.getElementById("soThuc1").value * 1;
  let soThuc2 = document.getElementById("soThuc2").value * 1;
  let soThuc3 = document.getElementById("soThuc3").value * 1;
  let soThuc4 = document.getElementById("soThuc4").value * 1;
  let soThuc5 = document.getElementById("soThuc5").value * 1;
  console.log(soThuc1);
  console.log(soThuc2);
  console.log(soThuc3);
  console.log(soThuc4);
  console.log(soThuc5);
  // XỬ LÝ
  let tinhTrungBinh = tinhTrungBinh5So(
    soThuc1,
    soThuc2,
    soThuc3,
    soThuc4,
    soThuc5
  );
  console.log(tinhTrungBinh);
  // ĐẦU RA
  document.querySelector(
    ".ketQua2"
  ).innerHTML = `Trung bình của 5 số thực là: ${tinhTrungBinh}`;
};

// BÀI 3: QUY ĐỔI TIỀN
function quyDoiTienUSDToVND(sotienUSD) {
  let quyDoiTienUSDToVND = sotienUSD * 23500;
  return quyDoiTienUSDToVND;
}
document.getElementById("btnQuyDoi").onclick = function () {
  console.log(`bắt đầu`);
  // ĐẦU VÀO
  let sotienUSD = document.getElementById("quyDoiUSDToVND").value * 1;
  console.log(sotienUSD);
  // XỬ LÝ
  let quyDoiTien = quyDoiTienUSDToVND(sotienUSD);
  console.log(quyDoiTien);
  let tienTe = quyDoiTien.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  console.log(tienTe);
  document.querySelector(
    ".ketQua3"
  ).innerHTML = `Số tiền Việt tương ứng: ${tienTe}`;
};

//BÀI 4: TÍNH DIỆN TÍCH - CHU VI HCN
function tinhDienTichHCN(chieuDaiHCN, chieuRongHCN) {
  let tinhDienTichHCN = chieuDaiHCN * chieuRongHCN;
  return tinhDienTichHCN;
}
function tinhChuViHCN(chieuDaiHCN, chieuRongHCN) {
  let tinhChuViHCN = (chieuDaiHCN + chieuRongHCN) * 2;
  return tinhChuViHCN;
}
document.getElementById("btnTinhToan").onclick = function () {
  console.log(`bắt đầu`);
  // ĐẦU VÀO
  let chieuDaiHCN = document.getElementById("chieuDaiHCN").value * 1;
  let chieuRongHCN = document.getElementById("chieuRongHCN").value * 1;
  console.log(chieuDaiHCN);
  console.log(chieuRongHCN);
  // XỬ LÝ
  let dienTichHCN = tinhDienTichHCN(chieuDaiHCN, chieuRongHCN);
  console.log(dienTichHCN);
  let chuViHCN = tinhChuViHCN(chieuDaiHCN, chieuRongHCN);
  console.log(chuViHCN);
  // ĐẦU RA
  document.querySelector(
    ".ketQua4"
  ).innerHTML = `Diện tích HCN: ${dienTichHCN} <br> Chu vi HCN: ${chuViHCN}`;
};

// BÀI 5: TÍNH TỔNG 2 KÝ SỐ
function layHangDonViVaHangChuc(number) {
  let hangDonVi = number % 10;
  let hangChuc = Math.floor(number / 10);
  return { hangChuc, hangDonVi };
}
function tinhTong2KySo(kySoHangChuc, kySoHangDonVi) {
  let tinhTong2KySo = kySoHangChuc + kySoHangDonVi;
  return tinhTong2KySo;
}
//SET UP THẺ INPUT NHẬN VÀO GIÁ TRỊ NUMBER CHỈ 2 CHỮ SỐ
let number2KyTu = document
  .getElementById("number")
  .addEventListener("input", (e) => {
    let temp = e.target.value.replace(/\D/g, ""); //LOẠI BỎ NHỮNG KÍ TỰ KHÔNG PHẢI SỐ
    if (temp.length > 2) {
      // Giới hạn số lượng ký tự là 2
      temp = temp.substr(0, 2);
    }
    e.target.value = temp;
    console.log(e.target.value);
  });

document.getElementById("btnTinhTong2KySo").onclick = function () {
  console.log(`bắt đầu`);
  // ĐẦU VÀO
  let number = document.getElementById("number").value * 1;
  // XỬ LÝ
  let lay2KySo = layHangDonViVaHangChuc(number);
  console.log(lay2KySo.hangChuc);
  console.log(lay2KySo.hangDonVi);
  let tong2KySo = tinhTong2KySo(lay2KySo.hangChuc, lay2KySo.hangDonVi);
  console.log(tong2KySo);
  //ĐẦU RA
  document.querySelector(
    ".ketQua5"
  ).innerHTML = `Tổng 2 ký số là: ${tong2KySo}`;
};
