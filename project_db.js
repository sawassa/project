
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

/** users indexes **/
db.getCollection("users").ensureIndex({
  "username": NumberInt(1)
},{
  "unique": true
});

/** maintexts records **/
db.getCollection("maintexts").insert({
  "name": "Геолокация",
  "body": "<p>geo</p>",
  "url": "geo",
  "_id": ObjectId("551ad7f185db58b811acc586"),
  "__v": NumberInt(0)
});
db.getCollection("maintexts").insert({
  "_id": ObjectId("54ef78702375e9f012049256"),
  "__v": NumberInt(0),
  "body": "<p> Главная страница</p>",
  "name": " Главная",
  "url": "main"
});
db.getCollection("maintexts").insert({
  "_id": ObjectId("54f5ebd05f68c4701073de38"),
  "__v": NumberInt(0),
  "body": "<p> Птичь</p>",
  "name": "Птичь",
  "url": "rixen"
});
db.getCollection("maintexts").insert({
  "_id": ObjectId("54f5ec0d9fdb884413b94cd0"),
  "__v": NumberInt(0),
  "body": "<p> Цнянское водохранилище</p>",
  "name": "Цнянское водохранилище",
  "url": "zna"
});
db.getCollection("maintexts").insert({
  "_id": ObjectId("54f5ec373c5c437414476a83"),
  "__v": NumberInt(0),
  "body": "<p> Комсомольское озеро</p>",
  "name": "Комсомольское озеро",
  "url": "com_lake"
});
db.getCollection("maintexts").insert({
  "_id": ObjectId("54f88fe4836de4a40cee1678"),
  "__v": NumberInt(0),
  "body": "<p> Галерея</p>",
  "name": "Галерея",
  "url": "gallery"
});
db.getCollection("maintexts").insert({
  "_id": ObjectId("550882b0f40996b4056ca7b5"),
  "name": "Чат",
  "body": "<p>Чат</p>",
  "url": "chat",
  "__v": NumberInt(0)
});

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "name": "_id_",
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "project_db.users"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "name": "username_1",
  "key": {
    "username": NumberInt(1)
  },
  "unique": true,
  "ns": "project_db.users",
  "background": true,
  "safe": null
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "name": "_id_",
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "project_db.maintexts"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "name": "name_1",
  "key": {
    "name": NumberInt(1)
  },
  "unique": true,
  "ns": "project_db.maintexts",
  "background": true,
  "safe": null
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "name": "url_1",
  "key": {
    "url": NumberInt(1)
  },
  "unique": true,
  "ns": "project_db.maintexts",
  "background": true,
  "safe": null
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "name": "_id_",
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "project_db.things"
});

/** things records **/

/** users records **/
db.getCollection("users").insert({
  "_id": ObjectId("54f8a49c2655df10044c5406"),
  "username": "sawa",
  "hashedPassword": "test",
  "salt": "test",
  "created": ISODate("2015-03-05T18:46:52.383Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "_id": ObjectId("54ff3ffeac7187b40abdb5c9"),
  "username": "q",
  "hashedPassword": "778f5c5eb2d1205ecdcdddd9d9f0b7751f1e56b8",
  "salt": "0.22790962434373796 ",
  "created": ISODate("2015-03-10T19:03:26.548Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "_id": ObjectId("54ff4996059722bc080fe3b7"),
  "username": "a",
  "hashedPassword": "c9067b58be1d7a9dfd8c94668ae5e58f8e5e8541",
  "salt": "0.014297012472525239 ",
  "created": ISODate("2015-03-10T19:44:22.977Z"),
  "__v": NumberInt(0)
});
