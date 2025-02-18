require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require("./config/database");

const app = express();

const newsRoutes = require('./routes/newsRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');
const fixtureRoutes = require('./routes/fixtureRoutes.js');
const scoreRoutes = require('./routes/scoreRoutes.js');
const greenBeckRoutes = require('./routes/greenBeckRoutes.js');

app.use(cors({
    origin: 'http://localhost:5173'  
}));
app.use(express.json());  

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});


app.use('/api/news', newsRoutes);
app.use('/api/user', userRoutes);
app.use('/api/adminDashboard', adminRoutes);
app.use('/api/fixture', fixtureRoutes);
app.use('/api/scores', scoreRoutes);
app.use('/api/greenbeck', greenBeckRoutes);




sequelize.authenticate()
  .then(() => console.log("Connected to MySQL using Sequelize"))
  .catch(err => console.error("Database connection error:", err));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
