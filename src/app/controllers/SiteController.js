
class SiteController {

    // [GET] / home
    home(req, res) {
        res.render('home')
    }

    // [GET] / search
    search(req,res){
        res.send("hoc ve lap trinh")
    }
}

module.exports = new SiteController
