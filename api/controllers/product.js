import Product from "../models/productmodel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const CreateProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const UpdateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: Number(req.params.id)
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const DeleteProduct = async (req, res) => {
    try {
        const products = await Product.destroy({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(products);
    } catch (error) {
        res.json({ message: error.message });
    }  
}


