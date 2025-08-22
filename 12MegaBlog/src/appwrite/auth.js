import conf from '../conf/conf.js'
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client;
    account;

    constructor(){
        this.client = new Client()
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
        const userAccount = await this.account.create(ID.unique(),email, password, name);
        if(userAccount){
            // call another method
            return this.login({email, password});
        }else{
            return userAccount;
        }
        } catch (error){
            console.log("AppWrite Service :: Create Account :: Error", error);

        }
    }
    async login({email, password}){
        try {
        return  await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log("AppWrite Service :: Login :: Error", error);

        }
    }
    async getCurrentUser(){
        try {
            await this.account.get();
        } catch (error) {
            console.log("AppWrite Service :: getCurrent User :: Error", error);
            return null;
        }

        
    }
    async logout(){
        try {
              await this.account.deleteSessions();
        } catch (error) {
            console.log("AppWrite service :: logout :: error", error);
        }
    }

}

const authService = new AuthService();

export default authService