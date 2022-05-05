import React from 'react'
import TherapyCard from '../therapiesCard/TherapyCard'

export default function TherapySection({ therapies, sectionClass }) {
    return (
        <section className={sectionClass}>
            {sectionClass === 'section1' &&
                <h1>Terapias</h1>
            }
            <div className="row">
                {therapies.map((ther, idx) => (
                    <TherapyCard
                        key={idx}
                        therapy={ther}
                    />
                ))
                }
            </div>
        </section>
    )
}