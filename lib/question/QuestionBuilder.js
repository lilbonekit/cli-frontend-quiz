"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Question {
    constructor(message, options, correctAnswerIndex) {
        this.message = message;
        this.correctAnswerIndex = correctAnswerIndex;
        this.options = options.map((option) => ({
            label: option,
            value: option,
        }));
    }
}
exports.default = Question;
