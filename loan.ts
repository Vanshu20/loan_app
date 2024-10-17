import mongoose, { Schema, Document } from 'mongoose';

export interface ILoan extends Document {
    fullName: string;
    loanAmount: number;
    loanTerm: number;
    reason: string;
    employmentStatus: string;
    employmentAddress: string;
    dateSubmitted: Date;
}

const LoanSchema: Schema = new Schema({
    fullName: { type: String, required: true },
    loanAmount: { type: Number, required: true },
    loanTerm: { type: Number, required: true },
    reason: { type: String, required: true },
    employmentStatus: { type: String, required: true },
    employmentAddress: { type: String, required: true },
    dateSubmitted: { type: Date, default: Date.now }
});

export const Loan = mongoose.model<ILoan>('Loan', LoanSchema);
