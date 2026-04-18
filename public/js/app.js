const MAX_IDLE = 10 * 60 * 1000; // 10 menit

// CEK LOGIN
const user = localStorage.getItem('user');

if (!user) {
    window.location.href = '/login';
}

// AMBIL LAST ACTIVITY
let last = localStorage.getItem('lastActivity');

// JIKA BELUM ADA → SET SEKARANG
if (!last) {
    last = Date.now();
    localStorage.setItem('lastActivity', last);
}

// CEK IDLE
function checkIdle() {
    const now = Date.now();
    const last = localStorage.getItem('lastActivity');

    if (now - last > MAX_IDLE) {
        alert("Session habis karena tidak aktif");
        logout();
    }
}

// UPDATE AKTIVITAS
function updateActivity() {
    localStorage.setItem('lastActivity', Date.now());
}

// DETEKSI AKTIVITAS USER
["click", "mousemove", "keydown", "scroll"].forEach(event => {
    window.addEventListener(event, updateActivity);
});

// CEK SAAT LOAD
checkIdle();

// CEK BERKALA
setInterval(checkIdle, 5000);

// LOGOUT
function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('lastActivity');
    window.location.href = '/login';
}