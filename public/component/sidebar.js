document.addEventListener("DOMContentLoaded", () => {

  const sidebarHTML = `
    <div class="sidebar d-flex flex-column p-3 shadow">
      <h4 class="text-center mb-4">PT FJM</h4>
      <ul class="nav nav-pills flex-column mb-auto">
        <li>
          <a href="/dashboard" class="nav-link text-white">
            <i class="bi bi-speedometer2"></i> Dashboard
          </a>
        </li>
        <li>
          <a href="/karyawan2" class="nav-link text-white">
            <i class="bi bi-people"></i> Karyawan
          </a>
        </li>
        <li>
          <a href="/area" class="nav-link text-white">
            <i class="bi bi-geo-alt"></i> Area
          </a>
        </li>
        <li>
          <a href="/pekerjaan" class="nav-link text-white">
            <i class="bi bi-hammer"></i> Pekerjaan
          </a>
        </li>
        <li>
          <a href="/proyek" class="nav-link text-white">
            <i class="bi bi-building"></i> Proyek
          </a>
        </li>
        <li>
          <a href="/penugasan" class="nav-link text-white">
            <i class="bi bi-person-check"></i> Penugasan
          </a>
        </li>
        <li>
          <a href="/progress" class="nav-link text-white">
            <i class="bi bi-bar-chart"></i> Progress
          </a>
        </li>
      </ul>
      <hr>
      <button onclick="logout()" class="btn btn-danger w-100">Logout</button>
    </div>
  `;

  // inject sidebar
  const container = document.getElementById("sidebar");
  if (container) {
    container.innerHTML = sidebarHTML;
  }

  // ACTIVE MENU
  const links = document.querySelectorAll(".nav-link");
  const current = window.location.pathname;

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (current.includes(href)) {
      link.classList.add("active");
    }
  });

});