const tableBody = document.getElementById('tableBody')
const loading = document.querySelector('.loading')

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data
}

function renderTable(data) {
    tableBody.innerHTML = ''

    data.forEach(post => {
        const row = document.createElement('tr')
        row.innerHTML = `
                <td>${post.userId}</td>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
            `;
        tableBody.appendChild(row)
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    loading.classList.add('active')
    const posts = await fetchPosts()
    renderTable(posts);
    loading.classList.remove('active')
})
