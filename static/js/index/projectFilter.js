[(projectType = "Games")].project;

const handleFilterChange = (filterValue) => {
  for (const project of document.getElementsByClassName("project")) {
    if (project.getAttribute("projectType") == filterValue ||filterValue == "all" ) {
      project.style.display = "flex";
      continue;
    }
    project.style.display = "none";
  }
};

document.getElementById("projectFilter").addEventListener("change", (e) => {
  handleFilterChange(e.target.value);
  const url = new URL(window.location.href);
  url.searchParams.set("filter",e.target.value)
  window.history.pushState({},document.title,url.href)
});

const urlParams = new URLSearchParams(window.location.search);
const filterValue = urlParams.get("filter");
if (filterValue) {
  document.getElementById("projectFilter").value = filterValue;
  handleFilterChange(filterValue);
} else {
  document.getElementById("projectFilter").value = "all";
  handleFilterChange("all");
}
