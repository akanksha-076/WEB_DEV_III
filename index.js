const express = require('express');
const app = express();
const port=3000;

const tourRouter=require('./router/tourRouter.js')

app.use('/tours',tourRouter);

app.listen(port, () => {
    console.log(`sever runnig on port ${port}`)
});

