const express =require("express");
const CreateRouter = express.Router();
const Createmodel = require("../Model/Create.Model");

CreateRouter.post("/", async (req, res) => {
    const post =req.body
    try{
      const Posts = new Createmodel(post)
      await Posts.save()
      res.send({ msg: "Post Uploaded succesfully" });
    }
    catch(err){
res.send({ msg: "something went wrong" });
    }
})


module.export = CreateRouter;