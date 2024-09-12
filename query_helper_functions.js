const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const getAllUsers = async () => {
    try {

        const data = await prisma.users.findMany();
        console.log(data);
        return data;

    }
    catch (e) {
        throw new Error(e.message)
    }
}
const saveUser = async (userObject) => {
    try {
        const response = await prisma.users.create({data:userObject});
        return {
            "status": "success",
            "object": response
        }
    }
    catch (e) {
        return {
            "status": "failure",
            "object": e.message
        }
    }
}

module.exports = {
    getAllUsers,
    saveUser
}