
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
  "__v": NumberInt(0),
  "_id": ObjectId("54ef78702375e9f012049256"),
  "body": "<p> Главная страница<\/p>",
  "name": " Главная",
  "url": "main"
});
db.getCollection("maintexts").insert({
  "__v": NumberInt(0),
  "_id": ObjectId("54f5ebd05f68c4701073de38"),
  "body": "<p> Птичь<\/p>",
  "name": "Птичь",
  "url": "rixen"
});
db.getCollection("maintexts").insert({
  "__v": NumberInt(0),
  "_id": ObjectId("54f5ec0d9fdb884413b94cd0"),
  "body": "<p> Цнянское водохранилище<\/p>",
  "name": "Цнянское водохранилище",
  "url": "zna"
});
db.getCollection("maintexts").insert({
  "__v": NumberInt(0),
  "_id": ObjectId("54f5ec373c5c437414476a83"),
  "body": "<p> Комсомольское озеро<\/p>",
  "name": "Комсомольское озеро",
  "url": "com_lake"
});
db.getCollection("maintexts").insert({
  "__v": NumberInt(0),
  "_id": ObjectId("54f88fe4836de4a40cee1678"),
  "body": "<p> Галерея<\/p>",
  "name": "Галерея",
  "url": "gallery"
});
db.getCollection("maintexts").insert({
  "name": "Чат",
  "body": "<p>Чат<\/p>",
  "url": "chat",
  "_id": ObjectId("550882b0f40996b4056ca7b5"),
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
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "username": NumberInt(1)
  },
  "unique": true,
  "ns": "project_db.users",
  "name": "username_1",
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
  "username": "sawa",
  "hashedPassword": "test",
  "salt": "test",
  "_id": ObjectId("54f8a49c2655df10044c5406"),
  "created": ISODate("2015-03-05T18:46:52.383Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "tru",
  "hashedPassword": "6fbd42785f68d8f34342f7a006955a4cf16ad0af",
  "salt": "0.07008325471542776",
  "_id": ObjectId("54f8b1d97aca2868088eaa12"),
  "created": ISODate("2015-03-05T19:43:21.126Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "tempo",
  "hashedPassword": "4944cc681f84ee814a322075fbdf8f47e0d0964a",
  "salt": "0.9570830843877047",
  "_id": ObjectId("54f8b216b0f3217004730caf"),
  "created": ISODate("2015-03-05T19:44:22.675Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "ssa",
  "hashedPassword": "511bfff73ad9c2471041bc018c13b6069246fd34",
  "salt": "1233421",
  "_id": ObjectId("54f8b31a53d742f4160c71af"),
  "created": ISODate("2015-03-05T19:48:42.258Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "truga",
  "hashedPassword": "d0e2fb4b4d70fff6383ea121844aa4fcdba2a01c",
  "salt": "0.5012539534363896 ",
  "_id": ObjectId("54f8b35c056935a40c5e2e7b"),
  "created": ISODate("2015-03-05T19:49:48.443Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "qwqer1",
  "hashedPassword": "2f281e750c11cd13bfca22b33438b3b3f2e56f3e",
  "salt": "0.12214213330298662 ",
  "_id": ObjectId("54ff3e63d34faadc10acc8a7"),
  "created": ISODate("2015-03-10T18:56:35.878Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "q",
  "hashedPassword": "778f5c5eb2d1205ecdcdddd9d9f0b7751f1e56b8",
  "salt": "0.22790962434373796 ",
  "_id": ObjectId("54ff3ffeac7187b40abdb5c9"),
  "created": ISODate("2015-03-10T19:03:26.548Z"),
  "__v": NumberInt(0)
});
db.getCollection("users").insert({
  "username": "a",
  "hashedPassword": "c9067b58be1d7a9dfd8c94668ae5e58f8e5e8541",
  "salt": "0.014297012472525239 ",
  "_id": ObjectId("54ff4996059722bc080fe3b7"),
  "created": ISODate("2015-03-10T19:44:22.977Z"),
  "__v": NumberInt(0)
});
