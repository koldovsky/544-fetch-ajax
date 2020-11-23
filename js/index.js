document.querySelector('.timestamp')
    .innerText = new Date().toLocaleTimeString();

document.querySelector('.btn-fetch-html')
    .addEventListener('click', fetchHtml);

function fetchHtml() {
    fetch('client-data.html')
      .then( response => response.text() )  
      .then( html => document.querySelector('.html-container').innerHTML = html );  
}

document.querySelector('.btn-ajax-html')
    .addEventListener('click', ajaxHtml);

function ajaxHtml() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-container').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();
}

document.querySelector('.btn-fetch-json')
    .addEventListener('click', fetchJson);

function fetchJson() {
    fetch('client-data.json')
      .then( response => response.json() )  
      .then( clientData => {
          document.querySelector('.client-name').innerText = clientData.name;  
          document.querySelector('.account-balance').innerText = clientData.balance;  
      } );  
}

fetch('https://cors-anywhere.herokuapp.com/covid-api.mmediagroup.fr/v1/cases')
    .then( response => response.json() )
    .then( data => document.querySelector('.covid').innerText =
     data.Ukraine.All.confirmed )