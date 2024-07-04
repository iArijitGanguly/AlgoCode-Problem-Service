const { Problem } = require('../models');
const NotFound = require('../errors/notFound.error');
const logger = require('../config/logger.config');

class ProblemRepository {

    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                difficulty: problemData.difficulty,
                testCases: (problemData.testCases) ? problemData.testCases : [],
                editorial: (problemData.editorial) ? problemData.editorial : ""
            });
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id) {
        try {
            const problem = await Problem.findById(id);
            if(!problem) {
                throw new NotFound("Problem", id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id) {
        try {
            const deleteProbem = await Problem.findByIdAndDelete(id);
            if(!deleteProbem) {
                throw new NotFound("Delete Problem", id);
            }
            return deleteProbem;
        } catch (error) {
            throw error;
        }
    }

    async updateProblem(id, updatedData) {
        try {
            const updatedProblem = await Problem.findByIdAndUpdate(id, updatedData, {new: true});
            if(!updatedProblem) {
                throw new NotFound("Update Problem", id);
            }
            return updatedProblem;
        } catch (error) {
            logger.error(`${error.message}`);
            throw error;
        }
    }

}

module.exports = ProblemRepository;