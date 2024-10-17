import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { Loan, ILoan } from './models/loan';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/loanApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.post('/api/loan', async (req, res) => {
    try {
        const loanData: ILoan = req.body;
        const newLoan = new Loan(loanData);
        await newLoan.save();
        res.status(201).send("Loan application submitted successfully!");
    } catch (error) {
        res.status(500).send("Error submitting loan application.");
    }
});


app.get('/api/loans', async (req, res) => {
    try {
        const loans = await Loan.find();
        res.json(loans);
    } catch (error) {
        res.status(500).send("Error retrieving loan applications.");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
