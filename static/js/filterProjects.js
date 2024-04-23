const filterProjects = () =>
{
    let projectLists = document.getElementsByClassName('project');
    let filter = document.getElementById('filterSelectType').value;
    for (let i = 0; i < projectLists.length; i++) {
        if (projectLists[i].getAttribute("filterType") == filter || filter == 'all') {
            projectLists[i].style.display = '';
            console.log(projectLists[i]);
            console.log(projectLists[i].getAttribute("filterType").value);
        } else {
            projectLists[i].style.display = 'none';
        }
    }
    console.log(projectLists);
}