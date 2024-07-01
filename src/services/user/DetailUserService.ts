import prismaClient from "../../prisma";

class DetailUserService{
    async execute(){
        return { ok: true }
    }
    
}

export default new DetailUserService();