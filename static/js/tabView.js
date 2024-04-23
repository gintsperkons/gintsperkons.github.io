let tabTitleList = document.getElementsByClassName("tabTitle");

const resetActive = () => {
    for (let i = 0; i < tabTitleList.length; i++) {
        tabTitleList[i].classList.remove("active");
        document.getElementById(tabTitleList[i].id.split("_")[0]+"_TabContent").
        classList.remove("active");
    }
}

const selectTab = (tabId) => {
    localStorage.setItem("activeTab", tabId);
    resetActive();
    if (document.getElementById(tabId+"_TabTitle") == null) {
        return;
    }
    document.getElementById(tabId+"_TabTitle").classList.add("active");
    document.getElementById(tabId+"_TabContent").classList.add("active");
}

localStorage.getItem("activeTab") ? selectTab(localStorage.getItem("activeTab")) : selectTab("about");

for (let i = 0; i < tabTitleList.length; i++) {
    tabTitleList[i].addEventListener("click", function (e) {
        selectTab(tabTitleList[i].id.split("_")[0]);
    });

}