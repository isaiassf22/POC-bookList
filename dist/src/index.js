import express from 'express';
import router from './routes/indexRoutes';
var app = express();
app.use(express.json());
app.use(router);
app.listen(4003, function () {
    console.log("esta funcionando!");
});
