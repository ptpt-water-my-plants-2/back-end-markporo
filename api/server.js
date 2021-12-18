const express = require("express")

const server = express()

//const { logger } = require("./cars/cars-middleware")
const usersRouter = require('./users/users-router')

const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

// global middleware
server.use(express.json())
server.use(morgan('dev'))
server.use(helmet())
server.use(cors())

// local middleware
//server.use(logger)

//connect Routes
server.use('/api/users', usersRouter) // 1st param = url route, 2nd param = router name that was required above

//home page
server.get('/', (req, res) => {
    res.status(200).json(
        {
            "status": 200,
            "message": 'Welcome! Lets party with plants!',
            "time": new Date().toLocaleTimeString(),
        });
})

//catch all endpoint
server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found',
    })
})

module.exports = server