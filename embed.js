var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo",{useNewUrlParser:true});

var postSchema=new mongoose.Schema({
    title:String,
    content:String
});

var postModel=mongoose.model("Post",postSchema);

var userSchema=new mongoose.Schema({
    email:String,
    name:String,
    posts:[postSchema]
});

var User = mongoose.model("User",userSchema);

// // postModel.create({
// //     title:"apple ",
// //     content:"they are awsm"
// // },(err,post)=>{
// //     if(err){
// //             console.log(err);
// //         }else{
// //             console.log(user);
// //         }   

// // });
// User.create({
//     email:"broklyn@edu.com",
//     name:"nisha "},
//     (err,user)=>{
//         if(err){
//             console.log(err);
//         }else{//
//             user.posts.push({
//                 title:"my post",
//                 content:"play tt"
//             });
//             console.log(user);
//             user.save();
//         }
//     });

// User.find({}, (err,user) => {
//     if(err){
//         console.log(err);
//     }else{
//     console.log(user);
//     }
// });


User.findOne({
    name:"nisha "},
    (err,user)=>{
        if(err){
            console.log(err);
        }else{//
            user.posts.push({
                title:"Name is Beautiful",
                content:"now i hv started hatin tt"
            });
            
            user.save((err,user)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(user);
                }
            });
        }
    });