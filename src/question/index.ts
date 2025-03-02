import QuestionBuilder from './QuestionBuilder'

const questionsData = [
	{
		question: '1) What is the virtual DOM in React?',
		answers: [
			'A collection of app data',
			'A memory representation of the UI synchronized with the real DOM',
			'A simple method to interact with the server',
		],
		correctAnswerIndex: 1,
	},
	{
		question: '2) What is Web3?',
		answers: [
			'A set of technologies to improve user interfaces',
			'A decentralized network based on blockchain technology',
			'The new version of the internet using web services',
		],
		correctAnswerIndex: 1,
	},
	{
		question: '3) What is `useEffect` in React?',
		answers: [
			'A hook that lets you run side effects in a component',
			'A hook for managing state',
			'A hook for handling forms',
		],
		correctAnswerIndex: 0,
	},
	{
		question:
			'4) What method is used to make asynchronous requests in the browser?',
		answers: ['`fetch`', '`XMLHttpRequest`', '`axios`'],
		correctAnswerIndex: 0,
	},
	{
		question: '5) What is a smart contract in Web3?',
		answers: [
			'A program running on a server',
			'A contract that executes automatically on the blockchain',
			'A UI for interacting with Web3',
		],
		correctAnswerIndex: 1,
	},
	{
		question: '6) What is CORS in web development?',
		answers: [
			'A browser security policy to manage access to data from other domains',
			'A technology for speeding up page loads',
			'A data transfer protocol between the browser and server',
		],
		correctAnswerIndex: 0,
	},
	{
		question: '7) What are React Hooks?',
		answers: [
			'Methods for component lifecycle',
			'Functions for managing state and side effects in functional components',
			'Special classes for components',
		],
		correctAnswerIndex: 1,
	},
	{
		question: '8) What authentication mechanism is commonly used in Web3 apps?',
		answers: ['JWT tokens', 'Metamask', 'OAuth'],
		correctAnswerIndex: 1,
	},
	{
		question: '9) What is the main purpose of WebSockets in Web3?',
		answers: [
			'For real-time communication between the client and server',
			'For fetching static content',
			'For running smart contracts',
		],
		correctAnswerIndex: 0,
	},
	{
		question:
			'10) Which protocol is used for decentralized file storage in Web3?',
		answers: ['IPFS', 'HTTP', 'FTP'],
		correctAnswerIndex: 0,
	},
]

export const questions = questionsData.map(
	(data) =>
		new QuestionBuilder(data.question, data.answers, data.correctAnswerIndex)
)

export default questions
