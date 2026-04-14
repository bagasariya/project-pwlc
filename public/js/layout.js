async function loadSidebar() {
  const res = await fetch('/component/sidebar.html');
  const html = await res.text();

  document.getElementById("sidebar").innerHTML = html;
}

window.onload = loadSidebar;