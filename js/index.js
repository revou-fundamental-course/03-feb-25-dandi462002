let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");
let kalkulasi = document.querySelector("#kalkulasi input");

let labelCelcius = document.getElementById("labelCelcius");
let labelFahrenheit = document.getElementById("labelFahrenheit");

let celciusToFahrenheit = true;
let isReversed = false;

function konversi() {
    const formValue = parseFloat(celcius.value);
    if (isNaN(formValue)) {
        fahrenheit.value = "Masukkan angka!";
        kalkulasi.value = "";
        return;
    }

    let hasilKonversi, kalkulasiForm;
    if (celciusToFahrenheit) {
        hasilKonversi = convertCelciusToFahrenheit(formValue).toFixed(2);
        kalkulasiForm = `(${formValue} × 9/5) + 32 = ${hasilKonversi}`;
    } else {
        hasilKonversi = convertFahrenheitToCelcius(formValue).toFixed(2);
        kalkulasiForm = `(${formValue} - 32) × 5/9 = ${hasilKonversi}`;
    }

    // Menampilkan hasil ke inputan
    fahrenheit.value = hasilKonversi;
    kalkulasi.value = kalkulasiForm;
}

function convertCelciusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function convertFahrenheitToCelcius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}


function reset() {
	celcius.value = "";
	fahrenheit.value = "";
	kalkulasi.value = "";
}


function reverse() {
    celciusToFahrenheit = !celciusToFahrenheit;

    let celcius = document.getElementById("celcius");
    let fahrenheit = document.getElementById("fahrenheit");
    let labelCelcius = document.getElementById("labelCelcius");
    let labelFahrenheit = document.getElementById("labelFahrenheit");

    // Tukar label
    [labelCelcius.textContent, labelFahrenheit.textContent] = [labelFahrenheit.textContent, labelCelcius.textContent];

    // Tukar placeholder
    [celcius.placeholder, fahrenheit.placeholder] = [fahrenheit.placeholder, celcius.placeholder];

    // Tukar ID agar referensi tetap benar
    celcius.id = "temp";
    fahrenheit.id = "celcius";
    celcius.id = "fahrenheit";

    // Ambil ulang elemen setelah ID diubah
    celcius = document.getElementById("celcius");
    fahrenheit = document.getElementById("fahrenheit");

    // Set `disabled` sesuai mode
    celcius.disabled = !celciusToFahrenheit;
    fahrenheit.disabled = celciusToFahrenheit;

    // Hitung ulang setelah perubahan
    konversi();
}

// Atur keadaan awal: Celcius aktif, Fahrenheit nonaktif
document.getElementById("celcius").disabled = false;
document.getElementById("fahrenheit").disabled = true;
"// code" 
