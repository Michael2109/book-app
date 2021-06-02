import {Meteor} from "meteor/meteor";
import {Book} from "../../objects/book/Book";

export class BookManager {

    private static instance: BookManager = new BookManager();

    static getInstance(): BookManager {
        return this.instance;
    }

    getBooks(callback: (books: Array<Book>) => void) {
        Meteor.call("getBooks", null, (err: any, res: Array<Book>) => {
            if (err) {
                console.error(err);
            } else {
                callback(res);
            }
        });
    }

    addBook(book: Book, callback: (id: string) => void) {
        Meteor.call("addBook", book, (err: any, id: string) => {
            if (err) {
                console.error(err);
            } else {
                callback(id);
            }
        });
    }
}
