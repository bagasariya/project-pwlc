document.addEventListener("DOMContentLoaded", () => {

  const sidebarHTML = `
    <div class="sidebar d-flex flex-column p-3">

      <h4 class="text-center mb-4">PT Mencari Cinta Sejati</h4>

      <ul class="nav nav-pills flex-column mb-auto">

        <li>
          <a href="/dashboard" class="nav-link text-white">
            📊 Dashboard
          </a>
        </li>

        <li>
          <a href="/karyawan" class="nav-link text-white">
            👨‍💼 Karyawan
          </a>
        </li>

        <li>
          <a href="/area" class="nav-link text-white">
            📍 Area
          </a>
        </li>

        <li>
          <a href="/pekerjaan" class="nav-link text-white">
            🏗️ Pekerjaan
          </a>
        </li>

      </ul>

      <hr>

      <button onclick="logout()" class="btn btn-danger w-100">
        Logout
      </button>

    </div>
  `;

  document.getElementById("sidebar").innerHTML = sidebarHTML;

  // ACTIVE MENU
  const links = document.querySelectorAll(".nav-link");
  const current = window.location.pathname;

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

});