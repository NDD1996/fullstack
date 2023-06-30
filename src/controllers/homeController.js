
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

let postCrud = (req, res) => {
    // console.log(req.body);
    CRUDservice.createNewUser(req.body);
    return res.send("post crud from sever");
}


// module.exports = {
//     getHomePage
// }

export default {
    getHomePage,
    getCrud,
    postCrud,
}