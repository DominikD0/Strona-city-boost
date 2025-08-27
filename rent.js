```javascript
function updatePrice() {
const battery = parseInt(document.getElementById('batteries').value);
const charger = parseInt(document.getElementById('chargers').value);
let price = 0;
if (battery === 1) price += 150;
else if (battery === 2) price += 200;
else if (battery === 3) price += 275;
if (charger === 2) price += 10;
document.getElementById('total').innerText = 'Łączna cena: ' + price + ' zł';
}
document.getElementById('batteries').addEventListener('change', updatePrice);
document.getElementById('chargers').addEventListener('change', updatePrice);
updatePrice();
