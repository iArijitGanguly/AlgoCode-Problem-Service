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
                logger.error(`Problem.Repository: Problem with id: ${id} not found in db`);
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
                logger.error(`Problem.Repository: Problem with id: ${id} not found in db`);
                throw new NotFound("Delete Problem", id);
            }
            return deleteProbem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(id, updatedData) {
        try {
            const updatedProblem = await Problem.findByIdAndUpdate(id, updatedData, {new: true});
            if(!updatedProblem) {
                logger.error(`Problem.Repository: Problem with id: ${id} not found in db`);
                throw new NotFound("Update Problem", id);
            }
            return updatedProblem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = ProblemRepository;