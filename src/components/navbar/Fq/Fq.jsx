import React, { useEffect } from 'react'
import useCounter from '../../../hooks/useCounter'


const BiorigenLikes = () => {
    const [count, increment, decrement, reset] = useCounter(0, 1)

    useEffect(() => {
        console.log('count changed to:', count)
    }, [count])

    return (
        <div>
            <h2>Likes: {count}</h2>
            <br />
            <button onClick={increment}> LIKE</button>
            <button onClick={decrement}> UNLIKE</button>
            <button onClick={reset}> RESET</button>
        </div>
    )
}

export default BiorigenLikes















// export default class Fq extends Component {
//     render() {
//         return (
//             <div>
//                 <Navbar/>
//                 <h1>Preguntas Frecuentes</h1>
//                 <h3>¿Cómo solicito un turno?</h3>
//                 <h3>¿En qué horarios puedo solicitarlo?</h3>
//                 <h3>¿Dónde estan ubicados?</h3>
//                 <h3>¿Con qué terapias trabajan?</h3>
//                 <h3>¿Cómo encuentro al profesional que estoy buscando?</h3>
//                 <h3>¿Tienen redes sociales?</h3>

//                 <section>

//                 </section>
//             </div>
//         )
//     }
// }