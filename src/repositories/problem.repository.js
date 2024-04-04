const { Problem } = require('../models');
const NotFound = require('../errors/notFound.error');

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
            const deleteProbem = await Problem.deleteOne({_id: id});
            console.log(deleteProbem);
            if(deleteProbem.deletedCount == 0) {
                throw new NotFound("Delete Problem", id);
            }
            return id;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = ProblemRepository;