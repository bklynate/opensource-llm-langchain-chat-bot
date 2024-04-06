import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { ConversationChain } from 'langchain/chains';
import {
  ConversationSummaryBufferMemory,
} from 'langchain/memory';
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from '@langchain/core/prompts';
import { getLocalModel } from './utils/getModel.js';

// Initialize the LangChain components
const llm = getLocalModel();
const chatllm = getLocalModel();

const prompt = ChatPromptTemplate.fromMessages([
  SystemMessagePromptTemplate.fromTemplate(
    'You are a helpful AI, that takes their job of answering questions very seriously.',
  ),
  new MessagesPlaceholder('messages'),
  HumanMessagePromptTemplate.fromTemplate('{content}'),
]);

const memory = new ConversationSummaryBufferMemory({
  memoryKey: 'messages',
  returnMessages: true,
  llm,
  maxTokenLimit: 10,
});

const chain = new ConversationChain({
  memory,
  prompt,
  llm: chatllm,
});

const program = new Command();

program
  .name('chatbot')
  .description('CLI to interact with a chatbot. Type "exit" to stop.');

program.parse(process.argv);

const chatWithBot = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'userInput',
        message: 'You: (type "exit" to quit)',
      },
    ]);

    if (answers.userInput.toLowerCase() === 'exit') {
      console.log(chalk.yellow('Ending chat. Goodbye!'));
      process.exit();
    } else {
      // Send user input to the LLMChain and wait for the response
      const { response } = await chain.invoke({
        content: answers.userInput,
      });

      console.log(chalk.blue('Bot:'), chalk.blueBright(response));

      // Recursively call for the next input
      await chatWithBot();
    }
  } catch (error) {
    console.error(chalk.red('An error occurred:'), error);
    process.exit(1);
  }
};

// Start the chat
await chatWithBot();
