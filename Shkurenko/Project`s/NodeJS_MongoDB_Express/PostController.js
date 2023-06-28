import Post from './Post.js';
import PostService from './PostService.js';


class PostController{
    async create(req,res) {
        try {
            const post = await PostService.create(req.body, req.files.image)
            res.status(201).json(post);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    
    async getAll(req, res){
        try {
            const post = await PostService.getAll();
            return res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error.message);
        }

    }
    async getOne(req, res){
        try {
            const post = await PostService.getOne(req.params.id)
            return res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error.message);
        }

    }
    async update(req, res){
        try {
            const updatedPost  = await PostService.update(req.body)
            return res.status(200).json(updatedPost)
            
        } catch (error) {
            res.status(500).json(error.message);
        }

    }
    async delete(req, res){
            const deletedPost = await PostService.delete(req.params.id)
            return res.status(200).json(deletedPost)
        } catch (error) {
            res.status(500).json(error.message);
        }
}


export default new PostController();