function createTodoItem(title, description, dueDate, priority, notes)
{
    return {
        title,
        description,
        dueDate,
        priority,
        notes
    };
}

function createNavigationBar()
{
    let nav = document.createElement('nav');
    nav.id = "navigation-bar";
    let title = document.createElement('div');
    title.id = 'title'; 
    title.textContent = "To-do List";
    nav.appendChild(title);
    return nav;
}

function createPageBody()
{
    let pageBody = document.createElement('div');
    pageBody.id = 'page-body';
    pageBody.appendChild(createSideMenu());
    /*pageBody.appendChild(createInbox());*/
    return pageBody;
}

function createSideMenu()
{
    let sideMenu = document.createElement('div');
    sideMenu.classList.add('side-menu');
    let horizontalLine = document.createElement('HR');
    horizontalLine.classList.add('horizontal-line');
    sideMenu.appendChild(createSideButton("Inbox", "inboxButton"));
    sideMenu.appendChild(createSideButton("Today", "todayButton"));
    sideMenu.appendChild(createSideButton("This Week", "weekButton"));
    sideMenu.appendChild(horizontalLine);
    sideMenu.appendChild(createProjectsButton());
    return sideMenu;
}



function createSideButton(name, id)
{
    let sideButton = document.createElement('button');
    sideButton.id = id;
    sideButton.textContent = name;
    sideButton.classList.add("side-button");
    return sideButton;
}

function createProjectsButton()
{
    let projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div');
    let projectTag = document.createElement('div');
    projectTag.textContent = "Projects";
    projectTag.classList.add('project-text');
    let projectButton = document.createElement('button');
    projectButton.textContent = "+";
    projectButton.classList = 'project-text add-project-button';
    projectButton.addEventListener('click', displayForm);
    let emptySpace = document.createElement('div');
    emptySpace.textContent = " ";
    projectDiv.appendChild(emptySpace);
    projectDiv.appendChild(projectTag);
    projectDiv.appendChild(projectButton);
    return projectDiv;
}

function createProjectPopupForm()
{

}

function displayForm() 
{
    document.getElementById("project-pop-up").style.display = "block";
}
  
function closeForm() 
{
    document.getElementById("project-pop-up").style.display = "none";
}

function createProjectLabel()
{
    let newProject = document.getElementById('project-name');
    projectName = newProject.value;
    newProject.classList.add('project-names');
    sideButtonCounter.push(projectName);
    let sideMenu = document.querySelector('.side-menu');
    sideMenu.appendChild(createSideButton(projectName, projectName));
    let projectSideButton = document.getElementById(projectName);
    console.log(projectSideButton);
    projectSideButton.addEventListener('click', callProjectPage);
    closeForm();
    return projectName;
}

function callProjectPage(e)
{
    let projectPage = document.getElementById(e.target.id);
    console.log(projectPage);
    let pageBody = document.getElementById('page-body');
    pageBody.appendChild(projectPage);
}

function createProjectPage()
{
    projectName = createProjectLabel();
    let projectPage = document.createElement('div');
    projectPage.id = projectName;
    projectPage.classList.add('project-page');
    let pageHeader = document.createElement('h1');
    pageHeader.classList.add('page-header');
    pageHeader.textContent = projectName;
    projectPage.appendChild(pageHeader);
}

function addCreateTaskButton()
{

}


/*function addProject()
{
    let projectName = createProjectPopupForm();
    let newProject = createSideButton(projectName, );
}*/

let sideButtonCounter = [];
let closeFormButton = document.getElementById('close-form');
closeFormButton.addEventListener('click', closeForm);
let submitFormButton = document.getElementById('submit-form');
submitFormButton.addEventListener('click', createProjectPage);
let content = document.querySelector('#content');
content.appendChild(createNavigationBar());
content.appendChild(createPageBody());