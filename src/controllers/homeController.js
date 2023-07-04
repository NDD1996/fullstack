
import db from "../models/index";
import CRUDservice from "../services/CRUDservice"

let getHomePage = async (req, res) => {
    try {
        let data = await db.user.findAll();
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }
}

let getCrud = (rep, res) => {
    return res.render("formCrud.ejs");
}

//CREATE
let postCrud = async (req, res) => {

    // mã hóa password ở file CRUDservice trong folder services
    await CRUDservice.createNewUser(req.body);
    return res.redirect("/listCrud");
}

// READ
let listCrud = async (req,res) => {
    let data = await CRUDservice.getAllUser();
    return res.render("listCrud.ejs", {
        data: data
    })
}

//INFO
let getInfo = async (req,res) => {
    let infoUser = await CRUDservice.getInfo(req.params.id);
    return res.render("getInfo.ejs", {
        infoUser
    });
}



//UPDATE
let updateCrud = async (req,res) => {
    await CRUDservice.updateUser(req.body);
    return res.redirect("/listCrud");
}


//DELETE
let deleteUser = async (req,res) => {
    let userId = req.params.id
    await CRUDservice.deleteUser(userId);
    return res.redirect("/listCrud");

    
}


// module.exports = {
//     getHomePage
// }

export default {
    getHomePage,
    getCrud,
    postCrud,
    listCrud,
    getInfo,
    updateCrud,
    deleteUser
}