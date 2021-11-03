class UserController {
    async create(req, res) {

    }

    signIn(req, res) {
        
        return res.json({octaa: "rfgr"});
    }
    signUp(req, res) {
        const p = req.body;
        return res.json(p.email);
    }
}

module.exports =  new UserController();