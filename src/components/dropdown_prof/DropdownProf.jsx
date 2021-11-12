import React, {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, dropdownToggle} from "reactstrap"

export default function DropdownProf() {
    const [dropdown, setDropdown] = useState(false)

    const OpenCloseDropdown = () => setDropdown(!dropdown)

    const linkProf = () => alert('Action works!') //HAY QUE LINKEAR C/ ITEM

    return(
        <div className="App">
        {/* <Dropdown isOpen={dropdown} toggle={OpenCloseDropdown}>
        <DropdownToggle caret>
          Profesionales
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={linkProf}>Martin Mele</DropdownItem>
          <DropdownItem>Maria Eugenia Samora</DropdownItem>
          <DropdownItem>Camila García Solares</DropdownItem>
          <DropdownItem>Felipe Pérez</DropdownItem>
          <DropdownItem>Ana Sorrentino</DropdownItem>
          <DropdownItem>Nadia Urrutia</DropdownItem>
          <DropdownItem>Ayelen Stroia</DropdownItem>
          <DropdownItem>Romina Piazzi</DropdownItem>
          <DropdownItem>Ana Laura Errani</DropdownItem>
          <DropdownItem>Damian Hernandez Rubio</DropdownItem>
          <DropdownItem>Roxana Bochniak</DropdownItem>
          <DropdownItem>Agustin Hernandez</DropdownItem>
          <DropdownItem>Sebastian Moreno</DropdownItem>
          <DropdownItem>Antonella de la Rosa</DropdownItem>
          <DropdownItem>Felicitas Lema</DropdownItem>
          <DropdownItem>Cesar Silveyra</DropdownItem>

        </DropdownMenu>
        
      </Dropdown> */}
        </div>

    )
}