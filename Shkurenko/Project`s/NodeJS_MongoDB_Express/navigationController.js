import path from "path";

class navigationController{
    getPageIndex(req, res){
        try{
            const dirname = path.resolve();
            const file =  path.resolve(dirname, 'front','Tesla','build' ,`index.html`);

            res.status(200).sendFile(file);
        } catch (error) {
            res.status(500).json(error.message);
        }       
}
getPageProduct(req, res){
    try{
        const dirname = path.resolve();
        const file =  path.resolve(dirname, 'front','Tesla','build' ,`product.html`);

        res.status(200).sendFile(file);
    } catch (error) {
        res.status(500).json(error.message);
    }       
}
getPageAccount(req, res){
    try{
        const dirname = path.resolve();
        const file =  path.resolve(dirname, 'front','Tesla','build' ,`account.html`);

        res.status(200).sendFile(file);
    } catch (error) {
        res.status(500).json(error.message);
    }       
}
getPageMenu(req, res){
    try{
        const dirname = path.resolve();
        const file =  path.resolve(dirname, 'front','Tesla','build' ,`index.html`);

        res.status(200).sendFile(file);
    } catch (error) {
        res.status(500).json(error.message);
    }       
}
// getPageAdmin(req, res){
//     try{
//         const dirname = path.resolve();
//         const file =  path.resolve(dirname, 'front','Tesla','build' ,'account-pages',`admin-page.html`);

//         res.status(200).sendFile(file);
//     } catch (error) {
//         res.status(500).json(error.message);
//     }       
// }
// getPageProfile(req, res){
//     try{
//         const dirname = path.resolve();
//         const file =  path.resolve(dirname, 'front','Tesla','build' ,'account-pages',`user-page.html`);

//         res.status(200).sendFile(file);
//     } catch (error) {
//         res.status(500).json(error.message);
//     }       
// }
    }



export default new navigationController();