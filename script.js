// Call getDomain function when clicking button
document.getElementById('getDomain').addEventListener('click', getDomain)

 // Selecting the input html element and get its value
function getInputValue() {
  let inputVal = document.getElementById("myInput").value;
}  

// Get specific values from corresponding endpoint
function getDomain() {
   // Add value to end of URL to complete fetch URL and return JSON data
  fetch('https://unstoppabledomains.com/api/v1/'+ inputVal)
  .then(response => response.json()) 
}

// Display domain name and owner value from JSON data in HTML
document.getElementById('domainName').textContent = meta.domain;
document.getElementById('owner').textContent = meta.owner;
