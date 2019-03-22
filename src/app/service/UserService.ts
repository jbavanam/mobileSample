import { Injectable } from "@angular/core";
import { User } from "../shared/user.model";
import { traceWrite } from "tns-core-modules/ui/page/page";

@Injectable()
export class UserService {

    users:Array<User> = [];
    public token:string;    

    constructor(){
        this.users.push({ email: 'jaganb@hotmail.com',password:'test' });
        this.users.push({ email: 'test@test.com',password:'password' });
    }

    register() {
        return new Promise((resolve, reject) => {

        });
    }

    login(user:User){
        return new Promise((resolve, reject) => {
            let loginuser = this.users.find(u => u.email == user.email && u.password == user.password);

            if(loginuser)
                resolve(loginuser);
            else
                reject('Credentials does not match');
        });
    }
}