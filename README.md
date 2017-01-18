# backend-web-logger
A node.js logger for Web applications.

## What's in the box
Three folders:
  - server
  - client
  - test

### server
It is the core framework, it should be run on a server with a pubic IP address. To start the server write
```sh
$ cd server
$ npm install
$ node index.js
```
Default port is 3600.

### client
```sh
$ cd client
$ npm install
```

### test
This is a basic test application which requires the client module. In a new terminal write:
```sh
$ cd test
$ node index.js
```

The test application requires the client module passing the appToken *123456*.

Now, open the browser at http://SERVER_IP:3600 and insert the appToken (123456) to view logs.
