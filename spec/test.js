const fs = require('fs');
let {
    Visitor
} = require('../src/visitor')

let obj = {
    "fullName": "Alice Cooper",
    "age": "25",
    "date_visited": "02/06/2020",
    "time_visited": "17:55",
    "comments": "love",
    "assistant": "Arya"
};

let objects = new Visitor(
    obj.fullName,
    obj.age,
    obj.date_visisted,
    obj.time_visited,
    obj.comments,
    obj.assistant
)

describe('function save()', function () {

    let alice = new Visitor('Alice Cooper', 25, '02/06/2020', '17:55', 'love', 'Arya')

    //tests if the save function is defined
    it('exists', function () {
        expect(alice.save()).toBeDefined()
    });

    //tests if the file is created
    it('creates named files', function () {
        aliceFile = new Visitor(obj.name, obj.age, obj.dateVisited, obj.timeVisited, obj.comments, obj.assistant)
        expect(aliceFile.toString()).toBe(obj.toString())
    });

    //it reads the file
    it('should read the contents of the created file', function () {
        fs.readFile('Visitor_alice_cooper.json', 'UTF8', function () {
            if (err) {
                throw err
            } else {
                let content = JSON.parse(data)
                expect(content.name).toBe('Alice Cooper')
                expect(content.age).toBe(25)
                expect(content.dateVisited).toBe('02/06/2020')
                expect(content.timeVisited).toBe('17:55')
                expect(content.comments).toBe('love')
                expect(content.assistant).toBe('Arya')
            }
        });
    });

});