'use strict';

const fs = require('fs');

class Visitor {
    constructor(name, age, date_visited, time, comments, assistant) {
        this.Fullname = name;
        this.age = age;
        this.date_visited = date_visited;
        this.time = time;
        this.comments = comments;
        this.assistant = assistant;


    }

    save() {
        let json = JSON.stringify(this, null, 4);

        let i;
        i = 0;

        let check = fs.existsSync(`visitor_${i}.json`)

        if (check) {
            console.log(`this file visitor_${i}.json already exist!`);

        } else {

            var write_info = `visitor_${i}.json`;
            fs.writeFile(write_info, json, function (err) {
                if (err)
                    throw err;
                console.log('is now Saved!');
                return true;
            });

        }


        let name = this.Fullname.replace(' ', '_').toLowerCase();
        let write_info = `visitor_${this.name}.json`;
        fs.writeFile(write_info, json, function (err) {
            if (err)
                throw err;
            console.log('is now Saved!');
            return true;
        });
        return true;
    }

    load(fullName) {

        const fs = require('fs');
        let name = fullName.replace(' ', '_').toLowerCase();

        fs.readFile(`visitor_${name}.json`, 'utf8', (err, data), function () {
            if (err) {
                throw err;
            } else {
                console.log(data);
            }
        });
    }

}

module.exports = {
    Visito
}