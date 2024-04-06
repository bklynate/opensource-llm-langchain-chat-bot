# CLI Chatbot with LangChain and LMStudio

## Overview

This CLI chatbot leverages LangChain and LMStudio to create an interactive chat interface, aiming to provide informative responses through advanced NLP.

## Features

- **Interactive Chat Interface**: Command-line interface for user-bot communication.
- **Memory Management**: Utilizes LangChain's ConversationSummaryBufferMemory for context handling.
- **Customizable Prompts**: Supports customizable prompt templates.
- **Local LLM Integration**: Integrates with local language models for efficient response generation. For more details on finding and running local LLMs, visit [LMStudio](https://lmstudio.ai/)

## Getting Started

1. **Installation**: Clone the repo and run `npm install`.
2. **Running the Chatbot**: Launch with `npm start`, type messages, and exit with "exit".
3. **Customization**: Modify prompt templates and memory settings as needed.

## Dependencies

- `commander`, `inquirer`, `chalk`, `langchain`

## Contributing

Contributions are welcome. Submit pull requests or open issues for discussion.

## License

MIT License
