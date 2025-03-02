#!/usr/bin/env node

import * as p from '@clack/prompts'
import questions from './question'
import { greetings, outro, runSpinner } from './utils'

let totalCorrect = 0

async function runQuiz() {
	console.clear()
	greetings()

	for (const question of questions) {
		const { message, options, correctAnswerIndex } = question

		const answer = await p.select({
			message,
			options,
		})

		await runSpinner(1_000)

		if (answer === options[correctAnswerIndex].value) totalCorrect++
	}

	outro(totalCorrect, questions.length)
}

runQuiz().catch(console.error)
