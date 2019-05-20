var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2",{useNewUrlParser:true});

var postSchema=new mongoose.Schema({
    title:String,
    content:String
});

var postModel=mongoose.model("Post",postSchema);

var userSchema=new mongoose.Schema({
    email:String,
    name:String,
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
        }
    ]
});

var User = mongoose.model("User",userSchema);

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
User.findOne({name:"simani"}).populate("posts").exec((err,user)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});
// User.find({name:"vihani"}).populate("Post").exec((err,user)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });