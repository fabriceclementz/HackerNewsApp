import * as firebase from 'firebase';

const DATABASE_URL = 'https://hacker-news.firebaseio.com';
const VERSION = '/v0';
const config = { databaseURL: DATABASE_URL };
firebase.initializeApp(config);
const database = firebase.database().ref(VERSION);

function storiesRef(type) {
  return database.child(`${type}stories`);
}

function itemRef(id) {
  return database.child(`item/${id}`);
}

function userRef(id) {
  return database.child(`user/${id}`);
}

function fetch(ref, cb) {
  ref.on('value', snapshot => cb(snapshot.val()));
}

function fetchType(type, cb) {
  fetch(storiesRef(type), cb);
}

function fetchItem(id, cb) {
  fetch(itemRef(id), cb);
}

function fetchUser(id, cb) {
  fetch(userRef(id), cb);
}

function fetchItems(ids, cb) {
  let items = [];
  ids.forEach(id => fetchItem(id, addItem));
  function addItem(item) {
    items.push(item);
    if (items.length >= ids.length) {
      cb(items);
    }
  }
}

export { fetchItems, fetchType, fetchUser };
