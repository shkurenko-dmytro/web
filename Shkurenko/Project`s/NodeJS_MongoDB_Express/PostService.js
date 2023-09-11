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
    async loadProducts(start, limit){
        if( !start || !limit){
            throw new Error('Error with start or end params')
        }
        const posts = await Post.find()
        const end = +start +  +limit;
        const products = posts.slice(start, end);

        return products;
    }
   
}

export default new PostService();