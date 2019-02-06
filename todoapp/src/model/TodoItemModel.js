// ユニークなIDを管理する変数
let todoIdx = 0;

export class TodoItemModel {

    constructor({ title, completed }) {
        // idは自動的に連番となりそれぞれのインスタンス毎に異なるものとする
        this.id = todoIdx++;
        this.title = title;
        this.completed = completed;
    }
}