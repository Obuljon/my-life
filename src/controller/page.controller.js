class MainPage{
    homePage(req, res){
        res.render("main/home")
    }
    about(req, res){
        res.render("main/about")
    }
    recommendation(req, res){
        res.render("main/recommendation")
    }
    search(req, res){
        res.render("main/search")
    }
    conversations(req, res){
        res.render("main/conversations");
    }
    video(req, res){
        res.render("main/video")
    }
}

export default new MainPage()