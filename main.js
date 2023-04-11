const dataAll = fetch(
    'https://jsonplaceholder.typicode.com/posts?fbclid=IwAR0Ouy-LOl5dfcBm9SdwKwS3QvcQUhXlPcrqLd2Jl0QfhAQyeCuMVMLpy2w'
).then((res) => res.json())
    .then((data) => {
        // Tạo bảng HTML
        const table = document.querySelector('table');
        const tbody = document.querySelector('tbody');

        // Tạo tiêu đề của bảng
        const thead = table.createTHead();
        const headerRow = thead.insertRow();
        // Thêm class Bootstrap cho thẻ thead
        thead.classList.add('table-info');
        const headerCells = ['ID', 'Body', 'Title'];
        for (let cellText of headerCells) { 
            const headerCell = document.createElement('th');
            headerCell.textContent = cellText;
            headerRow.appendChild(headerCell);
        }

        // Tạo các hàng dữ liệu của bảng
        for (let user of data) {
        const dataRow = document.createElement('tr');
        const dataCells = [user.id, user.body, user.title];
        for (let cellText of dataCells) {
            const dataCell = document.createElement('td');
            dataCell.textContent = cellText;
            dataRow.appendChild(dataCell);
        }
        tbody.appendChild(dataRow);
        }

        table.appendChild(tbody);
        document.body.appendChild(table);

        
  })
  .catch(error => console.error(error));

