function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
 
    let searchedTextRef = document.getElementById('searchField');
    let tableRowRef = document.querySelectorAll('tbody tr');
 
    function onClick() {
       let searchedText = searchedTextRef.value;
       searchedTextRef.value = '';
 
       for (let row of tableRowRef) {
          let tableDataRef = row.querySelectorAll('td');
 
          for (let data of tableDataRef) {
             if (data.textContent.includes(searchedText)) {
                row.classList.add('select');
                break;
             } else {
                row.classList.remove('select');
             }
          }
       }
    }
 }