import React, { useState, useEffect } from 'react'
import './hero.css'
import { useHistory } from 'react-router-dom'

const Hero = () => {
    const history = useHistory()
    const [slide, setSlide] = useState(1)

    // Go to the next slide
    const nextSlide = () => {
        setSlide(prev => prev === 3 ? 1 : prev + 1)
    }

    // Automatically change slide
    // Timer resets every time the slide changes
    useEffect(() => {
        let duration

        if (slide === 1) {
            duration = 1000
        } else {
            duration = 6000
        }

        const timer = setTimeout(() => {
            nextSlide()
        }, duration)

        return () => clearTimeout(timer)
    }, [slide])

    return (
        <>
            <section
                className={`hero slide-${slide}`}
                onClick={nextSlide}
            >
                <div className="container">

                    {/* =========================
                        PROMO VIDEOS
                    ========================= */}

                    <div className="hero-promo">

                        {/* DESKTOP SLIDE 2 */}
                        <video
                            className="promo-video video-2 desktop-video"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                        >
                            <source
                                src={process.env.PUBLIC_URL + "/img/hero-template.mp4"}
                                type="video/mp4"
                            />
                        </video>

                        {/* DESKTOP SLIDE 3 */}
                        <video
                            className="promo-video video-3 desktop-video"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                        >
                            <source
                                src={process.env.PUBLIC_URL + "/img/hero-template1.mp4"}
                                type="video/mp4"
                            />
                        </video>

                        {/* MOBILE SLIDE 2 */}
                        <video
                            className="promo-video video-2 mobile-video"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                        >
                            <source
                                src={process.env.PUBLIC_URL + "/img/hero-template-mobile.mp4"}
                                type="video/mp4"
                            />
                        </video>

                        {/* MOBILE SLIDE 3 */}
                        <video
                            className="promo-video video-3 mobile-video"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                        >
                            <source
                                src={process.env.PUBLIC_URL + "/img/hero-template-mobile1.mp4"}
                                type="video/mp4"
                            />
                        </video>

                    </div>

                    <div className="overlay"></div>

                    {/* =========================
                        HERO TEXT
                    ========================= */}

                    <div className="text">

                        <h1>Alltid fremover</h1>

                        <div className="button">

                            <button
                                className="one"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    history.push('/about-details')
                                }}
                            >
                                Les mer
                            </button>

                            <button
                                className="two"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    history.push('/courses')
                                }}
                            >
                                Prisliste
                            </button>

                        </div>

                    </div>

                </div>
            </section>

            {/* Mobile promotion below hero */}
            <section className="promo-banner">
                <div className="promo-container">
                    <a href="/courses">
                        <video
                            src={process.env.PUBLIC_URL + "/img/hero-template-mobile.mp4"}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </a>
                </div>
            </section>
        </>
    )
}

export default Hero