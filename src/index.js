import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavbarComponent from './Components/NavBarComponents';
import LivrosExercise from './Exercise/Livros';
import BemVindoExercise from './Exercise/BemVindo';
import FilmesExercise from './Exercise/Filmes';
import LoginExercise from './Exercise/login';
import CadastroExercise from './Exercise/Cadastro';

const router = createBrowserRouter([

  {
    path: "/",
    element: <BemVindoExercise/>,
  },
  {
    path: "/bemvindo",
    element: <BemVindoExercise/>,
  },
  {
    path: "/filmes",
    element: <FilmesExercise/>,
  },
  {
    path: "/livros",
    element: <LivrosExercise/>,
  },
  {
    path: "/login",
    element: <LoginExercise/>,
  },
  {
    path: "/cadastro",
    element: <CadastroExercise/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComponent/>
   <RouterProvider router={router}/> 
  </React.StrictMode>
);
reportWebVitals();