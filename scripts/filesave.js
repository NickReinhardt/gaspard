function salvar() {
    let texto = document.getElementById("texto").textContent;
    let titulo = document.getElementById("titulo").value;
    var blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
    saveAs(blob, titulo + ".txt");
 }