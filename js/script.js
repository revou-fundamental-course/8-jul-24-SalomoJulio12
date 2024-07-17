function calculateBMI() {
    const weight = parseFloat(document.getElementById("berat-badan").value);
    const height = parseFloat(document.getElementById("tinggi-badan").value) / 100;

    const bmi = weight / (height * height);

    let bmiCategory = "";
    let bmiResult = "";
    let bmiInformation = "";
    let bmiInformation2 = "";
    let bmiDiagnosaKategori = "";
    let bmiPenyakit = "";

    if (bmi < 18.5) {
        bmiCategory = "Berat Badan Kurang";
        bmiResult = "Dibawah 18";
        bmiInformation = "Cara terbaik untuk meningkatkan berat badan adalah dengan mengonsumsi makanan yang kaya akan nutrisi dan tinggi kalori. Anda juga bisa melakukan olahraga ringan seperti berjalan kaki atau bersepeda.";
        bmiInformation2 = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan Anda ke batas normal";
        bmiDiagnosaKategori = "Kekurusan";
        bmiPenyakit = `
            <ul>
                <p>Penyakit Jantung</p>
                <p>Penyakit Ginjal</p>
                <p>Penyakit Osteoporosis</p>
                <p>Penyakit Anemia</p>
                <p>Penyakit Infertilitas</p>
                </ul>`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Berat Badan Normal";
        bmiResult = "Diantara 18.5 - 24.9";
        bmiInformation = "Cara terbaik untuk menjaga berat badan ideal adalah dengan mengonsumsi makanan yang seimbang dan melakukan olahraga secara teratur.";
        bmiInformation2 = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menjaga berat badan Anda agar tetap stabil";
        bmiDiagnosaKategori = "Berat Badan Normal";
        bmiPenyakit = "Anda memiliki resiko yang lebih rendah terhadap penyakit yang disebabkan oleh berat badan normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = "Berat Badan Berlebih";
        bmiResult = "Diantara 25 - 29.9";
        bmiInformation = "Cara terbaik untuk menurunkan berat badan adalah dengan mengonsumsi makanan rendah kalori dan tinggi nutrisi. Anda juga bisa melakukan olahraga rutin seperti berlari atau berenang.";
        bmiInformation2 = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan Anda ke batas normal";
        bmiDiagnosaKategori = "Kegemukan";
        bmiPenyakit = `
            <ul>
                <p>Penyakit Jantung</p>
                <p>Penyakit Stroke</p>
                <p>Penyakit Diabetes</p>
                <p>Penyakit Kanker</p>
                <p>Penyakit Hipertensi</p>
                </ul>`;
    } else if (bmi >= 30) {
        bmiCategory = "Obesitas";
        bmiResult = "Diatas 30";
        bmiInformation = "Cara terbaik untuk menurunkan berat badan adalah dengan mengonsumsi makanan rendah kalori dan tinggi nutrisi. Anda juga bisa melakukan olahraga rutin seperti berlari atau berenang.";
        bmiInformation2 = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan Anda ke batas normal";
        bmiDiagnosaKategori = "Obesitas";
        bmiPenyakit = `
            <ul>
                <p>Penyakit Jantung</p>
                <p>Penyakit Stroke</p>
                <p>Penyakit Diabetes</p>
                <p>Penyakit Osteoarthritis</p>
                <p>Penyakit Gagal ginjal</p>
                </ul>`;
    }

    const resultSection = document.getElementById("resultSection");
    resultSection.innerHTML = `
        <p class="bmi-category">${bmiCategory}</p>
        <h1 class="bmi-value">${bmi.toFixed(2)}</h1>
        <p class="bmi-category-info">Anda memiliki ${bmiCategory}</p>
        <button>Download Hasil BMI</button>
    `;

    const resultArticle = document.getElementById("resultArticle");
    resultArticle.innerHTML = `
        <p class="bmi-result">Hasil BMI ${bmiResult}</p>
        <p class="bmi-category">Anda berada dalam kategori ${bmiCategory}</p>
        <p class="bmi-information">${bmiInformation}</p>
        <p class="bmi-information2">${bmiInformation2}</p>
        <button class="button-konsultasi">Konsultasi Ahli Gizi Via Aplikasi</button>
        <button class="button-online">Registrasi Online Ahli Gizi</button>
        <p class="resultinformation">BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit
        seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.</p>
    `;

    const resultArticle2 = document.getElementById("resultArticle2");
    resultArticle2.innerHTML = `
        <p class="bmi-diagnosa">Beberapa penyakit yang berasal dari ${bmiDiagnosaKategori}</p>
        <p class="bmi-penyakit">${bmiPenyakit}</p>
        <button class="button-dokter">Konsultasi Dokter Via Aplikasi</button>
        <button class="button-registrasi">Registrasi Online Sekarang</button>
    `;
}
