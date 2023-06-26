import Post from './Post.js';



class PostController{
    async create(req,res) {
        try {
            const {author, title, content, pucture} = req.body;
            const post = await Post.create({author, title, content, pucture});
            res.status(201).json(post);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    
    async getAll(req, res){
        try {
            const post = await Post.find();
            return res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error.message);
        }

    }
    async getOne(req, res){
        try {
            const {id} = req.params
            if (!id){
                res.status(400).json({message: 'ID не указан'} )
            }
            const post = await Post.findById(id)
            return res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error.message);
        }

    }
    async update(req, res){
        try {
            const post = req.body;
            if(!post._id){
                req.status(400).json({message: 'ID not found'})
            }
            const updatedPost  = await Post.findByIdAndUpdate(post._id, post, { new: true})
            return res.status(200).json(updatedPost)
            
        } catch (error) {
            res.status(500).json(error.message);
        }

    }
    async delete(req, res){
        try {
            const {id} = req.params
            if(!id){
                req.status(400).json({message: 'ID not found'})
            }
            const deletedPost = await Post.findByIdAndDelete(id);
            return res.status(200).json(deletedPost)
        } catch (error) {
            res.status(500).json(error.message);
        }

    }
    async resposne (req,res){
        return res.json('asdfa:frwf43')
    }


}


export default new PostController();