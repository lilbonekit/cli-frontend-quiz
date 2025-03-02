"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSpinner = runSpinner;
exports.greetings = greetings;
exports.outro = outro;
const p = __importStar(require("@clack/prompts"));
const picocolors_1 = __importDefault(require("picocolors"));
function runSpinner(duration) {
    return __awaiter(this, void 0, void 0, function* () {
        const spinner = p.spinner();
        spinner.start();
        yield new Promise((resolve) => setTimeout(resolve, duration));
        spinner.stop();
    });
}
function greetings() {
    p.intro(`${picocolors_1.default.cyan('🌟 Welcome to the Ultimate Quiz Challenge! 🌟')}`);
}
function outro(totalCorrect, total) {
    if (totalCorrect < 6) {
        p.outro(picocolors_1.default.red(`🚨 Oops! You didn't pass the quiz. 🚨\n` +
            `You got ${totalCorrect} out of ${total} correct. Try again and keep learning! 💪`));
    }
    if (totalCorrect >= 6) {
        p.outro(picocolors_1.default.green(`🎉 Congratulations! You've completed the quiz! 🎉\n` +
            `🥳 You got ${totalCorrect} out of ${total} correct! 🥳\n` +
            `💡 Stay curious and keep learning! 💡`));
    }
}
