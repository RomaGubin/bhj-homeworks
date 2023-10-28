const loader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();

function downOn() {
  loader.classList.toggle('loader_active');
}

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    downOn();
    const response = JSON.parse(xhr.responseText);
    const valute = response.response.Valute;

    for (let key in valute) {
      const charCode = valute[key].CharCode;
      const value = valute[key].Value;
      items.insertAdjacentHTML('beforeEnd', 
        `<div class="item__code">${charCode}</div>
        <div class="item__value">${value}</div>
        <div class="item__currency">руб.</div>`);
    }
  }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

