function includeHTML(callback) {
    const elements = document.querySelectorAll('[data-include]');
    let count = elements.length;
  
    if (count === 0 && typeof callback === 'function') callback();
  
    elements.forEach(el => {
      const file = el.getAttribute('data-include');
      fetch(file)
        .then(response => response.text())
        .then(data => {
          el.innerHTML = data;
          el.removeAttribute('data-include');
          count--;
          if (count === 0 && typeof callback === 'function') {
            callback(); // gọi hàm callback khi tất cả include xong
          }
        });
    });
  }
  