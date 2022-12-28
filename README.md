# crm-nodejs-vue

CRM system allows to:

- authorize users
- manage users

### Tech stack

Infrastructure: Docker  
Client: Vue3 + TypeScript  
Server: NodeJs

### Debug

1. In Webstorm: **Run/Debug Configuration -> Attach to
   Node.js/Chrome -> Setup Name=Express, Directory=server,
   Reconnect automatically=yes** And then connect to
   running process.

### Development mode

1. Run `make start` to run containers
2. Run `make watch-server` to run server  
   ![img.png](/documentation/pics/start-server.png)
3. Run `make serve-client` to run client  
   ![img_1.png](/documentation/pics/start-client.png)
4. Open browser in `http://localhost:8080`
