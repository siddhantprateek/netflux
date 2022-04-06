const model = require('../model/model.js')


const addMovie = (req, res) => {
    const Moviedata = req.body
    model.create(Moviedata, (err, data) => {
        if(err) {
            res.statue(500).send(err)
        }else{
            res.status(200).send(data)
        }
    } )
}


const deleteMovie = (req, res) => {

    model.findOneAndDelete({name: req.name}, (err, data) => {
        if(err) {
            res.statue(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
}

module.exports = { addMovie, deleteMovie }