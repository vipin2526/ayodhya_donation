require('dotenv').config();
process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const dataRoutes = require('./routes/dataRoutes')
const config = require('config');

const app = express();

// MongoDB connection
mongoose.connect(config.get('mongoURI'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Hi, Here We Are.....');
})
// Routes
app.use('/api/user', userRoutes);
app.use('/api',dataRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
