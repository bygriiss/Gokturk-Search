document.getElementById('search-box').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    let results = [];

    // Örnek veri seti
    let data = [
        {title: "Araba", description: "Araba hakkında bilgi", url: "https://example.com/araba"},
        {title: "Elma", description: "Elma hakkında bilgi", url: "https://example.com/elma"},
        {title: "Bilgisayar", description: "Bilgisayar hakkında bilgi", url: "https://example.com/bilgisayar"},
        {title: "Telefon", description: "Telefon hakkında bilgi", url: "https://example.com/telefon"},
        {title: "Televizyon", description: "Televizyon hakkında bilgi", url: "https://example.com/televizyon"},
        {title: "Masa", description: "Masa hakkında bilgi", url: "https://example.com/masa"},
        {title: "Sandalye", description: "Sandalye hakkında bilgi", url: "https://example.com/sandalye"}
    ];

    for (let item of data) {
        if (item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)) {
            results.push(item);
        }
    }

    // Sonuçları göster
    let resultsList = document.getElementById('results');
    resultsList.innerHTML = '';

    for (let result of results) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = result.url;
        a.textContent = result.title;
        let desc = document.createElement('p');
        desc.textContent = result.description;
        li.appendChild(a);
        li.appendChild(desc);
        resultsList.appendChild(li);
    }
});
