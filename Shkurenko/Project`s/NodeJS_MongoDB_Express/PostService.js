import Post from "./Post.js";
import fileService from "./fileService.js";
import path  from 'path';
class PostService {
    async create(post, image) {
        const fileName = fileService.saveFile(image);
        const createdPost = await Post.create({...post, image: fileName});
        return createdPost;
    }
    
    async getAll(){
            const posts = await Post.find();
            return posts
        }

    async getOne(id){
            if (!id){
                throw new Error('Id not specified')
            }
            const post = await Post.findById(id)
            return post;
        } 

    async update(post){
            if(!post._id){
                throw new Error('Id not specified')
            }
            const updatedPost  = await Post.findByIdAndUpdate(post._id, post, { new: true})
            return updatedPost
            
        } 

    async delete(id){
            if(!id){
                throw new Error('Id not specified')
            }
            const deletedPost = await Post.findByIdAndDelete(id);
            return deletedPost

    }
    async getPage(id){
        console.log("ID = "+ id);
        const dirname = path.resolve(); 
<<<<<<< HEAD
        return path.resolve(dirname, 'front','Tesla','build' ,`${id}.html`);
=======
        return path.resolve(dirname, 'front','test', 'account.html');
}

    async getPagea(){
        const dirname = path.resolve(); 
        return path.resolve(dirname, 'front','test', 'index.html');
>>>>>>> 24bdf9a8e9a4a9a9eee695ff224cddb6ca8cdfa2
}
}

export default new PostService();