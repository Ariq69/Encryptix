let currentInput = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";

function appendNumber(number) {
  currentInput += number;
  document.getElementById("screen").value = currentInput;
}

function chooseOperator(op) {
  // Jika belum ada operator yang dipilih, simpan operand pertama
  if (firstOperand === "") {
    firstOperand = currentInput;
    currentInput = "";
    operator = op;
  } else if (currentInput !== "") {
    // Jika ada input, lakukan perhitungan terlebih dahulu
    calculate();
    operator = op; // Update operator
  }
}

function clearScreen() {
  currentInput = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  document.getElementById("screen").value = "";
}

function calculate() {
  if (firstOperand !== "" && currentInput !== "") {
    secondOperand = currentInput; // Menyimpan currentInput sebagai secondOperand
    let result;

    // Pastikan operand pertama dan kedua dalam format angka
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);

    // Lakukan perhitungan sesuai operator
    if (operator === "+") {
      result = firstOperand + secondOperand;
    } else if (operator === "-") {
      result = firstOperand - secondOperand;
    } else if (operator === "*") {
      result = firstOperand * secondOperand;
    } else if (operator === "/") {
      if (secondOperand !== 0) {
        result = firstOperand / secondOperand;
      } else {
        result = "Error"; // Untuk menangani pembagian dengan nol
      }
    }

    // Tampilkan hasil
    document.getElementById("screen").value = result;

    // Siapkan operand pertama untuk operasi berikutnya
    firstOperand = result.toString();
    currentInput = "";
    operator = "";
  }
}
