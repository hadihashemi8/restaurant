import db from "../../../utils/db";
import Product from "../../../models/product";


export default async function handler(req, res) {

    await db.connect()


    if (req.method == "GET") {
        await Product.find({ offerPresent: { $gt: 0 } })
            .then(products => {
                console.log(products);
                res.status(200).json({ status: true, data : products })
            }).catch(err => res.status(404).join({ err }))
    }

}