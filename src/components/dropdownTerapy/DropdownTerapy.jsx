import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, dropdownToggle} from "reactstrap"

export default function DropdownTerapy() {

  return (
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Terapias
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Kinesiología Integral</a></li>
        <li><a class="dropdown-item" href="#">Masoterapia Integral</a></li>
        <li><a class="dropdown-item" href="#">Psicología Gestalt</a></li>
        <li><a class="dropdown-item" href="#">Psicología y Arteterapia</a></li>
        <li><a class="dropdown-item" href="#">Psicologia, Terapia Floral, Constelaciones, Transpersonal</a></li>
        <li><a class="dropdown-item" href="#">Nutrición Orthomolecular</a></li>
        <li><a class="dropdown-item" href="#">Medicina Orthomolecular</a></li>
        <li><a class="dropdown-item" href="#">Biodescodificación</a></li>
        <li><a class="dropdown-item" href="#">Osteopatía</a></li>
        <li><a class="dropdown-item" href="#">Medicina China</a></li>
        <li><a class="dropdown-item" href="#">Nutrición Holística</a></li>
        <li><a class="dropdown-item" href="#">Nutrición Deportiva</a></li>
        <li><a class="dropdown-item" href="#">Psicología deportiva</a></li>
        <li><a class="dropdown-item" href="#">Puericultura</a></li>
      </ul>
    </div>
  )
}