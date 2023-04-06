const express =require("express");
const CreateRouter = express.Router();
const Createmodel = require("../Model/Create.Model");

CreateRouter.post("/", async (req, res) => {
    const data =req.body
    try{
      const Posts = new Createmodel(data);
      await Posts.save()
      res.send({ msg: "Post Uploaded succesfully" });
    }
    catch(err){
        console.log(err)
res.send({ msg: "something went wrong" });
    }
})


module.export = CreateRouter;