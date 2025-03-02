export default class Question {
	message: string
	options: { label: string; value: string }[]
	correctAnswerIndex: number

	constructor(message: string, options: string[], correctAnswerIndex: number) {
		this.message = message
		this.correctAnswerIndex = correctAnswerIndex
		this.options = options.map((option) => ({
			label: option,
			value: option,
		}))
	}
}
