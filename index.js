let activeTasks = 0
let overdueTasks = 0
let completedTasks = 0
let cancelButton = null
let addButton = null
newTaskButton = document.getElementById('new-task');
// console.log(newTaskButton)

newTaskButton.addEventListener('click', showNewtask)
    
update()

function showNewtask(e) {

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
    titleInput.id = 'title'
    titleInput.placeholder = 'Title of the Task'
    
    newTaskTitle.appendChild(titleInput)

    newTaskDescription = document.createElement('div')
    newTaskDescription.className = 'new-class-description'

    descriptionInput = document.createElement('input')
    descriptionInput.type = 'text'
    descriptionInput.id = 'description'
    descriptionInput.placeholder = 'Description of the Task'
    
    dateInput = document.createElement('input')
    dateInput.type = 'date'
    dateInput.id = 'date'

    newTaskDescription.appendChild(descriptionInput)
    newTaskDescription.appendChild(dateInput)
    
    newTaskDetails.appendChild(newTaskTitle)
    newTaskDetails.appendChild(newTaskDescription)

    addButton = document.createElement('button')
    addButton.className = 'button'
    addButton.id = 'add'
    addtext = document.createTextNode('Add')
    addButton.appendChild(addtext)

    cancelButton = document.createElement('button')
    cancelButton.className = 'button'
    cancelButton.id = 'cancel'
    canceltext = document.createTextNode('Cancel')
    cancelButton.appendChild(canceltext)

    newTask.appendChild(newTaskDetails)
    newTask.appendChild(addButton)
    newTask.appendChild(cancelButton)

    prev = document.getElementById('new-task');

    prev.parentNode.insertBefore(newTask, prev.nextSibling);

    cancelButton = document.getElementById('cancel')
    cancelButton.addEventListener('click', cancelNewTask)
    addButton = document.getElementById('add')
    addButton.addEventListener('click', addNewTask)

}

function cancelNewTask(e) {
    
    e.target.parentNode.remove();
}

function addNewTask(e) {

    title = document.getElementById('title').value
    description = document.getElementById('description').value
    date = document.getElementById('date').value
    if (title == '' || description == '' || date == '')
    {
        alert("Please fill all the fields!")
        return
    }
    activeTaskAdd(e)
}

function overdueTaskAdd(e) {

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
                    unselected = document.createElement('img')
                    unselected.src = 'unselected.png'
                    unselected.className = 'icons'
                    title.appendChild(unselected)

                    titleText = document.createTextNode(document.getElementById('title').value)
                    title.appendChild(titleText)
                }
                taskTitle.appendChild(title)

                editOptions = document.createElement('div')
                editOptions.className = 'edit-options'
                {
                    editImg = document.createElement('img')
                    editImg.src = 'edit.png'
                    editImg.className = 'icons'
                    editOptions.appendChild(editImg)

                    deleteImg = document.createElement('img')
                    deleteImg.src = 'delete.png'
                    deleteImg.className = 'icons'
                    editOptions.appendChild(deleteImg)

                    completeImg = document.createElement('img')
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
                    descriptionText = document.createTextNode(document.getElementById('description').value)
                    description.appendChild(descriptionText)
                }
                taskDescription.appendChild(description)

                date = document.createElement('div')
                date.className = 'deadline'
                {
                    dateText = document.createTextNode("Deadline: "+document.getElementById('date').value+"(Crossed!)")
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


function activeTaskAdd(e) {

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
                    unselected = document.createElement('img')
                    unselected.src = 'unselected.png'
                    unselected.className = 'icons'
                    title.appendChild(unselected)

                    titleText = document.createTextNode(document.getElementById('title').value)
                    title.appendChild(titleText)
                }
                taskTitle.appendChild(title)

                editOptions = document.createElement('div')
                editOptions.className = 'edit-options'
                {
                    editImg = document.createElement('img')
                    editImg.src = 'edit.png'
                    editImg.className = 'icons'
                    editOptions.appendChild(editImg)

                    deleteImg = document.createElement('img')
                    deleteImg.src = 'delete.png'
                    deleteImg.className = 'icons'
                    editOptions.appendChild(deleteImg)

                    completeImg = document.createElement('img')
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
                    descriptionText = document.createTextNode(document.getElementById('description').value)
                    description.appendChild(descriptionText)
                }
                taskDescription.appendChild(description)

                date = document.createElement('div')
                date.className = 'deadline'
                {
                    dateText = document.createTextNode("Deadline: "+document.getElementById('date').value)
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




function completedTaskAdd(e) {

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
                    unselected = document.createElement('img')
                    unselected.src = 'unselected.png'
                    unselected.className = 'icons'
                    title.appendChild(unselected)

                    titleText = document.createTextNode(document.getElementById('title').value)
                    title.appendChild(titleText)
                }
                taskTitle.appendChild(title)

                editOptions = document.createElement('div')
                editOptions.className = 'edit-options'
                {
                    editImg = document.createElement('img')
                    editImg.src = 'edit.png'
                    editImg.className = 'icons'
                    editOptions.appendChild(editImg)

                    deleteImg = document.createElement('img')
                    deleteImg.src = 'delete.png'
                    deleteImg.className = 'icons'
                    editOptions.appendChild(deleteImg)

                    completeImg = document.createElement('img')
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
                    descriptionText = document.createTextNode(document.getElementById('description').value)
                    description.appendChild(descriptionText)
                }
                taskDescription.appendChild(description)

                date = document.createElement('div')
                date.className = 'deadline'
                {
                    dateText = document.createTextNode("Deadline: "+document.getElementById('date').value)
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


function update() {

    if (overdueTasks != 0)
    {
        document.getElementsByClassName('task-heading overdue')[0].innerHTML = '<img src="selected.png" class="icons">Overdue[' + overdueTasks + ']<hr color="#aa6f73" size="3px">'
        document.getElementsByClassName('task-heading overdue')[0].style.display = 'flex';
    }
    else
        document.getElementsByClassName('task-heading overdue')[0].style.display = 'none';
    if (activeTasks != 0)
    {
        document.getElementsByClassName('task-heading active')[0].innerHTML = '<img src="selected.png" class="icons">Active[' + activeTasks + ']<hr color="#aa6f73" size="3px">'
        document.getElementsByClassName('task-heading active')[0].style.display = 'flex';
    }
    else
        document.getElementsByClassName('task-heading active')[0].style.display = 'none';
    if (completedTasks != 0)
    {
        document.getElementsByClassName('task-heading completed')[0].innerHTML = '<img src="selected.png" class="icons">Active[' + completedTasks + ']<hr color="#aa6f73" size="3px">'
        document.getElementsByClassName('task-heading completed')[0].style.display = 'flex';
    }
    else
        document.getElementsByClassName('task-heading completed')[0].style.display = 'none';
        
}