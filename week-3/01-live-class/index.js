const express = require("express")
const zod = require("zod")
const app = express()

app.use(express.json())

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().length(8)
})

app.post("/test", (req, res) => {
    const auth = req.body
    const response = schema.safeParse(auth)
    if (!response.success) {
        res.status(411).json({msg: "invalid input"})
        return
    }
    res.status(200).json(response.data)
})

app.listen(3000)