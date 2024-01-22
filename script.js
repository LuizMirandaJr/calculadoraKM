const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    

    const distancia = document.getElementById('distancia').value;
    const consumo = document.getElementById('consumo').value;
    const preco = document.getElementById('preco').value;

    const totalKm = (distancia / consumo).toFixed(2);
    const totalPreco = preco * (distancia / consumo);

    document.getElementById('resultado').classList.remove('hidden');

    document.getElementById('litros').innerHTML = totalKm + "" + " Litros";
    document.getElementById('reais').innerHTML = "R$" + totalPreco.toFixed(2);

    console.log(totalKm)
    console.log(totalPreco)

});