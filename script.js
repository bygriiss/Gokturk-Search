document.getElementById('search-box').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    let results = [];
    
    // Burada örnek veri seti oluşturuyoruz
    let data = ["Araba", "Elma", "Bilgisayar", "Telefon", "Televizyon", "Masa", "Sandalye"];

    for (let item of data) {
        if (item.toLowerCase().includes(query)) {
            results.push(item);
        }
    }

    // Sonuçları göster
    let resultsList = document.getElementById('results');
    resultsList.innerHTML = '';

    for (let result of results) {
        let li = document.createElement('li');
        li.textContent = result;
        resultsList.appendChild(li);
    }
});
