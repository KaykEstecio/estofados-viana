(function () {
  var savedTheme = localStorage.getItem("aconche-theme");
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var useDark = savedTheme ? savedTheme === "dark" : prefersDark;

  document.documentElement.classList.toggle("dark", useDark);
  document.documentElement.style.colorScheme = useDark ? "dark" : "light";
})();
