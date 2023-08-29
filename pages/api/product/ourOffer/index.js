import db from "../../../../utils/db"
import Product from "../../../../models/product"

export default async function handler(req, res) {
    await db.connect()

    if (req.method == "GET") {
        await Product.find({ ourOffer: true })
            .then(response => {
                if (response) {
                    res.status(201).json({ status: true, data: response })
                }
            })
    }

}