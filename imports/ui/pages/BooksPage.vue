<template>
  <v-app>
    <v-container class="pa-0" fluid>
      <v-app-bar color="deep-purple accent-4" dark dense>
        <v-menu bottom right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="logout">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-title>{{ getEmailAddress() }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-col>
          <v-toolbar-title>Book App</v-toolbar-title>
        </v-col>
      </v-app-bar>

      <books-content></books-content>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import BooksContent from "../components/books/BooksContent.vue";

export default Vue.extend({
  components: {BooksContent},
  data() {
    return {
      giftLists: []
    };
  },
  methods: {
    getEmailAddress() {
      const user = Meteor.user();
      if (user) {
        return user.emails[0].address;
      } else {
        return 'Not logged in';
      }
    },
    logout() {
      Meteor.logout();

      this.$router.push({
        name: 'Login'
      });
    },
  }
});
</script>
