class person{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }

    toString(){
        return 'Name: ' + this.name + '\nGender: ' + this.gender;
    }
}

export { person }