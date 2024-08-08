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

function sortTable(column, ascending) {

    const rows = Array.from(document.querySelectorAll('#tableBody tr'))
    const sortType = column === 0 || column === 1 ? 'number' : 'string'

    rows.sort((a, b) => {
        const aText = a.children[column].textContent
        const bText = b.children[column].textContent

        if (sortType === 'number') {
            return ascending ? aText - bText : bText - aText
        } else {
            return ascending ? aText.localeCompare(bText) : bText.localeCompare(aText)
        }
    });

    const tableBody = document.getElementById('tableBody')
    tableBody.innerHTML = ''
    rows.forEach(row => tableBody.appendChild(row))
}

function filterTable(query) {
    const rows = document.querySelectorAll('#tableBody tr')
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none'
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    loading.classList.add('active')
    const posts = await fetchPosts()
    renderTable(posts);
    loading.classList.remove('active')

    document.querySelectorAll('th').forEach(th => {
        let ascending = true
        th.addEventListener('click', () => {
            const column = Array.from(th.parentNode.children).indexOf(th);
            sortTable(column, ascending)
            ascending = !ascending;
        });
    });

    const searchInput = document.getElementById('search')
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase()
        if (query.length >= 3)        {
            filterTable(query)
        } else {
            renderTable(posts)
        }
    })
})
