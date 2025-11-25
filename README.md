# 🎵 Music Platform

## Overview  
Music Platform is a full‑stack web application for streaming and managing audio tracks.  
It allows users to upload music with cover images, track listens, and interact through comments.  

## Tech Stack  
**Frontend (client):**  
- Next.js  
- React  
- Redux Toolkit + Thunk  
- Material‑UI (MUI)  
- TailwindCSS, Sass  

**Backend (server):**  
- NestJS  
- MongoDB + Mongoose  
- RxJS  
- UUID  

**Tools:**  
- TypeScript  
- ESLint + Prettier  
- Jest (unit/e2e tests)  
- Git  
- Postman (API testing)  

## Features  
- Upload and store audio tracks with cover images  
- Stream audio files directly from the server  
- Track number of listens per track  
- Add and manage user comments  
- Modular architecture for both frontend and backend  
- Postman collection for API testing  

## Installation & Usage  

```bash
# Clone repository
git clone https://github.com/your-username/music-platform.git
cd music-platform

# Client setup
cd client
npm install
npm run dev

# Server setup
cd ../server
npm install
npm run start:dev
```
## Project Structure
```
music-platform/
 ├── client/    # Next.js frontend
 ├── server/    # NestJS backend
 └── postman/   # Postman collection for API testing
```


## API Testing with Postman  
A Postman collection is included in the `postman/` folder.  
Import it into Postman to test endpoints such as:  
- Upload track  
- Get track by ID  
- Add comment  
- Track listens  

## Purpose  
This project was built as a personal learning initiative to strengthen skills in modern web development.  
It demonstrates practical experience in building scalable applications with real‑world features.  

 
