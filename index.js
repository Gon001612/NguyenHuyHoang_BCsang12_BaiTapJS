let arrNumber = [];
let formInput = document.getElementById("formInput");

// Thêm số vào mảng
document.querySelector("#them").onclick = () => {
  let soN = document.querySelector("#soN").value * 1;
  arrNumber.push(soN);
  document.querySelector("#hienThiCacSoTrongMang").innerHTML = arrNumber;
  console.log(arrNumber);
  return arrNumber;
};

// Tính tổng các số dương có trong mãng
document.querySelector("#tinhTongCacSoDuong").onclick = () => {
  let tongCacSoDuong = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      tongCacSoDuong += arrNumber[i];
    }
  }
  document.querySelector(
    "#hienTongCacSoDuong"
  ).innerHTML = `Tổng của các số dương có trong mảng là: ${tongCacSoDuong}`;
  console.log(tongCacSoDuong);
  return tongCacSoDuong;
};

// Đếm các số dương có trong mảng
document.querySelector("#demCacSoDuong").onclick = () => {
  let cacSoDuong = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      cacSoDuong++;
    }
  }
  document.querySelector(
    "#hienCacSoDuong"
  ).innerHTML = `Số dương có trong mảng là : ${cacSoDuong}`;
  console.log(cacSoDuong);
  return cacSoDuong;
};

// Tìm số nhỏ nhất có trong mảng
document.querySelector("#timSoNhoNhat").onclick = () => {
  let minVal = arrNumber[0];
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < minVal) {
      minVal = arrNumber[i];
    }
  }
  document.querySelector(
    "#hienSoNhoNhat"
  ).innerHTML = `Số nhỏ nhất có trong mảng là: ${minVal}`;
  console.log(minVal);

  return minVal;
};

// Tìm số dương nhỏ nhất
document.querySelector("#timSoDuongNhoNhat").onclick = () => {
  let minPositive = null;
  for (let i = 0; i < arrNumber.length; i++) {
    if (
      arrNumber[i] > 0 &&
      (minPositive === null || arrNumber[i] < minPositive)
    )
      minPositive = arrNumber[i];
  }

  document.querySelector(
    "#hienSoDuongNhoNhat"
  ).innerHTML = `Số dương nhỏ nhất: ${minPositive}`;
  console.log(minPositive);
  return minPositive;
};

// Tìm số chẵn cuối cùng trong mãng
document.querySelector("#timSoChanCuoi").onclick = () => {
  let soChanCuoi = null;
  for (let i = arrNumber.length - 1; i >= 0; i--) {
    if (arrNumber[i] % 2 === 0) {
      soChanCuoi = arrNumber[i];
    }
  }
  document.querySelector(
    "#hienSoChanCuoi"
  ).innerHTML = `Số chẵn cuối cùng là: ${soChanCuoi}`;
  console.log(soChanCuoi);
  return -1;
};
