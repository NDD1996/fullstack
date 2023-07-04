import db from "../models/index";
import bcrypt from  'bcryptjs';

const salt = bcrypt.genSaltSync(10);


//CREATE
let createNewUser = (data) => {
    return new Promise(async(resolve,reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.user.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === "1" ? true : false,
                // image: DataTypes.STRING,
                roleId: data.roleId,
                // positionId: DataTypes.STRING,
            })

            resolve();

        } catch (error) {
            reject(error);
        }

    })
}


let hashUserPassword = (password) => {
    return new Promise((resolve, reject) => {
        try {
            let hashPassword = bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
    })
}


//READ
let getAllUser = () => {
    return new Promise( async (resolve,reject) => {
        try {
            let data = await db.user.findAll({
                // raw: true
            });
            resolve(data);
        } catch (error) {
            reject(error);
        }
    })
}

//INFO
let getInfo = (userid) => {
    return new Promise ( async (resolve, reject) => {
        try {
            let infoUser = await db.user.findOne({
                where: {
                    id: userid
                }
            })
            resolve(infoUser);
        } catch (error) {
            reject(error);
        }
    })
}


//UPDATE
let updateUser = (user) => {
    return new Promise ( async (resolve, reject) => {
        try {
            let updateUser = await db.user.update({
                email: user.email,
                firstName: user.firstname,
                lastName: user.lastname,
                address: user.address,
                phonenumber: user.phonenumber,

            },
            { where: {id: user.id}
        })
            resolve(updateUser);
        } catch (error) {
            reject(error);
        }
    })
}


let deleteUser = (userId) => {
    return new Promise( async(resolve, reject) => {
        try {
            let user = await db.user.findOne({
                where: {id: userId}
            })
            if(user) {
                await user.destroy()
            }
            resolve();
        } catch (error) {
            reject(error)
        }
    })
}

export default {
    createNewUser,
    getAllUser,
    getInfo,
    updateUser,
    deleteUser
};
