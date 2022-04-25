const valid = (req, res, next) => {
    const {name,email,password} = req.body;
    function validateEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }
    if(req.path === "/register"){
        console.log(!email.length);
        if(![name,email,password].every(Boolean)){
            return res.status(401).json("missing")
        }else if(!validateEmail(email)){
            return res.status(401).json("Invalid register")
        }
    }else if(req.path === "/login"){
        if(![email, password].every(Boolean)){
            return res.status(401).json("missing")
        }else if(!validateEmail(email)){
            return res.status(401).json("Invalid login")
        }
    }
    next();
}
module.exports = valid