
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      const responseData = JSON.parse(xhr.responseText);
      getCurrencyRates(responseData);
    } else {
        console.log('Error:', xhr.status);
      }
  }
});
  
xhr.send();

function getCurrencyRates(responseData) {
  const itemsContainer = document.getElementById('items');
  
  for (const currencyCode in responseData.response.Valute) {
    const currency = responseData.response.Valute[currencyCode];
  
    const item = document.createElement('div');
    item.classList.add('item');
  
    const code = document.createElement('div');
    code.classList.add('item__code');
    code.textContent = currency.CharCode;
  
    const value = document.createElement('div');
    value.classList.add('item__value');
    value.textContent = currency.Value;
  
    const currencyName = document.createElement('div');
    currencyName.classList.add('item__currency');
    currencyName.textContent = 'руб.';
      
    itemsContainer.appendChild(item);
      
    item.appendChild(code);
    item.appendChild(value);
     item.appendChild(currencyName);  
    }
  hideLoader();
}
  
function hideLoader() {
  const loader = document.getElementById('loader');
  loader.classList.remove('loader_active');
}
  
loadCurrencyRates();