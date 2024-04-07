const { markdownSanitizer } = require('../utils');

class ProblemService {

    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
        //step1 : Sanitize the markdown for description
        problemData.description = markdownSanitizer(problemData.description);
        const problem = await this.problemRepository.createProblem(problemData);
        return problem;
    }

    async getAllProblems() {
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }

    async getProblem(problemID) {
        const problem = await this.problemRepository.getProblem(problemID);
        return problem;
    }

    async deleteProblem(problemID) {
        const deletedProblemId = await this.problemRepository.deleteProblem(problemID);
        return deletedProblemId;
    }

    async updateProblem(id, updatedData) {
        if(updatedData.description) {
            updatedData.description = markdownSanitizer(updatedData.description);
        }
        const updatedProblem = await this.problemRepository.updateProblem(id, updatedData);
        return updatedProblem;
    }

}

module.exports = ProblemService;