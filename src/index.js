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

}

function createSideMenu()
{

}

function 



let content = document.querySelector('#content');
content.appendChild(createNavigationBar());