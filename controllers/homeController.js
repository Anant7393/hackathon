const startUpProfile=require("../models/startup");
const investorProfile=require("../models/investor");
module.exports.home = function(req,res){
    if(res.locals.user){
        console.log(res.locals.user);
    }
    return res.render('index');
}

module.exports.login = function(req,res){
    return res.render('signin');
}

module.exports.startups = function(req,res){
    return res.render('startups');
}

module.exports.investors = function(req,res){
    investorProfile.find({}).then((data)=>{
        return res.render('investors',{data});
        console.log(data);
    }).catch((error)=>{
        console.log("error in investrs.ejs page render data");
    })
   
}

module.exports.learn = function(req,res){
    return res.render('learn');
}

module.exports.edu = function(req,res){
    return res.render('school_colleges');
}

module.exports.featured = function(req,res){
    return res.render('featured');
}

module.exports.startup_db = function(req,res){// startup profile dashboard
    console.log("current user" +req.user.id);
    var id=req.user.id;
    startUpProfile.findById(id).then((data)=>{
        return res.render('startup_db',{startupProfile:data});
    }).catch((error)=>{
        console.log("error in startupDb data render");
    })
    
}

module.exports.investor_db = function(req,res){// investor profile dashboard
    console.log("investor is "+req.user);

    investorProfile.findOne({id: req.user.id},function(err, investor){
        if(err){console.log('Error in finding investor in database'); return;}
        if(!investor){
            
            return res.redirect('back');
        }else{
            console.log(investor);
            return res.render('investor_db',{investor});
        }
    });
    
}
module.exports.razorpay = function(req,res){
    return res.render('razorpay');
}

module.exports.comingsoon = function(req,res){
    return res.render('comingsoon');
}