# Real-Time Chat Application Backend

This is the backend implementation of a real-time chat application using Socket.io and Express.js.

## Features

- Real-time messaging: Users can send and receive messages instantly without having to refresh the page.
- Multiple users: The application supports multiple users chatting simultaneously.
- User presence: Displays a list of currently connected users.

## Technologies Used

- **Socket.io**: For real-time communication between the server and clients.
- **Express.js**: As the backend framework for handling HTTP requests and routing.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.

## Getting Started

To run this backend server locally, follow these steps:

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/AmoghCreator/Chat-app-using-socket.io-server
   ```

2. Navigate to the project directory:

   ```bash
   cd Chat-app-using-socket.io-server

   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The server will be running on `http://localhost:8080` by default.

## Socket.io Events

- **joinRoom**: Sent by the client when a user joins the chat room. It adds the user to the `userList` array and emits signals to update the chat history and user list.
- **newChat**: Sent by the client when a new message is sent. It adds the message to the `chats` array and emits a signal to update the chat history.
- **disconnect**: Sent by Socket.io when a user disconnects from the server. It removes the user from the `userList` array and emits a signal to update the user list.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the developers of Socket.io, Express.js, and CORS middleware for providing the tools necessary to build real-time applications.
# Chat-app-using-socket.io-server
