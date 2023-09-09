import db from "../../../../../utils/db";
import Product from "../../../../../models/product";


export default async function handler(req, res) {

    await db.connect()

    const { pId } = req.query

    if (req.method == "PUT") {

        const { id, published } = req.body

        console.log(id);

        await Product.updateOne(
            { _id: pId, "comments.id": id },
            {
                $set: { 'comments.$.published': published },
            },
            {
                new: true,
                runValidators: true,
                useFindAndModify: false,
            }
        ).then(response => {
            res.status(201).json({ msg: "published updated" })
        })





    }

}