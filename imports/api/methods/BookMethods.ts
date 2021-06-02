import {BookCollectionManager} from "../collections/BookCollectionManager";
import {Book} from "../../objects/book/Book";

Meteor.methods({
    "getBooks": function (): Book[] {
        return BookCollectionManager.getInstance().getBooks();
    },
    "addBook": function (book: Book): string {
        return BookCollectionManager.getInstance().insert(book);
    }
});
