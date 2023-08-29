import db from "../../../utils/db"
import Product from "../../../models/product";
import formidable from "formidable"

export const config = {
    api: {
        bodyParser: false,

    },
};


export default async function handler(req, res) {
    await db.connect()


    if (req.method == "POST") {

        const form = formidable({ multiples: false });

        const formData = new Promise((resolve, reject) => {
            form.parse(req, async (err, fields, files) => {
                if (err) {
                    reject("error");
                }
                resolve({ fields, files });
            });
        });

        const { fields, files } = await formData;
        console.log(files);

        if (files.file[0].mimetype == "image/png" || files.file[0].mimetype == "image/jpeg" || files.file[0].mimetype == "image/jpg") {

            const newObj = {
                name: fields.name[0],
                price: fields.price[0],
                aboutProduct: fields.aboutProduct[0],
                aboutProductFull: fields.aboutProductFull[0],
                categories: fields.categories[0],
                image: files.file[0].filepath,
                offerPresent: 0,
                ourOffer: false

            }


            Product.create(newObj)
                .then(data => {
                    console.log(data);
                    if (data) {
                        res.status(201).json({ msg: "product added to db" })
                    }
                })
        } else {

            res.status(400).json({ msg: "this format not valid" })
        }



    } else if (req.method == "GET") {
        await Product.find()
            .then(products => {
                if (products) {
                    res.status(201).json({ status: true, data:products })

                }
            }).catch(err => res.status(404).join({ err }))
    }
}