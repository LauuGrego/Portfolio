const translations = {
    es: {
        nav_about: "Sobre mí",
        nav_skills: "Habilidades",
        nav_projects: "Proyectos",
        nav_certs: "Certificados",
        nav_contact: "Contacto",
        hero_subtitle: "Estudiante Avanzado de Ingeniería en Sistemas",
        hero_desc_1: "Especializado en el ecosistema JavaScript/TypeScript (React, NestJS) y en el desarrollo de APIs robustas.",
        hero_desc_2: "Integro la Inteligencia Artificial como herramienta clave para optimizar el desarrollo y la investigación.",
        hero_desc_3: "Busco oportunidades para trabajar y seguir creciendo en TI.",
        section_skills: "Habilidades Técnicas",
        skills_lang: "Lenguajes",
        skills_fw: "Frameworks & Bibliotecas",
        skills_db: "Bases de Datos & ORM",
        skills_tools: "Herramientas & Conceptos",
        skill_ia: "IA (Desarrollo & Inv.)",
        section_projects: "Proyectos Destacados",
        role: "<strong>Rol:</strong> Fullstack Developer",
        role_front: "<strong>Rol:</strong> Frontend Developer",
        project_web: " Página Web",
        project_code: " Código",
        project_catalog_mp: " Catálogo MP",
        project_code_mp: " Código MP",
        project_catalog_cotito: " Catálogo COTITO",
        project_code_cotito: " Código COTITO",
        project_dental: " Landing Dental",
        project_code_dental: " Código Dental",
        project_view_site: " Ver sitio",
        section_certs: "Certificados",
        cert_eng: " Certificado Inglés B1+",
        cert_time: " Certificado Charla Gestión Del Tiempo",
        cert_hacklab: " Certificado HackLab 2024",
        section_contact: "Contacto",
        contact_name_label: "Nombre",
        contact_name_ph: "Ingresa tu nombre",
        contact_email_label: "Correo electrónico",
        contact_message_label: "Mensaje",
        contact_message_ph: "¿En qué puedo ayudarte?",
        contact_submit: " Enviar mensaje"
    },
    en: {
        nav_about: "About me",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_certs: "Certificates",
        nav_contact: "Contact",
        hero_subtitle: "Advanced Systems Engineering Student",
        hero_desc_1: "Specialized in the JavaScript/TypeScript ecosystem (React, NestJS) and robust API development.",
        hero_desc_2: "I integrate Artificial Intelligence as a key tool to optimize development and research.",
        hero_desc_3: "Looking for opportunities to work and keep growing in IT.",
        section_skills: "Technical Skills",
        skills_lang: "Languages",
        skills_fw: "Frameworks & Libraries",
        skills_db: "Databases & ORM",
        skills_tools: "Tools & Concepts",
        skill_ia: "AI (Dev & R&D)",
        section_projects: "Featured Projects",
        role: "<strong>Role:</strong> Fullstack Developer",
        role_front: "<strong>Role:</strong> Frontend Developer",
        project_web: " Website",
        project_code: " Code",
        project_catalog_mp: " MP Catalog",
        project_code_mp: " MP Code",
        project_catalog_cotito: " COTITO Catalog",
        project_code_cotito: " COTITO Code",
        project_dental: " Dental Landing",
        project_code_dental: " Dental Code",
        project_view_site: " View site",
        section_certs: "Certificates",
        cert_eng: " English B1+ Certificate",
        cert_time: " Time Management Talk Certificate",
        cert_hacklab: " HackLab 2024 Certificate",
        section_contact: "Contact",
        contact_name_label: "Name",
        contact_name_ph: "Enter your name",
        contact_email_label: "Email address",
        contact_message_label: "Message",
        contact_message_ph: "How can I help you?",
        contact_submit: " Send message"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('lang-toggle');
    
    // Check local storage for language preference, default to 'es'
    let currentLang = localStorage.getItem('portfolio_lang') || 'es';
    
    // Set initial language
    setLanguage(currentLang);
    updateToggleButton(currentLang);

    // Toggle button click event
    langToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('portfolio_lang', currentLang);
        setLanguage(currentLang);
        updateToggleButton(currentLang);
    });

    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // Determine if it's an input/textarea placeholder or normal text
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.setAttribute('placeholder', translations[lang][key]);
                } else {
                    // Check if it has an icon inside (like buttons or certs)
                    const icon = el.querySelector('i');
                    if (icon) {
                        el.innerHTML = '';
                        el.appendChild(icon);
                        el.innerHTML += translations[lang][key];
                    } else {
                        el.innerHTML = translations[lang][key];
                    }
                }
            }
        });
        document.documentElement.lang = lang;
    }

    function updateToggleButton(lang) {
        langToggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
        langToggleBtn.setAttribute('title', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
    }
});
