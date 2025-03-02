import * as p from '@clack/prompts'
import color from 'picocolors'

export async function runSpinner(duration: number) {
	const spinner = p.spinner()
	spinner.start()
	await new Promise((resolve) => setTimeout(resolve, duration))
	spinner.stop()
}

export function greetings() {
	p.intro(`${color.cyan('🌟 Welcome to the Ultimate Quiz Challenge! 🌟')}`)
}

export function outro(totalCorrect: number, total: number) {
	if (totalCorrect < 6) {
		p.outro(
			color.red(
				`🚨 Oops! You didn't pass the quiz. 🚨\n` +
					`You got ${totalCorrect} out of ${total} correct. Try again and keep learning! 💪`
			)
		)
	}

	if (totalCorrect >= 6) {
		p.outro(
			color.green(
				`🎉 Congratulations! You've completed the quiz! 🎉\n` +
					`🥳 You got ${totalCorrect} out of ${total} correct! 🥳\n` +
					`💡 Stay curious and keep learning! 💡`
			)
		)
	}
}
