var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2",{useNewUrlParser:true});

var postModel=require("./model/post");
var User=require("./model/user");


// User.create({
//     email:"simani@gmail.com",
//     name:"simani"
// });
// postModel.create({
//     title:"hii myself simani",
//     content:"im fom tokyo"
// },(err,post)=>{
//     User.findOne({name:"simani"},(err,founduser)=>{
//         if(err){
//             console.log(err);
//         }else{
//             founduser.posts.push(post);
//             founduser.save((err,data)=>{
//                 if(err)
//                 {
//                     console.log(err);
//                 }
//                 else{
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });
// User.findOne({name:"simani"}).populate("posts").exec((err,user)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(user);
//     }
// });
// User.find({name:"vihani"}).populate("Post").exec((err,user)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });