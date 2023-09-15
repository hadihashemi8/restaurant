import db from "../../../utils/db"
import User from "../../../models/user"

export default async function (req, res) {
    await db.connect()

    const { uId } = req.query

    if (req.method == "PUT") {

        const { newTransAction } = req.body

            await User.findByIdAndUpdate(uId, { $push: { orders: newTransAction } })
            
            res.status(201).json({msg:"transAction saved"})
            
        
    }
}