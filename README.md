## Real-Time-Task-Management-System

Real-time task management system where users can create tasks, assign them to others, and track progress collaboratively. The application is designed for efficient real-time updates, allowing users to see changes instantly. MongoDB is used to store user data and task records, and Redis is used as a message broker for real-time communication.
## Author

- [Likesh Kewat](https://github.com/likesh-123/Real-Time-Task-Management-System)


## Run Locally

Clone the project

```bash
  git clone https://github.com/likesh-123/Real-Time-Task-Management-System.git
```

Go to the project directory

```bash
  cd Real-Time-Task-Management-System
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Implementation

- Implemented user registration with a unique username. Check user
- Users can create tasks with details such as title, description, and due date. Check taskSchema for the task related operations. Check userSchema for the user related operations
- Implemented CRUD operations for tasks.
- Users can assign tasks to others and track task status using update-task api.
- Implement strategy of pub-sub of the redis for handling real-time updates efficiently, such as when a task is created, assigned, or completed.
## Optimizations

Database Scaling:

- Database Sharding: Distribute your database across multiple shards, each handling a subset of users. Sharding can be based on user IDs, geographical locations, or any other relevant criteria. Consider using a database that supports sharding, such as MongoDB or a distributed SQL database.

- Read and Write Replicas: Use read replicas for read-heavy operations to distribute the read load. Consider having a primary database for write operations and multiple secondary read replicas databases according to the requirement for read operations.

- Caching: Implement caching mechanisms to reduce the load on the database. Using tools like Redis to cache frequently accessed data. Cache user authentication information and frequently accessed task data.

- Use the proper indexing wherever required

Application Server Scaling:

- Load Balancing: Deploy multiple instances of your application server and use a load balancer to distribute incoming requests among them. Consider using a load balancer that supports session affinity to maintain user sessions.

- Microservices Architecture: Break down your application into microservices, each responsible for a specific functionality. This allows independent scaling of different components. Use asynchronous communication between microservices.


Real-Time Communication:
- WebSockets: Implement WebSocket for real-time communication between the server and clients. Use a message broker (e.g., Redis Pub/Sub or kafka if you need faster streaming and if there is high volume of data) for efficient communication.

- Scalable Message Broker: Ensure that your message broker (e.g., Redis) can handle the increased load. Consider clustering and replication for high availability.

Horizontal Scaling:

- Containerization and Orchestration: Use containerization tools like Docker to package your application and its dependencies. Employ container orchestration tools like Kubernetes for efficient deployment, scaling, and management of containers.

- Auto-Scaling: Set up auto-scaling policies to automatically adjust the number of instances based on demand. Cloud providers like AWS, Azure, and Google Cloud offer auto-scaling features.