const Category = require("../models/tags")

exports.createCategory = async (req,res) =>{
    try {
        // fetch data
        const {name ,description} = req.body;
        
        // validation
        if(!name || !description) {
            return res.status(400).json({
                success:true,
                message:"All fields are required",
            })
        }

        // create entry in DB
        const categoryDetails = await Category.create({
            name: name,
            description:description,
        });
        console.log(categoryDetails);
       // return respose 
       return res.status(200).json({
        success:true,
        message:"Category Created Successfully",
       })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

// get all Tags handler function

exports.showAllCategories = async(req,res)=>{
    try {
        const allCategories = await Category.find({},{name:true,description:true });
        res.status(200).json({
            success:true,
            message:"All Categories are returned successfully",
            allCategories,
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"error.message",
        })
    }
}