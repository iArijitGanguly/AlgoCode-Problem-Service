const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const problemSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title can not be empty']
    },
    description: {
        type: String,
        required: [true, 'decsription can not be empty']
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        default: 'easy'
    },
    testCases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            }
        }
    ],
    editorial: {
        type: String
    }
});

const Problem = model('Problem', problemSchema);

module.exports = Problem;