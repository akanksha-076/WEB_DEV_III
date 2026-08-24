// const express = require('express');
// const app = express();
// const port=3000;
// app.use(express.json());

// const tourRouter=require('./router/tourRouter.js')

// app.use('/tours',tourRouter);

// app.listen(port, () => {
//     console.log(`sever runnig on port ${port}`)
// });

const express = require('express');
const app = express();
const tourRouter = require('./router/tourRouter');

app.use(express.json());

app.use('/tours', tourRouter);

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});