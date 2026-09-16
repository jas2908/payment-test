import React from 'react'
import './pricelist.css'

const PriceList = () => {

    const sections = [
        {
            title: "Kurs",
            items: [
                ["Trafikalt grunnkurs", "2000,-"],
                ["Trafikant i mørket", "2000,-"],
                ["Førstehjelpskurs", "1000,-"],
                ["Bilkjøringens risiko (teori 2t)", "900,-"],
                ["Kjøring i landeveismiljø (5t)", "5000,-"],
                ["Planlegging og variert miljø (4t)", "3900,-"],
                ["Refleksjon og oppsummering (teori 2t)", "900,-"],
                ["Sikkerhetskurs på bane inkl gebyr", "7200,-"]
            ]
        },
        {
            title: "Kjøretimer",
            items: [
                ["Kjøretime (45 min)", "900,-"],
                ["Kjøretime helg (45 min)", "1000,-"],
                ["Kartleggingstime (90 min)", "1800,-"],
                ["Dobbeltime etter kl. 16", "2000,-"],
                ["Dobbeltime helg (90 min)", "2000,-"],
                ["Trinnvurderingstime 2 (45 min)", "900,-"],
                ["Trinnvurderingstime 3 (60 min)", "1300,-"]
            ]
        },
        {
            title: "Førerprøve",
            items: [
                ["Leie av bil til førerprøve Oslo (60 min før)", "4450,-"],                
                ["Leie av bil til førerprøve Drøbak (60 min før)", "5600,-"],                
            ]
        },
        {
            title: "Offentlige gebyrer",
            items: [
                ["Teoriprøve", "480,-"],
                ["Førerprøve", "1540,-"],
                ["Førerprøvekort", "160,-"],
                ["Digitalt bilde", "100,-"],
                ["NAF-gebyr", "1550,-"]
            ]
        }
    ]

    return (
        <div id="pricing">

            <div className="pricing-container">

                <h2 className="pricing-title">
                    Full prisliste
                </h2>

                <div className="pricing-grid">

                    {sections.map((section, i) => (

                        <div className="pricing-card" key={i}>

                            <h3>
                                {section.title}
                            </h3>

                            {section.items.map((item, idx) => (

                                <div className="price-item" key={idx}>

                                    <span>
                                        {item[0]}
                                    </span>

                                    <strong>
                                        {item[1]}
                                    </strong>

                                </div>

                            ))}

                            {section.title === "Førerprøve" && (
                                <p className="price-note">
                                    Leie av bil til andre stasjoner – ta kontakt.
                                </p>
                            )}

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default PriceList