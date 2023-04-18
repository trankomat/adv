const Animal = require('../models/animal.model');

const createAnimal = async (req, res) => {
    const { name, species, color, legs, description } = req.body;
    if (req.body) {
        const animal = new Animal(req.body);
        animal.save()
            .then(data => {
                res.status(200).send({ data: data });   
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAnimals = async (req, res) => {
    await Animal.find({})
        .select('-__v')

        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getAnimal = async (req, res) => {
    const { id } = req.params;
    Animal.findById(id)
        .select('-__v')
        .then(data => {
            res.status(200).send({ data: data });
        }
        )
        .catch(error => {
            res.status(500).send({ error: error.message });
        }
    );

}



module.exports = {
    createAnimal,
    getAnimals,
    getAnimal
}








