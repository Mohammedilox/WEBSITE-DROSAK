const sidebar = document.getElementById('sidebar');
  const content = document.querySelector('.content');

  document.getElementById('toggleSidebar').addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
  });

  // Theme toggle
  document.getElementById('toggleTheme').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute("data-bs-theme");
    document.documentElement.setAttribute("data-bs-theme", currentTheme === "dark" ? "light" : "dark");
  });

  // Lang toggle
  document.getElementById('toggleLang').addEventListener('click', () => {
    alert('Language toggling feature will be added soon!');
  });