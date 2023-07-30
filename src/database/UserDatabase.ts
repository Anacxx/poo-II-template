import { BaseDatabase } from "./BaseDatabase";
import { TAccountDB, TUserDB } from "../types";

export class UserDatabase extends BaseDatabase {

    public findUsers = async (q?: string): Promise<TUserDB[]> => {
        let result: TUserDB[]
    
    if(q){
        result = await BaseDatabase
        .connection('users')
        .where("name", "LIKE", `%${q}%`)
    }else{
        result = await BaseDatabase
        .connection('users')
    }
    return result
    } 

    public async findUserById(id: string): Promise<TUserDB | undefined> {
        const response: TUserDB[] = await BaseDatabase
        .connection('users')
        .where({id})
        
        return response[0]
    }

    public insertUser = async (userDB: TUserDB): Promise<void> => {
         await BaseDatabase.connection('users').insert(userDB)
    }


    public async findAccount(): Promise<TAccountDB[]> {
        let result: TAccountDB[] = await BaseDatabase.connection('accounts');
        return result;
    }

    public async findAccountById(id: string): Promise<TAccountDB> {
        const response: TAccountDB[] = await BaseDatabase
        .connection('accounts')
        .where({id})
        return response[0]
    }
    public insertAccount = async (newAccountDB: TAccountDB): Promise<void> => {
        await BaseDatabase.connection('accounts').insert(newAccountDB)
   }

}
