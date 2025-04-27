# Vehicles UI - Authentication System

This project implements a basic authentication flow using **Next.js** and **JWT tokens**, without using React Context.

The work is done in vehicle-UI by me
The work in vehicle-UI-complete is done by the educator

This project requires the **simple-API** backend from this repository:  
👉 [WEB422 Week9 - Introduction to JWT](https://github.com/gkurkjian/WEB422_Week9_Introductin-to-JWT)

## Running the Backend (Simple API)

1. Navigate to the `simple-API` folder in Week9.
2. Open Terminal or Git Bash inside that folder.
3. Run the server:

```bash
node server.js


## Project Structure

- `pages/_app.js`: Wraps the app with `RouteGuard` and `Layout`.
- `pages/index.js`: Home page.
- `pages/login.js`: User login page with JWT token authentication.
- `pages/vehicles.js`: Protected page showing vehicles data after authentication.
- `components/Layout.js`: Page layout, wraps Navigation + page content.
- `components/Navigation.js`: Dynamic navbar showing Login/Logout based on token presence.
- `components/RouteGuard.js`: Prevents access to private pages if not authenticated.
- `lib/authenticate.js`: Authentication helper functions (token management).

## How it Works

- User submits login credentials at `/login`.
- Error message will show on wrong UserName or Password entry
- If successful, `authenticateUser` saves the token to `localStorage`.
- User is redirected to `/vehicles`.
- `Navigation` re-renders, reads the new token, and updates navbar to show "Vehicles" and "Logout".
- "Logout" clears the token and redirects to the home page.

## Technologies

- Next.js 14
- React Bootstrap
- JWT Decode (for parsing JWT token)

## Notes

- No useState/useEffect inside `Navigation` — reads token at render.
- `RouteGuard` still uses useState/useEffect to handle route protection.
- No router reload is needed after login.

---
