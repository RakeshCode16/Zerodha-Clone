📈 Zerodha Clone: MERN Stack Trading Dashboard

This is a modern full-stack web application that replicates the key features (Holdings, Positions, Order Management) of the Console dashboard of the famous Indian stock broker, Zerodha. The project is built using React, Node.js, Express.js, and MongoDB.
✨ Key Features
🛡️ Secure Authentication: Secure signup/login functionality using JWT (JSON Web Token).
💼 Portfolio Management: Displays the user's current Holdings and Live Positions.
🛒 Order System: Feature to place new Buy/Sell orders in the market.
🌐 Separated Architecture: Frontend (Vercel) and Backend (Render) are deployed separately.
⚙️ Responsive Design: Designed for optimal viewing on both Laptop and Desktop devices.
🛠️ Technology StackComponentTechnologyKey Libraries/FrameworksFrontend/DashboardReactAxios, React RouterBackend/APINode.js (Express)Mongoose, CORS, Body-ParserDatabaseMongoDB AtlasDatabase-as-a-Service (DBaaS)SecurityJWT & bcryptToken-based Authentication, Password Hashing

🌐 Live DeploymentThis project is publicly deployed at the following URLs:
Frontend/Dashboard (Vercel): [https://zerodha-clone-green-nu.vercel.app]
Backend API Endpoint (Render): [https://zerodha-clone-qetz.onrender.com]

💻 Local Setup GuideTo run this project on your local machine, you must follow these

steps.1. Clone the RepositoryBashgit clone https://github.com/RakeshCode16/Zerodha-Clone.git
cd Zerodha-Clone
2. Setup the BackendInstall Dependencies:Bashcd backend
npm install
Create .env file: Create a .env file in the backend folder and add your MongoDB and JWT Secret:# Replace the MONGO_URL with your MongoDB Atlas connection string
MONGO_URL=mongodb+srv://<user>:<password>@cluster0.abcde.mongodb.net/zerodha-clone

# Set a strong, secret key
JWT_SECRET=YOUR_SECURE_RANDOM_JWT_KEY
Start the Server:Bashnpm start
# The server should be running on http://localhost:3002
3. Setup the FrontendInstall Dependencies:Bashcd ../frontend
npm install
Start the Application:Bashnpm start
# The application should open on http://localhost:3000
4. Setup the DashboardInstall Dependencies:Bashcd ../dashboard
npm install
Start the Application:Bashnpm start
# The application should open on http://localhost:3000
🤝 ContributingContributions, bug reports, and feature requests are always welcome!Fork the repository.Create a new branch (git checkout -b feature/new-feature-name).Commit your changes (git commit -m 'feat: Added new feature').Push the branch (git push origin feature/new-feature-name).Open a Pull Request.

✨ Dependencies
express

mongoose

ejs / ejs-mate

method-override

dotenv

passport / passport-local / passport-local-mongoose

express-session

connect-flash

multer / multer-storage-cloudinary

cloudinary

joi

cookie-parser

👩‍💻 Author
Rakesh Kumar BCA Student | MERN Stack Developer