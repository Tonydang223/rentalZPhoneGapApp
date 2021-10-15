import * as SQLite from 'expo-sqlite'

export const dbConfig = {
    openDb:()=>{
        return SQLite.openDatabase('rentalZDB',1)
    }
}

