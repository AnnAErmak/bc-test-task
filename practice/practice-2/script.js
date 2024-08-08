document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            let postsBody = document.getElementById('postsBody');
            data.forEach(post => {
                let row = document.createElement('tr');

                let cellUserId = document.createElement('td');
                cellUserId.textContent = post.userId;
                row.appendChild(cellUserId);

                let cellId = document.createElement('td');
                cellId.textContent = post.id;
                row.appendChild(cellId);

                let cellTitle = document.createElement('td');
                cellTitle.textContent = post.title;
                row.appendChild(cellTitle);

                let cellBody = document.createElement('td');
                cellBody.textContent = post.body;
                row.appendChild(cellBody);

                postsBody.appendChild(row);
            });
        })
        .catch(error => console.error('Ошибка:', error));
});
