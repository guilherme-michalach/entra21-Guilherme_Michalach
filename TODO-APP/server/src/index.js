const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/todos', require('./routes'));

app.use((error, req, res, next) => {
    if (!error.status) {
        error.status = 500;
    }

    res.status(error.status);
    res.json({ message: error.message });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));