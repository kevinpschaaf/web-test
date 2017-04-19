document.addEventListener('readystatechange', function() {
  if (document.readyState == 'complete') {
    var h2 = document.createElement('h2');
    h2.textContent = 'Dynamic script loaded!';
    document.body.appendChild(h2);
  }
});