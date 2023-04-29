# Project Name

This is a sample project that uses React for the frontend and Django for the backend.

## Development Environment Setup

### System Requirements

1. Git should be installed on your machine.
2. Node.js should be installed. You can download it from [https://nodejs.org/](https://nodejs.org/).
3. Python 3.6 or higher should be installed on your machine.
4. PostgreSQL should be installed on your machine.

### Steps to Prepare the Workspace

1. Clone this repository: `git clone https://github.com/username/projectname.git`.
2. `cd` into the `projectname` directory.
3. Run `npm install` to install the required dependencies for the React app.
4. `cd` into the `backend` directory.
5. Create a Python virtual environment by running `python -m venv venv`.
6. Activate the virtual environment by running `source venv/bin/activate`.
7. Run `pip install -r requirements.txt` to install the required dependencies for the Django app.
8. Create a PostgreSQL database named `projectname`.
9. Create a `.env` file in the `backend` directory with the following contents:


Replace `username` and `password` with your PostgreSQL username and password.

### Running the Application

1. `cd` into the `projectname` directory.
2. `cd` into the `backend` directory.
3. Activate the virtual environment by running `source venv/bin/activate`.
4. Run `python manage.py migrate` to create the database tables.
5. Run `python manage.py runserver` to start the Django development server.
6. Open a new terminal window and `cd` into the `projectname` directory.

### Building the Frontend
1. `cd` into the `frontend` directory.
2. Run `npm start` to start the React development server.
3. Open your browser and go to [http://localhost:3000/](http://localhost:3000/).
