import {Mongo} from 'meteor/mongo';
import {Book} from "../../objects/book/Book";

export class BookCollectionManager {

    BookCollection: Mongo.Collection<Book> = new Mongo.Collection<Book>('books');

    private static instance: BookCollectionManager = new BookCollectionManager();

    static getInstance(): BookCollectionManager {
        return this.instance;
    }

    insert(book: Book): string {
        const Future = Npm.require('fibers/future');
        let future = new Future();

        book.userId = Meteor.userId();

        const id: string = this.BookCollection.insert(book, () => {
            future.return();
        });

        future.wait();

        return id;
    }

    getById(id: string) : Book | undefined{
        return this.BookCollection.findOne({_id: id});
    }

    deleteById(id: string): boolean {
        this.BookCollection.remove({"_id": id});

        return true;
    }

    getBooks(): Book[] {
        return this.BookCollection.find({userId: Meteor.userId()}).fetch();
    }

    clearAll(): void {
        this.BookCollection.remove({});
    }
}
