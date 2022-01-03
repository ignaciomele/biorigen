import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {

    return(
      <div className="App">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Profesionales
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Martin Mele</a></li>
            <li><a class="dropdown-item" href="#">Maria Eugenia Samora</a></li>
            <li><a class="dropdown-item" href="#">Camila García Solares</a></li>
            <li><a class="dropdown-item" href="#">Felipe Pérez</a></li>
            <li><a class="dropdown-item" href="#">Ana Sorrentino</a></li>
            <li><a class="dropdown-item" href="#">Nadia Urrutia</a></li>
            <li><a class="dropdown-item" href="#">Ayelen Stroia</a></li>
            <li><a class="dropdown-item" href="#">Romina Piazzi</a></li>
            <li><a class="dropdown-item" href="#">Ana Laura Errani</a></li>
            <li><a class="dropdown-item" href="#">Damian Hernandez Rubio</a></li>
            <li><a class="dropdown-item" href="#">Roxana Bochniak</a></li>
            <li><a class="dropdown-item" href="#">Agustin Hernandez</a></li>
            <li><a class="dropdown-item" href="#">Sebastian Moreno</a></li>
            <li><a class="dropdown-item" href="#">Antonella de la Rosa</a></li>
            <li><a class="dropdown-item" href="#">Felicitas Lema</a></li>
            <li><a class="dropdown-item" href="#">Cesar Silveyra</a></li>
            <li><a class="dropdown-item" href="#">Dra. Marina Caballero</a></li>
          </ul>
        </div>
      </div>
    )
}