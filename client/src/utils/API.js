import axios from "axios";

export default {
  // Gets all items
  getBooks: function() {
    return axios.get("/api/items");
  },
  // Gets the item with the given id
  getBook: function(id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the item with the given id
  deleteBook: function(id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves an item to the database
  saveBook: function(itemData) {
    return axios.post("/api/items", itemData);
  }
};
