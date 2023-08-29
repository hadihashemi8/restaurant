import db from "../../../utils/db";
import User from "../../../models/user";

export default async function handler(req, res) {
    await db.connect()

    const { uId } = req.query

    if (req.method == "PUT") {

        const { isAdmin } = req.body

        await User.findByIdAndUpdate(uId, { isAdmin })


        res.status(201).json({ msg: "this user is admin" })

    }

}