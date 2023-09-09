import db from "../../../../utils/db";
import Product from "../../../../models/product";


export default async function handler(req, res) {
    await db.connect()

    if (req.method == "GET") {

        await Product.find({ "comments.0": { "$exists": true } })
            .then(response => {
                res.status(201).json({ status: true, data: response })
            })

    }


}