import React, { useEffect } from 'react';
// import '../Carousel/Caros.css'


const Carous = () => {
    // useEffect(() => {
    //     const link = document.createElement('link');
    //     link.rel = 'stylesheet';
    //     link.href = '../Carousel/Caros.css'; // Ensure this path is correct
    //     link.onload = () => console.log('CSS Loaded Successfully');
    //     link.onerror = () => console.log('Failed to load CSS');
    //     document.head.appendChild(link);
    //     return () => {
    //         document.head.removeChild(link);
    //         console.log('CSS link removed');
    //     };
    // }, []);

    useEffect(() => {
        const componentEl = $("[carousel='component']");
        const wrapEl = componentEl.find("[carousel='wrap']");
        const swiperEl = componentEl.find(".swiper");
        const itemEl = wrapEl.children().children();
        const nextEl = componentEl.find("[carousel='next']");
        const prevEl = componentEl.find("[carousel='prev']");
        const rotateAmount = 360 / itemEl.length;
        const zTranslate = 2 * Math.tan((rotateAmount / 2) * (Math.PI / 180));
        const negTranslate = `calc(var(--3d-carousel-item-width) / -${zTranslate} - var(--3d-carousel-gap))`;
        const posTranslate = `calc(var(--3d-carousel-item-width) / ${zTranslate} + var(--3d-carousel-gap))`;
        wrapEl.css("--3d-carousel-z", negTranslate);
        wrapEl.css("perspective", posTranslate);

        itemEl.each(function (index) {
            $(this).css("transform", `rotateY(${rotateAmount * index}deg) translateZ(${posTranslate})`);
        });

        const introTl = gsap.timeline({
            onComplete: () => {
                swiperCode();
            }
        });
        introTl.to(wrapEl, {
            opacity: 1,
            duration: 0.3
        });
        introTl.fromTo(wrapEl, {
            "--3d-carousel-rotate": 100,
            "--3d-carousel-rotate-x": -90
        }, {
            "--3d-carousel-rotate": 0,
            "--3d-carousel-rotate-x": -4,
            duration: 4,
            ease: "power2.inOut"
        }, "<");
        introTl.to("[fade-up]", {
            opacity: 1
        }, ">-0.3");

        function swiperCode() {
            const tl = gsap.timeline({
                paused: true
            });
            tl.fromTo(wrapEl, {
                "--3d-carousel-rotate": 0
            }, {
                "--3d-carousel-rotate": -(360 - rotateAmount),
                duration: 30,
                ease: "none"
            });

            const progress = { value: 0 };

            const swiper = new Swiper(swiperEl[0], {
                effect: "creative",
                creativeEffect: {
                    prev: {
                        translate: [0, "-100%", 0],
                        scale: 0.5,
                        opacity: 0
                    },
                    next: {
                        translate: [0, "100%", 0],
                        scale: 0.5,
                        opacity: 0
                    }
                },
                grabCursor: true,
                keyboard: true,
                speed: 500,
                mousewheel: {
                    eventsTarget: "[carousel='component']"
                },
                navigation: {
                    nextEl: nextEl[0],
                    prevEl: prevEl[0]
                }
            });
            swiper.on("progress", function (e) {
                gsap.to(progress, {
                    value: e.progress,
                    onUpdate: () => {
                        tl.progress(progress.value);
                    }
                });
            });
        }
    }, []);

    return (
        <div carousel="component" className="carousel_component">
            <div carousel="wrap" className="carousel_wrap w-dyn-list">
                <div role="list" className="carousel_list w-dyn-items">
                    <div role="listitem" className="carousel_item w-dyn-item"><img alt=""
                        src="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175ef_pexels-google-deepmind-17485819.jpg"
                        sizes="(max-width: 991px) 70vw, 40vw"
                        srcSet="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175ef_pexels-google-deepmind-17485819-p-500.jpg 500w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175ef_pexels-google-deepmind-17485819-p-800.jpg 800w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175ef_pexels-google-deepmind-17485819-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175ef_pexels-google-deepmind-17485819-p-1600.jpg 1600w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175ef_pexels-google-deepmind-17485819.jpg 1920w"
                        className="carousel_img" />
                        <div className="carousel_ratio"></div>
                    </div>
                    <div role="listitem" className="carousel_item w-dyn-item"><img alt=""
                        src="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f0_pexels-google-deepmind-17485846.jpg"
                        sizes="(max-width: 991px) 70vw, 40vw"
                        srcSet="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f0_pexels-google-deepmind-17485846-p-500.jpg 500w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f0_pexels-google-deepmind-17485846-p-800.jpg 800w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f0_pexels-google-deepmind-17485846-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f0_pexels-google-deepmind-17485846-p-1600.jpg 1600w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f0_pexels-google-deepmind-17485846.jpg 1920w"
                        className="carousel_img" />
                        <div className="carousel_ratio"></div>
                    </div>
                    <div role="listitem" className="carousel_item w-dyn-item">
                        <img alt=""
                            src="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f1_pexels-google-deepmind-17485868.jpg"
                            sizes="(max-width: 991px) 70vw, 40vw"
                            srcSet="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f1_pexels-google-deepmind-17485868-p-500.jpg 500w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f1_pexels-google-deepmind-17485868-p-800.jpg 800w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f1_pexels-google-deepmind-17485868-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f1_pexels-google-deepmind-17485868-p-1600.jpg 1600w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f1_pexels-google-deepmind-17485868.jpg 1920w"
                            className="carousel_img" />
                        <div className="carousel_ratio"></div>
                    </div>
                    <div role="listitem" className="carousel_item w-dyn-item"><img alt=""
                        src="/assets/images/Second/Quality1.png"
                        sizes="(max-width: 991px) 70vw, 40vw"
                        srcSet="/assets/images/Second/Quality1.png 500w, /assets/images/Second/Quality1.png 800w, /assets/images/Second/Quality1.png 1920w"
                        className="carousel_img" />
                        <div className="carousel_ratio"></div>
                    </div>
                    <div role="listitem" className="carousel_item w-dyn-item"><img alt=""
                        src="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fc_pexels-anni-roenkae-2156881.jpg"
                        sizes="(max-width: 991px) 70vw, 40vw"
                        srcSet="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fc_pexels-anni-roenkae-2156881-p-500.jpg 500w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fc_pexels-anni-roenkae-2156881-p-800.jpg 800w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fc_pexels-anni-roenkae-2156881-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fc_pexels-anni-roenkae-2156881-p-1600.jpg 1600w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fc_pexels-anni-roenkae-2156881.jpg 1920w"
                        className="carousel_img" />
                        <div className="carousel_ratio"></div>
                    </div>
                    <div role="listitem" className="carousel_item w-dyn-item"><img alt=""
                        src="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f3_google-deepmind-2EpKCoEgKZo-unsplash.jpg"
                        sizes="(max-width: 991px) 70vw, 40vw"
                        srcSet="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f3_google-deepmind-2EpKCoEgKZo-unsplash-p-500.jpg 500w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f3_google-deepmind-2EpKCoEgKZo-unsplash-p-800.jpg 800w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f3_google-deepmind-2EpKCoEgKZo-unsplash-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f3_google-deepmind-2EpKCoEgKZo-unsplash-p-1600.jpg 1600w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f3_google-deepmind-2EpKCoEgKZo-unsplash.jpg 1920w"
                        className="carousel_img" />
                        <div className="carousel_ratio"></div>
                    </div>
                    <div role="listitem" className="carousel_item w-dyn-item"><img alt=""
                        src="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f4_google-deepmind-QEA9JMqOuVc-unsplash.jpg"
                        sizes="(max-width: 991px) 70vw, 40vw"
                        srcSet="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f4_google-deepmind-QEA9JMqOuVc-unsplash-p-500.jpg 500w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f4_google-deepmind-QEA9JMqOuVc-unsplash-p-800.jpg 800w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f4_google-deepmind-QEA9JMqOuVc-unsplash-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f4_google-deepmind-QEA9JMqOuVc-unsplash-p-1600.jpg 1600w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f4_google-deepmind-QEA9JMqOuVc-unsplash.jpg 1920w"
                        className="carousel_img" />
                        <div className="carousel_ratio"></div>
                    </div>
                    <div role="listitem" className="carousel_item w-dyn-item"><img alt=""
                        src="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f5_google-deepmind-NMjrovXT_UY-unsplash.jpg"
                        sizes="(max-width: 991px) 70vw, 40vw"
                        srcSet="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f5_google-deepmind-NMjrovXT_UY-unsplash-p-500.jpg 500w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f5_google-deepmind-NMjrovXT_UY-unsplash-p-800.jpg 800w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f5_google-deepmind-NMjrovXT_UY-unsplash-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f5_google-deepmind-NMjrovXT_UY-unsplash-p-1600.jpg 1600w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f5_google-deepmind-NMjrovXT_UY-unsplash.jpg 1920w"
                        className="carousel_img" />
                        <div className="carousel_ratio"></div>
                    </div>
                    <div role="listitem" className="carousel_item w-dyn-item"><img alt=""
                        src="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f6_pexels-bruno-thethe-1910230.jpg"
                        sizes="(max-width: 991px) 70vw, 40vw"
                        srcSet="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f6_pexels-bruno-thethe-1910230-p-500.jpg 500w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f6_pexels-bruno-thethe-1910230-p-800.jpg 800w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f6_pexels-bruno-thethe-1910230-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f6_pexels-bruno-thethe-1910230.jpg 1280w"
                        className="carousel_img" />
                        <div className="carousel_ratio"></div>
                    </div>
                    <div role="listitem" className="carousel_item w-dyn-item"><img alt=""
                        src="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f7_pexels-scott-webb-1544947.jpg"
                        sizes="(max-width: 991px) 70vw, 40vw"
                        srcSet="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f7_pexels-scott-webb-1544947-p-500.jpg 500w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f7_pexels-scott-webb-1544947-p-800.jpg 800w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f7_pexels-scott-webb-1544947-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f7_pexels-scott-webb-1544947.jpg 1280w"
                        className="carousel_img" />
                        <div className="carousel_ratio"></div>
                    </div>
                    <div role="listitem" className="carousel_item w-dyn-item"><img alt=""
                        src="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f8_pexels-timea-kadar-2215609.jpg"
                        sizes="(max-width: 991px) 70vw, 40vw"
                        srcSet="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f8_pexels-timea-kadar-2215609-p-500.jpg 500w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f8_pexels-timea-kadar-2215609-p-800.jpg 800w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f8_pexels-timea-kadar-2215609-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f8_pexels-timea-kadar-2215609.jpg 1280w"
                        className="carousel_img" />
                        <div className="carousel_ratio"></div>
                    </div>
                    <div role="listitem" className="carousel_item w-dyn-item"><img alt=""
                        src="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f9_pexels-vladimir-gladkov-10084175.jpg"
                        sizes="(max-width: 991px) 70vw, 40vw"
                        srcSet="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f9_pexels-vladimir-gladkov-10084175-p-500.jpg 500w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f9_pexels-vladimir-gladkov-10084175-p-800.jpg 800w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f9_pexels-vladimir-gladkov-10084175-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f9_pexels-vladimir-gladkov-10084175-p-1600.jpg 1600w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175f9_pexels-vladimir-gladkov-10084175.jpg 1920w"
                        className="carousel_img" />
                        <div className="carousel_ratio"></div>
                    </div>
                    <div role="listitem" className="carousel_item w-dyn-item"><img alt=""
                        src="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fa_pexels-lucky-5374862.jpg"
                        sizes="(max-width: 991px) 70vw, 40vw"
                        srcSet="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fa_pexels-lucky-5374862-p-500.jpg 500w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fa_pexels-lucky-5374862-p-800.jpg 800w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fa_pexels-lucky-5374862-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fa_pexels-lucky-5374862-p-1600.jpg 1600w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fa_pexels-lucky-5374862.jpg 1920w"
                        className="carousel_img" />
                        <div className="carousel_ratio"></div>
                    </div>
                    <div role="listitem" className="carousel_item w-dyn-item"><img alt=""
                        src="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fb_pexels-natalie-bond-3371103.jpg"
                        sizes="(max-width: 991px) 70vw, 40vw"
                        srcSet="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fb_pexels-natalie-bond-3371103-p-500.jpg 500w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fb_pexels-natalie-bond-3371103-p-800.jpg 800w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fb_pexels-natalie-bond-3371103-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fb_pexels-natalie-bond-3371103.jpg 1280w"
                        className="carousel_img" />
                        <div className="carousel_ratio"></div>
                    </div>
                    <div role="listitem" className="carousel_item w-dyn-item"><img alt=""
                        src="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fd_pexels-mikhail-nilov-7827905%20(1).jpg"
                        sizes="(max-width: 991px) 70vw, 40vw"
                        srcSet="https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fd_pexels-mikhail-nilov-7827905%2520(1)-p-500.jpg 500w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fd_pexels-mikhail-nilov-7827905%2520(1)-p-800.jpg 800w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fd_pexels-mikhail-nilov-7827905%2520(1)-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64fc618276473affd14175e3/64fc618276473affd14175fd_pexels-mikhail-nilov-7827905%20(1).jpg 1280w"
                        className="carousel_img" />
                        <div className="carousel_ratio"></div>
                    </div>
                </div>
            </div>
            <div fade-up="" className="swiper is-slider1 w-dyn-list">
                <div role="list" className="swiper-wrapper is-slider1 w-dyn-items">
                    <div role="listitem" className="swiper-slide is-slider1 w-dyn-item">
                        <h2>NeoTech</h2><a href="#" className="button w-button">Read More</a>
                    </div>
                    <div role="listitem" className="swiper-slide is-slider1 w-dyn-item">
                        <h2>Innovate</h2><a href="#" className="button w-button">Read More</a>
                    </div>
                    <div role="listitem" className="swiper-slide is-slider1 w-dyn-item">
                        <h2>Catalyst</h2><a href="#" className="button w-button">Read More</a>
                    </div>
                    <div role="listitem" className="swiper-slide is-slider1 w-dyn-item md:text-3xl">
                        <h2>Jobezzy</h2><a href="#" className=" ">Read More</a>
                    </div>
                    <div role="listitem" className="swiper-slide is-slider1 w-dyn-item">
                        <h2>Fusion</h2><a href="#" className="button w-button">Read More</a>
                    </div>
                    <div role="listitem" className="swiper-slide is-slider1 w-dyn-item">
                        <h2>Apex</h2><a href="#" className="button w-button">Read More</a>
                    </div>
                    <div role="listitem" className="swiper-slide is-slider1 w-dyn-item">
                        <h2>Evolve</h2><a href="#" className="button w-button">Read More</a>
                    </div>
                    <div role="listitem" className="swiper-slide is-slider1 w-dyn-item">
                        <h2>Synergy</h2><a href="#" className="button w-button">Read More</a>
                    </div>
                    <div role="listitem" className="swiper-slide is-slider1 w-dyn-item">
                        <h2>Lumina</h2><a href="#" className="button w-button">Read More</a>
                    </div>
                    <div role="listitem" className="swiper-slide is-slider1 w-dyn-item">
                        <h2>Pinnacle</h2><a href="#" className="button w-button">Read More</a>
                    </div>
                    <div role="listitem" className="swiper-slide is-slider1 w-dyn-item">
                        <h2>Odyssey</h2><a href="#" className="button w-button">Read More</a>
                    </div>
                    <div role="listitem" className="swiper-slide is-slider1 w-dyn-item">
                        <h2>Zenith</h2><a href="#" className="button w-button">Read More</a>
                    </div>
                    <div role="listitem" className="swiper-slide is-slider1 w-dyn-item">
                        <h2>Elysium</h2><a href="#" className="button w-button">Read More</a>
                    </div>
                    <div role="listitem" className="swiper-slide is-slider1 w-dyn-item">
                        <h2>Nexus</h2><a href="#" className="button w-button">Read More</a>
                    </div>
                    <div role="listitem" className="swiper-slide is-slider1 w-dyn-item">
                        <h2>Stellar</h2><a href="#" className="button w-button">Read More</a>
                    </div>
                </div>
            </div>
            <div fade-up="" className="carousel_arrow_wrap">
                <a carousel="prev" href="#"
                    className="carousel_arrow_link w-inline-block">
                </a>
                <a carousel="next" href="#"
                    className="carousel_arrow_link is-right w-inline-block">
                </a>
            </div>
        </div>

    );
};

export default Carous;