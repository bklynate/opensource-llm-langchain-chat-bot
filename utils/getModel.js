/* eslint-disable max-len */
import { ChatOpenAI } from '@langchain/openai';

const localModelConfig = {
  openAIApiKey: 'sk-1234',
  apiKey: 'sk-1234',
  temperature: 0,
  configuration: {
    baseURL: 'http://localhost:1234/v1/',
  },
};

/**
 * Returns the local model with optional configuration.
 * @param {object} options - Additional configuration options for the local model.
 * @returns {OpenAI} - The local model.
 */
export function getLocalModel(options = {}) {
  return new ChatOpenAI({
    ...localModelConfig,
    ...options,
  });
}
