
/** maintexts indexes **/
db.getCollection("maintexts").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** maintexts indexes **/
db.getCollection("maintexts").ensureIndex({
  "name": NumberInt(1)
},{
  "unique": true
});

/** maintexts indexes **/
db.getCollection("maintexts").ensureIndex({
  "url": NumberInt(1)
},{
  "unique": true
});

/** things indexes **/
db.getCollection("things").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** users indexes **/
db.getCollection("users").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** maintexts records **/
db.getCollection("maintexts").insert({
  "name": "Добро пожаловать на сайт",
  "body": "<p>Текст для главной страницы<\/p>",
  "url": "index",
  "_id": ObjectId("54ef6f98d393ac5c136582b2"),
  "__v": NumberInt(0)
});
db.getCollection("maintexts").insert({
  "name": "Обо мне",
  "body": "<p>Текст обо мне<\/p>",
  "url": "about",
  "_id": ObjectId("54ef70eb16a0f4801611c641"),
  "__v": NumberInt(0)
});
db.getCollection("maintexts").insert({
  "name": "Главная",
  "body": "<p>Главная страница<\/p>",
  "url": "main",
  "_id": ObjectId("54ef78702375e9f012049256"),
  "__v": NumberInt(0)
});
db.getCollection("maintexts").insert({
  "name": "Контакты",
  "body": "<p>Контактная информация<\/p>",
  "url": "contacts",
  "_id": ObjectId("54ef795a4352e320040c83ef"),
  "__v": NumberInt(0)
});
db.getCollection("maintexts").insert({
  "name": "Работа",
  "body": "<p>Все о моей работе<\/p>",
  "url": "work",
  "_id": ObjectId("54ef7985fe84df680e608766"),
  "__v": NumberInt(0)
});

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "project_db.users",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "project_db.things",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "project_db.maintexts",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "name": NumberInt(1)
  },
  "unique": true,
  "ns": "project_db.maintexts",
  "name": "name_1",
  "background": true,
  "safe": null
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "url": NumberInt(1)
  },
  "unique": true,
  "ns": "project_db.maintexts",
  "name": "url_1",
  "background": true,
  "safe": null
});

/** things records **/
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b1350c"),
  "x": 4,
  "j": 1
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b1350d"),
  "x": 4,
  "j": 2
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b1350e"),
  "x": 4,
  "j": 3
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b1350f"),
  "x": 4,
  "j": 4
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b13510"),
  "x": 4,
  "j": 5
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b13511"),
  "x": 4,
  "j": 6
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b13512"),
  "x": 4,
  "j": 7
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b13513"),
  "x": 4,
  "j": 8
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b13514"),
  "x": 4,
  "j": 9
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b13515"),
  "x": 4,
  "j": 10
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b13516"),
  "x": 4,
  "j": 11
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b13517"),
  "x": 4,
  "j": 12
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b13518"),
  "x": 4,
  "j": 13
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b13519"),
  "x": 4,
  "j": 14
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b1351a"),
  "x": 4,
  "j": 15
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b1351b"),
  "x": 4,
  "j": 16
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b1351c"),
  "x": 4,
  "j": 17
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b1351d"),
  "x": 4,
  "j": 18
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b1351e"),
  "x": 4,
  "j": 19
});
db.getCollection("things").insert({
  "_id": ObjectId("54ef59da95815e8339b1351f"),
  "x": 4,
  "j": 20
});

/** users records **/
db.getCollection("users").insert({
  "_id": ObjectId("54ef54ba6372fbb25af7b4e8"),
  "favorites": {
    "movies": [
      "Film1",
      "Film2"
    ]
  },
  "username": "Боб"
});
