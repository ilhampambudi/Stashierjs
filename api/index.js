import  Express  from "express";
import db from "./config/database.js";
import router from "./routes/route.js";

const app = Express();

app.use(Express.urlencoded({ extended: true }));

app.use(Express.json());
try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}
app.get('/', (req, res) => {
    res.send('Ssssuppp Doggg??!!')
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(router);

db.sync(); 
app.listen(5000,() => {
    console.log('Server running at port 5000...')
});