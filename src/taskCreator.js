


export function createTask(formData) {

    this.title = formData.title;
    this.description = formData.description;
    this.dueDate = formData.dueDate;
    this.priorityLevel = formData.priorityLevel;
    this.noteContents = formData.noteContents;
    this.checkList = formData.checkList;

    return {
        formData: {
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            priorityLevel: this.priorityLevel,
            noteContents: this.noteContents,
            checkList: this.checkList,
        },
    };
}

    

