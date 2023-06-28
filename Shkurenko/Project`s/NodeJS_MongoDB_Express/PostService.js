import Post from "./Post.js";
import fileService from "./fileService.js";

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
                throw new Error('ID не указан')
            }
            const post = await Post.findById(id)
            return post;
        } 

    async update(post){
            if(!post._id){
                throw new Error('ID не указан')
            }
            const updatedPost  = await Post.findByIdAndUpdate(post._id, post, { new: true})
            return updatedPost
            
        } 

    async delete(id){
            if(!id){
                throw new Error('ID не указан')
            }
            const deletedPost = await Post.findByIdAndDelete(id);
            return deletedPost

    }
}

export default new PostService();