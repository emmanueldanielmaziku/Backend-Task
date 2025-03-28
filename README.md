## Features
- MySQL database with a `users` table
- Stored procedure `addUser` to insert new users
- Node.js script to interact with the database
- `.env` file for environment variables

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/emmanueldanielmaziku/Backend-Task.git
cd Backend-Task
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the following:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase
```

### 4. Configure the Database

#### Create MySQL Database
Run the following SQL command in your MySQL client:
```sql
CREATE DATABASE yourdatabase;
```

#### Import `database.sql`
Run the following command to import the `database.sql` file:
```bash
mysql -u root -p yourdatabase < database.sql
```
You will be prompted to enter the correct database name and password for your MySQL server/database.

### 5. Run the Server
```bash
node server.js
```

## Usage
The `server.js` script calls the `addUser` stored procedure to insert a new user. Modify the function call to insert different users:
```javascript
addUser('example@example.com', 'securepassword', 'admin');
```

## Dependencies
- **Node.js**
- **mysql2** (MySQL client for Node.js)
- **dotenv** (for managing environment variables)

## License
This project is licensed under the MIT License.
