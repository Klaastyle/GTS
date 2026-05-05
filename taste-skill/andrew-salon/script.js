document.addEventListener('DOMContentLoaded', () => {
    const BOOKSY_URL = 'https://booksy.com/es-es/154915_andrewsalon_barberia_49547_santa-maria-de-palautordera#ba_s=seo';
    const CONTACT_PHONE = '+34687395009';
    const WHATSAPP_URL = 'https://wa.me/34687395009';
    const translations = {
        es: {
            'nav.team': 'Peluqueros',
            'nav.reviews': 'Opiniones',
            'nav.location': 'Ubicación',
            'nav.book': 'Reservar',
            'floating.book': 'Reservar en Booksy',
            'hero.eyebrow': 'Barbería premium',
            'hero.title': 'Tu próximo corte empieza aquí.',
            'hero.subtitle': 'AndrewSalon en Plaça Major, 18. Reserva por Booksy, elige profesional y vive una experiencia cuidada: diagnóstico, técnica y acabado.',
            'hero.book': 'Reservar en Booksy',
            'hero.whatsapp': 'Escribir por WhatsApp',
            'hero.call': 'Llamar',
            'hero.secondary': 'Conocer peluqueros',
            'hero.stat1': '74 reseñas en Booksy',
            'hero.stat2': '25 reseñas en Google',
            'video.step1': 'Secuencia 01',
            'video.title1': 'Entra en el ritmo del salón',
            'video.text1': 'Ambiente real, luz de trabajo y la calma de llegar a una cita preparada.',
            'video.step2': 'Secuencia 02',
            'video.title2': 'Técnica en primer plano',
            'video.text2': 'Cada corte empieza con criterio: forma, textura y acabado antes del último espejo.',
            'video.step3': 'Secuencia 03',
            'video.title3': 'Listo para reservar',
            'video.text3': 'Del impacto visual a Booksy, sin pasos intermedios ni mensajes perdidos.',
            'team.eyebrow': 'Peluqueros',
            'team.title': 'Reserva con quien mejor encaje con tu estilo',
            'team.showcaseLabel': 'Marc Andreu y Alex',
            'team.showcaseTitle': 'Elige profesional antes de sentarte.',
            'team.parallaxLabel': 'Equipo Andrew Salon',
            'team.parallaxTitle': 'Técnica, criterio y una silla preparada para cada cita.',
            'team.andrewRole': 'Barber en Booksy',
            'team.andrewText': 'Cortes de cabello, degradados y corte con barba con citas de 40 a 50 minutos.',
            'team.andrewBook': 'Reservar con Alex',
            'team.marcRole': 'Barber en Booksy',
            'team.marcText': 'Especialista en corte, degradado, barba, cejas y servicios rápidos de acabado.',
            'team.marcBook': 'Reservar con Marc',
            'team.salonRole': 'Servicios populares',
            'team.salonText': 'Tall de cabell desde 12€, tall i barba desde 15€ y barba desde 5€.',
            'team.salonBook': 'Ver servicios en Booksy',
            'reviews.eyebrow': 'Opiniones',
            'reviews.title': 'Confianza antes de sentarte en la silla',
            'reviews.scoreLabel': 'Reseñas verificadas',
            'reviews.scoreText': 'Google + Booksy · 99 reseñas',
            'reviews.googleLink': 'Ver Google Business',
            'reviews.one': '"Trato amable, buen ambiente y un corte impecable."',
            'reviews.oneBy': 'Google · 5 estrellas',
            'reviews.two': '"Muy profesional, trato excelente y aparte muy buen ambiente."',
            'reviews.twoBy': 'Google · 5 estrellas',
            'reviews.three': '"Mejor peluquero del Vallès."',
            'reviews.threeBy': 'Google · 5 estrellas',
            'reviews.four': '"Corte increíble, súper majos. Muy recomendable."',
            'reviews.fourBy': 'Pablo · cliente confirmado',
            'reviews.five': '"Tracte excel·lent i tall de cabell impecable."',
            'reviews.fiveBy': 'Albert · cliente confirmado',
            'reviews.six': '"Molt content amb el resultat."',
            'reviews.sixBy': 'Oriol · cliente confirmado',
            'location.eyebrow': 'Ubicación e instalaciones',
            'location.title': 'Plaça Major, 18, local 3',
            'location.text': 'AndrewSalon está en 08460, Santa Maria de Palautordera. Abierto hasta las 20:30. Teléfono: 687 39 50 09.',
            'location.book': 'Reservar en Booksy',
            'location.whatsapp': 'WhatsApp',
            'location.call': 'Llamar',
            'location.map': 'Cómo llegar',
            'footer.text': 'Reservas únicamente a través de Booksy.'
        },
        ca: {
            'nav.team': 'Perruquers',
            'nav.reviews': 'Opinions',
            'nav.location': 'Ubicació',
            'nav.book': 'Reservar',
            'floating.book': 'Reservar a Booksy',
            'hero.eyebrow': 'Barberia premium',
            'hero.title': 'El teu pròxim tall comença aquí.',
            'hero.subtitle': 'AndrewSalon a Plaça Major, 18. Reserva per Booksy, tria professional i viu una experiència cuidada: diagnòstic, tècnica i acabat.',
            'hero.book': 'Reservar a Booksy',
            'hero.whatsapp': 'Escriure per WhatsApp',
            'hero.call': 'Trucar',
            'hero.secondary': 'Conèixer els perruquers',
            'hero.stat1': '74 ressenyes a Booksy',
            'hero.stat2': '25 ressenyes a Google',
            'video.step1': 'Seqüència 01',
            'video.title1': 'Entra en el ritme del saló',
            'video.text1': 'Ambient real, llum de treball i la calma d’arribar a una cita preparada.',
            'video.step2': 'Seqüència 02',
            'video.title2': 'Tècnica en primer pla',
            'video.text2': 'Cada tall comença amb criteri: forma, textura i acabat abans de l’últim mirall.',
            'video.step3': 'Seqüència 03',
            'video.title3': 'A punt per reservar',
            'video.text3': 'De l’impacte visual a Booksy, sense passos intermedis ni missatges perduts.',
            'team.eyebrow': 'Perruquers',
            'team.title': 'Reserva amb qui encaixi millor amb el teu estil',
            'team.showcaseLabel': 'Marc Andreu i Alex',
            'team.showcaseTitle': 'Tria professional abans de seure.',
            'team.parallaxLabel': 'Equip Andrew Salon',
            'team.parallaxTitle': 'Tècnica, criteri i una cadira preparada per a cada cita.',
            'team.andrewRole': 'Barber a Booksy',
            'team.andrewText': 'Talls de cabell, degradats i tall amb barba amb cites de 40 a 50 minuts.',
            'team.andrewBook': 'Reservar amb Alex',
            'team.marcRole': 'Barber a Booksy',
            'team.marcText': 'Especialista en tall, degradat, barba, celles i serveis ràpids d’acabat.',
            'team.marcBook': 'Reservar amb Marc',
            'team.salonRole': 'Serveis populars',
            'team.salonText': 'Tall de cabell des de 12€, tall i barba des de 15€ i barba des de 5€.',
            'team.salonBook': 'Veure serveis a Booksy',
            'reviews.eyebrow': 'Opinions',
            'reviews.title': 'Confiança abans de seure a la cadira',
            'reviews.scoreLabel': 'Ressenyes verificades',
            'reviews.scoreText': 'Google + Booksy · 99 ressenyes',
            'reviews.googleLink': 'Veure Google Business',
            'reviews.one': '"Tracte amable, bon ambient i un tall impecable."',
            'reviews.oneBy': 'Google · 5 estrelles',
            'reviews.two': '"Molt professional, tracte excel·lent i a més molt bon ambient."',
            'reviews.twoBy': 'Google · 5 estrelles',
            'reviews.three': '"Millor perruquer del Vallès."',
            'reviews.threeBy': 'Google · 5 estrelles',
            'reviews.four': '"Tall increïble, molt macos. Molt recomanable."',
            'reviews.fourBy': 'Pablo · client confirmat',
            'reviews.five': '"Tracte excel·lent i tall de cabell impecable."',
            'reviews.fiveBy': 'Albert · client confirmat',
            'reviews.six': '"Molt content amb el resultat."',
            'reviews.sixBy': 'Oriol · client confirmat',
            'location.eyebrow': 'Ubicació i instal·lacions',
            'location.title': 'Plaça Major, 18, local 3',
            'location.text': 'AndrewSalon és a 08460, Santa Maria de Palautordera. Obert fins a les 20:30. Telèfon: 687 39 50 09.',
            'location.book': 'Reservar a Booksy',
            'location.whatsapp': 'WhatsApp',
            'location.call': 'Trucar',
            'location.map': 'Com arribar-hi',
            'footer.text': 'Reserves únicament a través de Booksy.'
        }
    };

    const header = document.querySelector('.sticky-header');
    const menuToggle = document.querySelector('.menu-toggle');
    const siteNav = document.querySelector('.site-nav');
    const videoScroll = document.querySelector('.video-scroll');
    const scrollVideo = document.querySelector('.scroll-video');
    const languageOptions = document.querySelectorAll('.language-option');
    const parallaxItems = document.querySelectorAll('[data-parallax-speed]');

    document.querySelectorAll('.booksy-link').forEach(link => {
        link.setAttribute('href', BOOKSY_URL);
    });

    document.querySelectorAll('.whatsapp-link').forEach(link => {
        link.setAttribute('href', WHATSAPP_URL);
    });

    document.querySelectorAll('.phone-link').forEach(link => {
        link.setAttribute('href', `tel:${CONTACT_PHONE}`);
    });

    const setLanguage = (lang) => {
        const dictionary = translations[lang] || translations.es;
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            if (dictionary[key]) {
                element.textContent = dictionary[key];
            }
        });

        languageOptions.forEach(button => {
            button.classList.toggle('is-active', button.dataset.lang === lang);
        });
    };

    languageOptions.forEach(button => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });

    setLanguage('es');

    const updateHeader = () => {
        if (!header) return;
        header.classList.toggle('scrolled', window.scrollY > 50);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = siteNav.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
        });

        siteNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                siteNav.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Abrir menú');
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', event => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    if (videoScroll && scrollVideo) {
        let targetProgress = 0;
        let easedProgress = 0;
        let videoReady = false;

        const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

        const measureProgress = () => {
            const rect = videoScroll.getBoundingClientRect();
            const scrollable = videoScroll.offsetHeight - window.innerHeight;
            targetProgress = scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;
        };

        const renderScrollScene = () => {
            easedProgress += (targetProgress - easedProgress) * 0.11;
            videoScroll.style.setProperty('--scroll-progress', easedProgress.toFixed(4));
            videoScroll.style.setProperty('--video-scale', (1.08 - easedProgress * 0.06).toFixed(4));
            videoScroll.style.setProperty('--video-brightness', (0.68 + easedProgress * 0.12).toFixed(4));

            if (videoReady && Number.isFinite(scrollVideo.duration)) {
                const targetTime = scrollVideo.duration * easedProgress;
                if (Math.abs(scrollVideo.currentTime - targetTime) > 0.035) {
                    scrollVideo.currentTime = targetTime;
                }
            }

            requestAnimationFrame(renderScrollScene);
        };

        scrollVideo.addEventListener('loadedmetadata', () => {
            videoReady = true;
            scrollVideo.pause();
            measureProgress();
        });

        window.addEventListener('scroll', measureProgress, { passive: true });
        window.addEventListener('resize', measureProgress);
        measureProgress();
        renderScrollScene();
    }

    const updateParallax = () => {
        parallaxItems.forEach(item => {
            const speed = Number(item.dataset.parallaxSpeed) || 0;
            const rect = item.closest('.parallax-frame')?.getBoundingClientRect();
            if (!rect) return;

            const viewportCenter = window.innerHeight / 2;
            const frameCenter = rect.top + rect.height / 2;
            const offset = (viewportCenter - frameCenter) * speed;
            item.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
        });
    };

    if (parallaxItems.length) {
        updateParallax();
        window.addEventListener('scroll', updateParallax, { passive: true });
        window.addEventListener('resize', updateParallax);
    }

    const animatedItems = document.querySelectorAll('.gsap-reveal, .bento-item, .experience-list article, .booking-copy, .booking-actions');
    if (!('IntersectionObserver' in window)) {
        animatedItems.forEach(item => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.14 });

    animatedItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(18px)';
        item.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
        observer.observe(item);
    });
});
