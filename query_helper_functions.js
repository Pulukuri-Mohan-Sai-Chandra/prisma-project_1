const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient(); 

const getAllUsers = async()=>{
    try{

    const data = await prisma.users.findMany();
    console.log(data);
    return data;

    }
    catch(e){
       throw new Error(e.message)
    }
}

module.exports = {
    getAllUsers
}