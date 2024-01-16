const getCookie = (name) => {
  for (const cookie of document.cookie.split(";")) {
    if (cookie.split("=")[0].trim() === name) {
      return cookie.split("=")[1];
    }
  }
  return null;
};
const setCookie = (name, value) => {
  document.cookie = name + "=" + value + ";";
};


const showDesc = (skill) => {
if (skill.className.includes("open")) {
    skill.className = "skill"
} else {
    skill.className = "skill open"
}
} 

const showTab = (tab) => {
  console.log(tab);
  setCookie("currentTab", tab);
  for (const item of document.getElementsByClassName("tabContent")) {
    if (item.id === tab) {
      item.className = "tabContent active";
      continue;
    }
    item.className = "tabContent";
  }
  for (const item of document.getElementsByClassName("navElement")) {
    if (item.id === tab.replace("Tab", "Title")) {
      item.className = "navElement active";
      continue;
    }
    item.className = "navElement";
  }
};

var currentTab = getCookie("currentTab");
console.log(currentTab);
if (currentTab) {
  showTab(currentTab);
} else {
  showTab("projectsTab");
}

for (const tab of document.getElementsByClassName("navElement")) {
  tab.addEventListener("click", (e) => {
    showTab(tab.id.replace("Title", "Tab"));
  });
}
for (const skill of document.getElementsByClassName("skill")) {
    skill.addEventListener("click", (e) => {
      showDesc(skill);
    });
  }
