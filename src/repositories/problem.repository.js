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
            const deleteProbem = await Problem.findByIdAndDelete(id);
            if(!deleteProbem) {
                throw new NotFound("Delete Problem", id);
            }
            return id;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(id, updatedData) {
        try {
            const problemToUpdate = await Problem.findByIdAndUpdate(id, {
                ...(updatedData.title && {title : updatedData.title}),
                ...(updatedData.description && {description: updatedData.description}),
                ...(updatedData.difficulty && {difficulty: updatedData.difficulty}),
                ...(updatedData.textCases && {testCases: updatedData.testCases}),
                ...(updatedData.editorial && {editorial: updatedData.editorial})
            });
            if(!problemToUpdate) {
                throw new NotFound("Update Problem", id);
            }
            const updatedProblem = await Problem.findById(id);
            return updatedProblem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = ProblemRepository;