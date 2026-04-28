const express = require('express'); //node module
const app = express(); // server instantiation

app.use(express.json()); //middleware

let products = [];

app.get('/', (req, res) => {
res.send('Welcome! This is Product API');
});

//inserting products
app.post('/products', (req, res) => {
const { name, modelNo, size } = req.body;
if(!name || !modelNo || !size) {
    return res.status(400).send('All fields are required to continue.');
}
const product = {name, modelNo, size};
products.push(product);

res.status(200).send('Products Logged Succesfully.');

});

app.get('/products', (req, res) => {
    res.json(products);
})







app.listen(1327, () => {
console.log('Server is Listening and Running Properly.');
});