const {logger} = require('../config');

class CrudRepository
{
    constructor(model)
    {
        this.model = model;
    }
    async create(data){
        try{
            const response = await this .model.create(data);
            return response;
         } 
         catch(error)
         {
            logger.error("something went wrong in the crud repo:create");
            throw error;
        }
    } async detroy(data){
        try{
            const response = await this .model.destroy({
                where:{
                    id:data
                }
            });
            return response;
         } 
         catch(error)
         {
            logger.error("something went wrong in the crud repo:destroy");
            throw error;
        }
    }
    async get(data){
        try{
            const response = await this.model.findByPK(data);
            return response;
        }
        catch (error){
            logger.error("something went wrong in the crud rep:get");
            throw error;
        }
    }
    async getAll(){
        try{
            const response = await this .model.findAll();
            return response;
        }
        catch(error){
            logger.error("something went wrong in the crud repo:get");
            throw error;
        }
    }
    async update(id,data){
        try{
            const rsponse = await this .model.update(data,{
                id :id
            })
            return response;
        }
        catch(error){
            logger.error("something went wrong in the crud rep:update");
            throw error; 
        }
    }


}
module.exports = CrudRepository;