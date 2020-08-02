import router from './routes';
//require('dotenv/config');
import express from 'express';
import cors from 'cors';
//import applicationErrorHandler from './middlewares/errorHandlers/ApplicationError.js'
import errorHandlers from './middlewares/errorHandlers';
const port = 5001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandlers.applicationError);
app.use(errorHandlers.validationError);
app.use(errorHandlers.validationError);
app.use((err,req,res)=>{
    res.status(500).send('Internal server error!');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));




