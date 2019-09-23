import uid from 'uid';

class Player {

    constructor(name) {
        this.id = uid();
        this.name = name;
    }
}