
import * as fs from 'node:fs/promises'

async function createFile(filepath: string, content :string) {
    try {
        await fs.writeFile(filepath, content, {flag: 'wx'})
        console.log("File Created successfully")
    } catch(error) {
        console.log("File already exist")

    }

}


createFile("./testfile.txt", "Learning Typescript")