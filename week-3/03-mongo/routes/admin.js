const { Admin, Course } = require('../db/index')

const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const bodyParser = require('body-parser')

router.use(bodyParser.json())

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.headers.username
    const password = req.headers.password
    // Implement admin signup logic
    Admin.findOne({username: username}).then((element) => {
        if (element) {
            return res.status(403).send('User already exists')
        }
        Admin.create({username: username, password: password})
        return res.status(200).send({message: 'Admin user created successfully'})
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const imageLink = req.body.imageLink
    Course.create({title: title, description: description, price: price, imageLink: imageLink}).then((course) => {
        console.log(course)
        return res.status(200).json({message: 'Course created successfully', courseId: course._id})
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then((courses) => {
        console.log(courses)
        return res.status(200).json(courses)
    })
});

module.exports = router;