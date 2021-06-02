<template>
    <v-btn @click="addBook">Add book</v-btn>
</template>

<script lang="ts">
import Vue from 'vue';
import {BookManager} from "../../managers/BookManager";
import {Book} from "../../../objects/book/Book";

export default Vue.extend({
  components: {  },
  data() {
    return {
      columns: []
    };
  },
  mounted() {
    this.updateBooks();
  },
  methods: {
    updateBooks() {
      BookManager.getInstance().getBooks((books) => {
        this.books = books;
      });
    },
    addBook() {
      const book = new Book();
      book.name = "Name"
      book.description = "Description"

      BookManager.getInstance().addBook(book, () => {

      });

      BookManager.getInstance().getBooks(books => {
        console.log(books)
      })
    },
  }
});
</script>

<style scoped></style>
