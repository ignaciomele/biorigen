import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, dropdownToggle} from "reactstrap"

export default function DropdownTerapy() {
  const [dropdown, setDropdown] = useState(false)

  const linkTerapia = () => {
    alert('Action works!') //HAY QUE LINKEAR C/ ITEM
  }

  const OpenCloseDropdown = () => setDropdown(!dropdown)

  return (
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
  </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
      /* <Dropdown isOpen={dropdown} toggle={OpenCloseDropdown}>
        <DropdownToggle caret>
          Terapias
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={linkTerapia}>Kinesiologia Integral</DropdownItem>
          <DropdownItem>Masoterapia Integral</DropdownItem>
          <DropdownItem>Psicología Gestalt</DropdownItem>
          <DropdownItem>Psicología y Arteterapia</DropdownItem>
          <DropdownItem>Psicologia, Terapia floral, Constelaciones, Transpersonal</DropdownItem>
          <DropdownItem>Nutrición Orthomolecular</DropdownItem>
          <DropdownItem>Medicina Orthomolecular</DropdownItem>
          <DropdownItem>Biodescodificación</DropdownItem>
          <DropdownItem>Osteopatía</DropdownItem>
          <DropdownItem>Medicina China</DropdownItem>
          <DropdownItem>Nutrición Holística</DropdownItem>
          <DropdownItem>Nutrición Deportiva</DropdownItem>
        </DropdownMenu>
        
      </Dropdown> */

  )
}