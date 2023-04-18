const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const dbConnection = require('./db/conn');
const animalRouter = require('./routes/animal');

const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/step', animalRouter);


//
 



app.listen(PORT, () => {
    dbConnection('mongodb+srv://admin:Wmw0sOzjCjM3y7NT@advertisement.5o2ovsj.mongodb.net/Advertisement?retryWrites=true&w=majority');
    console.log(`Server is running on port: ${PORT}`);
}
);

