import React from 'react'
import Heading from '../common/Heading'
import './packages.css'

const Packages = () => {
    return (
        <section className="packages">
            <div className="container">

                <Heading
                    title="Pakkepriser"
                    subtitle="Spar penger ved å velge en av våre ferdige pakker for Klasse B."
                />

                <div className="packages-grid">

                    {/* PACKAGE 1 */}
                    <div className="package-card">

                        <span className="package-header">STARTPAKKE</span>

                        <div className="package-price">
                            5 200 <span>kr</span>
                        </div>

                        

                        <div className="package-saving">
                            Spar 200 kr
                        </div>

                        {/* PAYMENT BUTTON */}
                            <a
                                href="https://buy.stripe.com/test_dRm6oB3r7bwL76R3VqaZi00"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="package-payment-button"
                            >
                                Kjøp Startpakke
                            </a>

                        <div className="package-content">

                            <p className="package-description">
                                En enkel startpakke for deg som ønsker å komme
                                godt i gang med kjøretimene.
                            </p>

                            <ul>
                                <li>
                                    <i className="fa fa-check"></i>
                                    6 kjøretimer
                                </li>

                                <li>
                                    <i className="fa fa-clock"></i>
                                    Gjelder kl. 07.00–15.00
                                </li>

                                <li>
                                    <i className="fa fa-info-circle"></i>
                                    Kan kjøpes én gang
                                </li>
                            </ul>

                            

                        </div>
                    </div>


                    {/* PACKAGE 2 */}
                    <div className="package-card">

                        <span className="package-header">KLASSE B</span>

                        <div className="package-price">
                            27 500 <span>kr</span>
                        </div>

                        <div className="package-saving">
                            Spar 2100 kr
                        </div>

                        {/* PAYMENT BUTTON */}
                            <a
                                href="https://buy.stripe.com/test_eVq9ANbXDcAPgHrcrWaZi01"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="package-payment-button"
                            >
                                Kjøp Klasse B
                            </a>

                        <div className="package-content">

                            <p className="package-description">
                                Alt obligatorisk opplæring kombinert med
                                7 kjøretimer på dagtid.
                            </p>

                            <ul>
                                <li>
                                    <i className="fa fa-check"></i>
                                    7 kjøretimer à 45 min.
                                </li>

                                <li>
                                    <i className="fa fa-check"></i>
                                    Trinnvurdering trinn 2 – 1 t. à 45 min.
                                </li>

                                <li>
                                    <i className="fa fa-check"></i>
                                    Sikkerhetskurs på bane – 4 t. à 45 min.
                                </li>

                                <li>
                                    <i className="fa fa-check"></i>
                                    Trinnvurdering trinn 3 – 1 t. à 60 min.
                                </li>

                                <li>
                                    <i className="fa fa-check"></i>
                                    Sikkerhetskurs på vei – 13 t. à 45 min.
                                </li>

                                <li>
                                    <i className="fa fa-check"></i>
                                    Leie av bil til førerprøve
                                </li>

                                <li>
                                    <i className="fa fa-check"></i>
                                    Baneleie inkludert
                                </li>

                                <li>
                                    <i className="fa fa-clock"></i>
                                    Gjelder kl. 07.00–16.00
                                </li>
                            </ul>
                            

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Packages

