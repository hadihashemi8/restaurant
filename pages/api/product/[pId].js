import db from "../../../utils/db";
import Product from "../../../models/product";
import formidable from "formidable";


export const config = {
    api: {
        bodyParser: false,

    },
};

export default async function handler(req, res) {

    await db.connect()

    const { pId } = req.query


    if (req.method == "DELETE") {
        await Product.findByIdAndDelete(pId)

        res.status(200).json({ msg: "product deleted..." })
    } else if (req.method == "PUT") {

        
        const form = formidable({ multiples: true });
        
        
        const formData = await new Promise((resolve, reject) => {
            form.parse(req, async (err, fields, files) => {
                if (err) {
                    reject("error");
                }
                resolve({ fields, files });
            });
        });


        const { fields, files } = await formData;
       

        // const newObj = {
        //     name: fields?.name[0],
        //     price: fields?.price[0],
        //     aboutProduct: fields?.aboutProduct[0],
        //     aboutProductFull: fields?.aboutProductFull[0],
        //     categories: fields?.categories[0],
        //     image: "file" in files ? files.file[0].filepath : fields.file[0]
        // }

        // await Product.findByIdAndUpdate(pId, newObj)

        // res.status(201).json({ msg: "product updated" })
    }
}