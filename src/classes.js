"use strict"

class User{

    constructor(username,email,password)
    {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    
    static noOfUsers()
    {
        console.log("43 users");
    }

    register(){
        console.log(this.username + " is registered")
    }
}

let hari = new User("hari" , "hari@123" , "9405");

hari.register();
User.noOfUsers();

class Member extends User{
    constructor(username,email,password,member)
    {
        super(username,email,password);
        this.member = member;
    }

    show()
    {
        console.log(this.username + "is a member of" + this.member);
    }
}

let kiran = new Member("Kiran","kiran@123","432","FIFA");

kiran.show();