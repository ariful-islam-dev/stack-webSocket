# WebSocket

### Communication Category
- Simplex
- Half-Duplex(Take Turns)
- Full-Duplex (Simultaneous)


<p>A WebSocket is a communication protocol that provides ful-duplex communitaion channels over a single. logn-lived connection. it is desinged to be implemented in web browsers and web servers but can be used by any client or server by can be used by any client or server application.</p>

<p>The WebSocket protocol starts with a handshake initiated by the client and server. after which they can exchange data in both directions without the need to re-establish the connection. This makes WebSockets well-suited for scernarios where real-time updates and low-latency communication are essential.</p>

#### Full-Duplex Communication:
Unlike traditional web communincation (HTTP), where teh client sends a request and waitsfor a respones. WebSonckets allows for bi-directional communication. Both the client and server can send messages to each other independently.
#### Low latency: 
WebSockets reduce latency compared to traditional HTTP polling methods because they establish a persistent connection, eliminationg the need to repeatedly open and close connections for each exchange. 
#### Real-time Communication: 
WebSockets are commonly used tor real-time appliationsuch as chat application, financial trading platforms, and live sports updates. They enable the server to push data to the connected clients instantly.
#### WebSocket API:
Both the browser and server provide APIs for woking the WebSockets. In a web browser. the JavaScript WebSocket API is used to establish and manage WebSocket connections. On the the server side. various programming language teh frameworks provide WebSocket support.


## Differences between HTTP and WebSocket:
<p>HTTP (Gypertext Transfer Protocol) and WebSocket are both communication protocols, but they server defferent purposes and have distinct characteristics.</p>

### Communication Type:
#### HTTP:
<p>It is a request-reponse protocol. The client sends a request to the server, and the server responds to that request. This is a unidirectional communication model.</p>

#### WebSocket:
<p>It provides full-duplex communication. Both the client and server and send messages independently at any time. allowing for bi-directional comunication.</p>

### Connection Lifecycle: 
#### HTTP: 
It follows a request-response model a new connection is established for each request and it is closed after the response is received. This can result in higher latency. especially for applications requireing real-time updates.
#### WebSocket: 
It establishes a persistent connection between the client and server. allowing for continuous communication. The connection is established with a handshake. and onece open. it can be used for multiple messages in both directions without the need to reopen the connection each time.

### Usage:
#### HTTP: 
Primarily used for traditional web browsing. where a client requests a webpage, and the server responds with the requested content. It is also used for RESTful APIs.

#### WebSocket: 
<p>Webll-suited for real-time applications where low latency and bidirectional connunication are crucial, such as chat application, online gaming. finalcial platforms, adn live updates.</p>


# About Application

## Using Packages
- [x] express
- [ ] dotenv
- [ ] cors
- [x] socket.io
- [ ] nodemon -Dev

## Folder Structure
- public/
  - views/
- src/
  - middleware/
  - routes/
  - service/
  - utils/
- .gitignore
- package.json
- README.md
