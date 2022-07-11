let activeTasks = 0
let overdueTasks = 0
let completedTasks = 0
let cancelButton = null
let addButton = null
newTaskButton = document.getElementById('new-task');
newTaskButton.setAttribute('onclick','showNewTask()')
// console.log(newTaskButton)

function showNewTask(Title = "Hehe", Description = "Hehe", DateDeadline = "1111-11-11") {

    if (document.getElementsByClassName('new-task').length != 0)
        return

    newTask = document.createElement('div')
    newTask.className = 'new-task'

    newTaskDetails = document.createElement('div')
    newTaskDetails.className = 'new-task-details'

    newTaskTitle = document.createElement('div')
    newTaskTitle.className = 'new-class-title'

    titleInput = document.createElement('input')
    titleInput.type = 'text'
    titleInput.value = Title
    titleInput.id = 'title'
    titleInput.placeholder = 'Title of the Task'
    
    newTaskTitle.appendChild(titleInput)

    newTaskDescription = document.createElement('div')
    newTaskDescription.className = 'new-class-description'

    descriptionInput = document.createElement('input')
    descriptionInput.value = Description
    descriptionInput.type = 'text'
    descriptionInput.id = 'description'
    descriptionInput.placeholder = 'Description of the Task'
    
    dateInput = document.createElement('input')
    dateInput.value = DateDeadline
    dateInput.type = 'date'
    dateInput.id = 'date'

    newTaskDescription.appendChild(descriptionInput)
    newTaskDescription.appendChild(dateInput)
    
    newTaskDetails.appendChild(newTaskTitle)
    newTaskDetails.appendChild(newTaskDescription)

    addButton = document.createElement('button')
    addButton.setAttribute('onclick','addNewTask()')
    addButton.className = 'button'
    addButton.id = 'add'
    addtext = document.createTextNode('Add')
    addButton.appendChild(addtext)

    cancelButton = document.createElement('button')
    cancelButton.setAttribute('onclick','cancelNewTask(this)')
    cancelButton.className = 'button'
    cancelButton.id = 'cancel'
    canceltext = document.createTextNode('Cancel')
    cancelButton.appendChild(canceltext)

    newTask.appendChild(newTaskDetails)
    newTask.appendChild(addButton)
    newTask.appendChild(cancelButton)

    prev = document.getElementById('new-task');
    prev.parentNode.insertBefore(newTask, prev.nextSibling);


}

function cancelNewTask(e) {
    
    e.parentNode.remove()
}

function addNewTask() {

    title = document.getElementById('title').value
    description = document.getElementById('description').value
    date = document.getElementById('date').value
    givenDate = date.split("-")
    if (title == '' || description == '' || date == '')
    {
        alert("Please fill all the fields!")
        return
    }
    currentDate = new Date();
    
    if (~~givenDate[0] < currentDate.getFullYear())
        overdueTaskAdd(title, description, date)
    else if (~~givenDate[0] > currentDate.getFullYear())
        activeTaskAdd(title, description, date)
    else
    {
        if (~~givenDate[1] < currentDate.getMonth() + 1)
            overdueTaskAdd(title, description, date)
        else if (~~givenDate[1] > currentDate.getMonth() + 1)
            activeTaskAdd(title, description, date)
        else
        {
            if (~~givenDate[2] < currentDate.getDate())
                overdueTaskAdd(title, description, date)
            else (~~givenDate[2] > currentDate.getDate())
                activeTaskAdd(title, description, date)
        }
    }

}

function overdueTaskAdd(Title = document.getElementById('title').value, Description = document.getElementById('description').value, DateDeadline = document.getElementById('date').value) {

    overdueTasks++
    update()
    
    {
        task = document.createElement('div')
        task.className = 'task overdue'
        {
            taskTitle = document.createElement('div')
            taskTitle.className = 'task-title'
            {
                title = document.createElement('div')
                title.className = 'title'
                {
                    unselected = document.createElement('input')
                    unselected.type = 'image'
                    unselected.src = 'unselected.png'
                    unselected.className = 'icons'
                    title.appendChild(unselected)

                    titleText = document.createTextNode(Title)
                    title.appendChild(titleText)
                }
                taskTitle.appendChild(title)

                editOptions = document.createElement('div')
                editOptions.className = 'edit-options'
                {
                    editImg = document.createElement('input')
                    editImg.setAttribute('onclick','editTask(this)')
                    editImg.type = 'image'
                    editImg.src = 'edit.png'
                    editImg.className = 'icons'
                    editOptions.appendChild(editImg)

                    deleteImg = document.createElement('input')
                    deleteImg.setAttribute('onclick','deleteTask(this)')
                    deleteImg.type = 'image'
                    deleteImg.src = 'delete.png'
                    deleteImg.className = 'icons'
                    editOptions.appendChild(deleteImg)

                    completeImg = document.createElement('input')
                    completeImg.setAttribute('onclick','completeTask(this)')
                    completeImg.type = 'image'
                    completeImg.src = 'completed.png'
                    completeImg.className = 'icons'
                    editOptions.appendChild(completeImg)

                }
                taskTitle.appendChild(editOptions)
            }
            task.appendChild(taskTitle)
      
            taskDescription = document.createElement('div')
            taskDescription.className = 'task-description'
            {
                description = document.createElement('div')
                description.className = 'description'
                {
                    descriptionText = document.createTextNode(Description)
                    description.appendChild(descriptionText)
                }
                taskDescription.appendChild(description)

                date = document.createElement('div')
                date.className = 'deadline'
                {
                    dateText = document.createTextNode("Deadline(Crossed!): "+DateDeadline)
                    date.appendChild(dateText)
                }
                taskDescription.appendChild(date)
            }
            task.appendChild(taskDescription)
        }
    }

    prev = document.getElementsByClassName('task-heading overdue')[0]
    prev.parentNode.insertBefore(task, prev.nextSibling)


}


function activeTaskAdd(Title = document.getElementById('title').value, Description = document.getElementById('description').value, DateDeadline = document.getElementById('date').value) {

    activeTasks++
    update()
    
    {
        task = document.createElement('div')
        task.className = 'task active'
        {
            taskTitle = document.createElement('div')
            taskTitle.className = 'task-title'
            {
                title = document.createElement('div')
                title.className = 'title'
                {
                    unselected = document.createElement('input')
                    unselected.type = 'image'
                    unselected.src = 'unselected.png'
                    unselected.className = 'icons'
                    title.appendChild(unselected)

                    titleText = document.createTextNode(Title)
                    title.appendChild(titleText)
                }
                taskTitle.appendChild(title)

                editOptions = document.createElement('div')
                editOptions.className = 'edit-options'
                {
                    editImg = document.createElement('input')
                    editImg.setAttribute('onclick','editTask(this)')
                    editImg.type = 'image'
                    editImg.src = 'edit.png'
                    editImg.className = 'icons'
                    editOptions.appendChild(editImg)

                    deleteImg = document.createElement('input')
                    deleteImg.setAttribute('onclick','deleteTask(this)')
                    deleteImg.type = 'image'
                    deleteImg.src = 'delete.png'
                    deleteImg.className = 'icons'
                    editOptions.appendChild(deleteImg)

                    completeImg = document.createElement('input')
                    completeImg.setAttribute('onclick','completeTask(this)')
                    completeImg.type = 'image'
                    completeImg.src = 'completed.png'
                    completeImg.className = 'icons'
                    editOptions.appendChild(completeImg)

                }
                taskTitle.appendChild(editOptions)
            }
            task.appendChild(taskTitle)
      
            taskDescription = document.createElement('div')
            taskDescription.className = 'task-description'
            {
                description = document.createElement('div')
                description.className = 'description'
                {
                    descriptionText = document.createTextNode(Description)
                    description.appendChild(descriptionText)
                }
                taskDescription.appendChild(description)

                date = document.createElement('div')
                date.className = 'deadline'
                {
                    dateText = document.createTextNode("Deadline: "+DateDeadline)
                    date.appendChild(dateText)
                }
                taskDescription.appendChild(date)
            }
            task.appendChild(taskDescription)
        }
    }

    prev = document.getElementsByClassName('task-heading active')[0]
    prev.parentNode.insertBefore(task, prev.nextSibling)

    
}


function completedTaskAdd(Title = document.getElementById('title').value, Description = document.getElementById('description').value, DateDeadline = document.getElementById('date').value) {

    completedTasks++
    update()
    
    {
        task = document.createElement('div')
        task.className = 'task completed'
        {
            taskTitle = document.createElement('div')
            taskTitle.className = 'task-title'
            {
                title = document.createElement('div')
                title.className = 'title'
                {
                    unselected = document.createElement('input')
                    unselected.type = 'image'
                    unselected.src = 'unselected.png'
                    unselected.className = 'icons'
                    title.appendChild(unselected)

                    titleText = document.createTextNode(Title)
                    title.appendChild(titleText)
                }
                taskTitle.appendChild(title)

                editOptions = document.createElement('div')
                editOptions.className = 'edit-options'
                {
                    editImg = document.createElement('input')
                    editImg.setAttribute('onclick','editTask(this)')
                    editImg.type = 'image'
                    editImg.src = 'edit.png'
                    editImg.className = 'icons'
                    editOptions.appendChild(editImg)

                    deleteImg = document.createElement('input')
                    deleteImg.setAttribute('onclick','deleteTask(this)')
                    deleteImg.type = 'image'
                    deleteImg.src = 'delete.png'
                    deleteImg.className = 'icons'
                    editOptions.appendChild(deleteImg)

                }
                taskTitle.appendChild(editOptions)
            }
            task.appendChild(taskTitle)
      
            taskDescription = document.createElement('div')
            taskDescription.className = 'task-description'
            {
                description = document.createElement('div')
                description.className = 'description'
                {
                    descriptionText = document.createTextNode(Description)
                    description.appendChild(descriptionText)
                }
                taskDescription.appendChild(description)

                date = document.createElement('div')
                date.className = 'deadline'
                {
                    dateText = document.createTextNode("Deadline: "+DateDeadline)
                    date.appendChild(dateText)
                }
                taskDescription.appendChild(date)
            }
            task.appendChild(taskDescription)
        }
    }

    prev = document.getElementsByClassName('task-heading completed')[0]
    prev.parentNode.insertBefore(task, prev.nextSibling)


}

function deleteTask(e) {

    task = e.parentNode.parentNode.parentNode
    if (task.className == 'task overdue')
        overdueTasks--
    if (task.className == 'task active')
        activeTasks--
    if (task.className == 'task completed')
        completedTasks--

    task.remove()
    update()

}

function editTask(e) {
    
    Title = e.parentNode.previousSibling.innerText
    Description = e.parentNode.parentNode.nextSibling.childNodes[0].innerText
    DateDeadline = e.parentNode.parentNode.nextSibling.childNodes[1].innerText.split(" ")[1]
    deleteTask(e)
    e = document.getElementById('cancel')
    try {
        cancelNewTask(e)
    }
    catch (err) {
        console.log("The new task was closed")
    }
    showNewTask(Title, Description, DateDeadline)
    update()

}

function completeTask(e) {
    Title = e.parentNode.previousSibling.innerText
    Description = e.parentNode.parentNode.nextSibling.childNodes[0].innerText
    DateDeadline = e.parentNode.parentNode.nextSibling.childNodes[1].innerText.split(" ")[1]
    deleteTask(e)
    completedTaskAdd(Title, Description, DateDeadline)
    update()
}

function update() {

    if (overdueTasks > 0)
    {
        document.getElementsByClassName('task-heading overdue')[0].innerHTML = '<img src="selected.png" class="icons">Overdue[' + overdueTasks + ']<hr color="#aa6f73" size="3px">'
        document.getElementsByClassName('task-heading overdue')[0].style.display = 'flex';
    }
    else
    {
        document.getElementsByClassName('task-heading overdue')[0].style.display = 'none';
        document.getElementsByClassName('task-heading overdue')[0].innerHTML = ''
    }
        
    if (activeTasks > 0) {
        document.getElementsByClassName('task-heading active')[0].innerHTML = '<img src="selected.png" class="icons">Active[' + activeTasks + ']<hr color="#aa6f73" size="3px">'
        document.getElementsByClassName('task-heading active')[0].style.display = 'flex';
    }
    else {
        document.getElementsByClassName('task-heading active')[0].style.display = 'none';
        document.getElementsByClassName('task-heading active')[0].innerHTML = ''
    }
    if (completedTasks > 0) {
        document.getElementsByClassName('task-heading completed')[0].innerHTML = '<img src="selected.png" class="icons">Completed[' + completedTasks + ']<hr color="#aa6f73" size="3px">'
        document.getElementsByClassName('task-heading completed')[0].style.display = 'flex';
    }
    else {
        document.getElementsByClassName('task-heading completed')[0].style.display = 'none';
        document.getElementsByClassName('task-heading completed')[0].innerHTML = ''
    }  
}