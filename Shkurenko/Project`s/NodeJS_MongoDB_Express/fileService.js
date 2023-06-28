import * as uuid from 'uuid';
import * as path from 'path';


class FileService {

    saveFile(file){
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve('images', fileName);
            console.log(path.resolve())
            console.log(file);
            file.mv(filePath);
            return fileName;
            
        } catch (error) {
            console.log(error.message)
        }
    }
}

export default new FileService();