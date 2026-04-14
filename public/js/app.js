async function getData() {
    const res = await fetch('/api');
    const data = await res.json();
    document.getElementById('result').innerText = data.message;
}
if (!localStorage.getItem('user')) {
    window.location.href = '/login';
}

function logout() {
    localStorage.removeItem('user');
    window.location.href = '/login';
}