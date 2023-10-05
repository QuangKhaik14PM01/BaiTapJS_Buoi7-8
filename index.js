function performOperations() {
  var inputArray = document
    .getElementById("inputArray")
    .value.split(",")
    .map(Number);

  // 1. Tổng các số dương trong mảng.
  var sumPositive = 0;
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > 0) {
      sumPositive += inputArray[i];
    }
  }

  // 2. Đếm có bao nhiêu số dương trong mảng.
  var countPositive = 0;
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > 0) {
      countPositive++;
    }
  }

  // 3. Tìm số nhỏ nhất trong mảng.
  var minNumber = Math.min.apply(null, inputArray);

  // 4. Tìm số dương nhỏ nhất trong mảng.
  var minPositiveNumber = Math.min.apply(
    null,
    inputArray.filter((num) => num > 0)
  );

  // 5. Tìm số chẵn cuối cùng trong mảng.
  var lastEvenNumber = -1;
  for (var i = inputArray.length - 1; i >= 0; i--) {
    if (inputArray[i] % 2 === 0) {
      lastEvenNumber = inputArray[i];
      break;
    }
  }

  // 6. Đổi chỗ 2 giá trị trong mảng theo vị trí (sắp xếp ngẫu nhiên mỗi giá trị)
  function swapValues(index1, index2) {
    var temp = inputArray[index1];
    inputArray[index1] = inputArray[index2];
    inputArray[index2] = temp;
  }

  // Chọn ngẫu nhiên 2 vị trí để đổi chỗ
  var index1 = Math.floor(Math.random() * inputArray.length);
  var index2 = Math.floor(Math.random() * inputArray.length);
  swapValues(index1, index2);

  // 7. Sắp xếp mảng theo thứ tự tăng dần.
  inputArray.sort(function (a, b) {
    return a - b;
  });

  // 8. Tìm số nguyên tố đầu tiên trong mảng.
  function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  var firstPrimeNumber = -1;
  for (var i = 0; i < inputArray.length; i++) {
    if (isPrime(inputArray[i])) {
      firstPrimeNumber = inputArray[i];
      break;
    }
  }

  // 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên.
  var realNumbers = prompt("Nhập mảng số thực, cách nhau bằng dấu phẩy(phần nhập này chỉ áp dụng cho chức nắng thứ 9):")
    .split(",")
    .map(Number);
  var integerCount = 0;
  for (var i = 0; i < realNumbers.length; i++) {
    if (Number.isInteger(realNumbers[i])) {
      integerCount++;
    }
  }

  // 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
  var positiveCount = inputArray.filter((num) => num > 0).length;
  var negativeCount = inputArray.filter((num) => num < 0).length;
  var comparisonResult = "Số dương nhiều hơn";
  if (negativeCount > positiveCount) {
    comparisonResult = "Số âm nhiều hơn";
  } else if (negativeCount === positiveCount) {
    comparisonResult = "Số dương và số âm bằng nhau";
  }

  // Hiển thị kết quả
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
        <p>1. Tổng các số dương trong mảng: ${sumPositive}</p>
        <p>2. Đếm có bao nhiêu số dương trong mảng: ${countPositive}</p>
        <p>3. Số nhỏ nhất trong mảng: ${minNumber}</p>
        <p>4. Số dương nhỏ nhất trong mảng: ${minPositiveNumber}</p>
        <p>5. Số chẵn cuối cùng trong mảng: ${lastEvenNumber}</p>
        <p>6. Mảng sau khi đổi chỗ 2 giá trị: ${inputArray}</p>
        <p>7. Mảng sau khi sắp xếp: ${inputArray}</p>
        <p>8. Số nguyên tố đầu tiên trong mảng: ${firstPrimeNumber}</p>
        <p>9. Trong mảng số thực, có ${integerCount} số nguyên.</p>
        <p>10. ${comparisonResult}</p>
    `;
}
