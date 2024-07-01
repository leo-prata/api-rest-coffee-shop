import prismaClient from "../../prisma";

interface ProducrRequest{
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}

class CreateProductService{
    async execute({ name, price, description, banner, category_id }: ProducrRequest){
        return { ok: true }
    }
}

export default new CreateProductService();