// Вам необхідно написати додаток Todo list, 
// використовуючи синтаксис класів. 
// У списку нотаток повинні бути методи для додавання нової нотатки,
// видалення, редагування та отримання повної інформації про нотатку,
// а так само отримання списку всіх нотаток. Крім цього,
// у користувача має бути можливість позначити замітку, як виконану,
// і отримання інформації про те, скільки всього нотаток у списку 
// і скільки залишилося невиконань. Нотатки не повинні бути порожніми.

// Вам необхідно розширити можливості вашого списку і 
// додати методи для пошуку замітки на ім'я, 
// а також методи для сортування нотаток за статусом 
// (спочатку виконані і навпаки).

// Вам необхідно додати кожній нотатці дату її створення
//  і редагування, а також розширити можливості пошуку і сортування, 
//  включивши в них можливість роботи з датою.


class TodoList {
    constructor() {
        this.notes = [];
    }
    addNote(noteText) {
        if (noteText.trim() !== '') {
            this.notes.push({ text: noteText, done: false });
            console.log(`Нова нотатка додана: "${noteText}"`);
        } else {
            console.error('Помилка: Нотатка не може бути порожньою.');
        }
    }
    removeNote(noteIndex) {
        if (noteIndex >= 0 && noteIndex < this.notes.length) {
            const removedNote = this.notes.splice(noteIndex, 1)[0];
            console.log(`Нотатка видалена: "${removedNote.text}"`);
        } else {
            console.error('Помилка: Невірний індекс нотатки.');
        }
    }
    editNote(noteIndex, newText) {
        if (noteIndex >= 0 && noteIndex < this.notes.length && newText.trim() !== '') {
            this.notes[noteIndex].text = newText;
            console.log(`Нотатка відредагована: "${newText}"`);
        } else if (newText.trim() === '') {
            console.error('Помилка: Новий текст нотатки не може бути порожнім.');
        } else {
            console.error('Помилка: Невірний індекс нотатки.');
        }
    }

    markAsDone(noteIndex) {
        if (noteIndex >= 0 && noteIndex < this.notes.length) {
            this.notes[noteIndex].done = true;
            console.log(`Нотатка позначена як виконана: "${this.notes[noteIndex].text}"`);
        } else {
            console.error('Помилка: Невірний індекс нотатки.');
        }
    }
    getNoteInfo(noteIndex) {
        if (noteIndex >= 0 && noteIndex < this.notes.length) {
            const note = this.notes[noteIndex];
            console.log(`Інформація про нотатку ${noteIndex}:\nТекст: ${note.text}\nСтатус: ${note.done ? 'Виконано' : 'Не виконано'}`);
        } else {
            console.error('Помилка: Невірний індекс нотатки.');
        }
    }
    getAllNotes() {
        console.log('Список всіх нотаток:');
        this.notes.forEach((note, index) => {
            console.log(`${index}. ${note.text} - ${note.done ? 'Виконано' : 'Не виконано'}`);
        });
    }
    getNotesSummary() {
        const totalNotes = this.notes.length;
        const doneNotes = this.notes.filter(note => note.done).length;
        const undoneNotes = totalNotes - doneNotes;
        console.log(`Всього нотаток: ${totalNotes}\nВиконано: ${doneNotes}\nНе виконано: ${undoneNotes}`);
    }
}

    searchByName(searchText) {
        const matchingNotes = this.notes.filter(note => note.text.toLowerCase().includes(searchText.toLowerCase()));
        console.log(`Знайдені нотатки за запитом "${searchText}":`);
        matchingNotes.forEach((note, index) => {
            console.log(`${index}. ${note.text} - ${note.done ? 'Виконано' : 'Не виконано'}`);
        });
    }

    sortNotesByStatus() {
        this.notes.sort((a, b) => {
        return a.done === b.done ? 0 : a.done ? 1 : -1;
        });
        console.log('Нотатки відсортовані за статусом (виконані спочатку):');
        this.getAllNotes();
    }
todoList.searchByName("Приклад");
todoList.sortNotesByStatus();

class TodoList {
    constructor() {
        this.notes = [];
    }
    addNote(noteText) {
        if (noteText.trim() !== '') {
            const currentDate = new Date();
            this.notes.push({
                text: noteText,
                done: false,
                createdDate: currentDate,
                editedDate: currentDate
            });
            console.log(`Нова нотатка додана: "${noteText}"`);
        } else {
            console.error('Помилка: Нотатка не може бути порожньою.');
        }
    }
    updateEditDate(noteIndex) {
        if (noteIndex >= 0 && noteIndex < this.notes.length) {
            this.notes[noteIndex].editedDate = new Date();
        } else {
            console.error('Помилка: Невірний індекс нотатки.');
        }
    }
    searchByNameAndDate(searchText, startDate, endDate) {
        const matchingNotes = this.notes.filter(note => {
            const textMatch = note.text.toLowerCase().includes(searchText.toLowerCase());
            const dateMatch = startDate && endDate
                ? note.createdDate >= startDate && note.createdDate <= endDate
                : true;
            return textMatch && dateMatch;
        });

        console.log(`Знайдені нотатки за запитом "${searchText}" та датою:`);
        matchingNotes.forEach((note, index) => {
            console.log(`${index}. ${note.text} - ${note.done ? 'Виконано' : 'Не виконано'} - Створено: ${note.createdDate.toLocaleString()} - Редаговано: ${note.editedDate.toLocaleString()}`);
        });
    }
    sortNotesByDate() {
        this.notes.sort((a, b) => a.createdDate - b.createdDate);
        console.log('Нотатки відсортовані за датою створення:');
        this.getAllNotes();
    }
}
const todoList = new TodoList();
todoList.addNote("Приклад 1");
todoList.addNote("Приклад 2");
todoList.updateEditDate(0);  
todoList.searchByNameAndDate("Приклад", null, null);
// Сортування за датою
todoList.sortNotesByDate();
