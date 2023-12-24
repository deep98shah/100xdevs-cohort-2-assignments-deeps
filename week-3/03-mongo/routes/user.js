const { User, Course } = require('../db/index')
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.headers.username
    const password = req.headers.password
    // Implement admin signup logic
    User.findOne({username: username}).then((element) => {
        if (element) {
            return res.status(403).send('User already exists')
        }
        User.create({username: username, password: password})
        return res.status(200).send({message: 'User created successfully'})
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then((courses) => {
        return res.status(200).json(courses)
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    Course.find({})
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router