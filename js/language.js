// Language translations
const translations = {
  en: {
    title: "Gaussian Points",
    subtitle: "Innovative Point Cloud & Gaussian Splatting Plugin for SketchUp",
    sketchup: "SketchUp",
    point_clouds: "Point Clouds",
    gaussian_splatting: "Gaussian Splatting",
    performance: "Performance",
    
    // Slide 1: Problem
    problem_title: "The Problem",
    expensive_options: "Cost Barrier",
    expensive_options_desc: "Existing point cloud plugins for SketchUp are costly (~$100/month)",
    performance_issues: "Technical Limitations",
    performance_issues_desc: "Current solutions have difficulty handling large point clouds effectively",
    visualization_quality: "Visualization Quality",
    visualization_quality_desc: "Point clouds look pixelated and unrealistic, especially up close",
    limited_functionality: "Limited Functionality",
    limited_functionality_desc: "No support for advanced features like Gaussian Splatting in existing plugins",
    problem_summary: "Architects and designers need an affordable, effective solution to visualize and work with point cloud data in their preferred design tool.",
    
    // Slide 2: Solution
    solution_title: "Our Solution",
    solution_subtitle: "Gaussian Points",
    solution_desc: "Gaussian Points is an innovative plugin for SketchUp that provides efficient point cloud processing and visualization, featuring industry-first Gaussian Splatting technology for photorealistic rendering.",
    target_market: "Target Market",
    architects: "Architects",
    urban_planners: "Urban Planners",
    interior_designers: "Interior Designers",
    engineers: "Engineers",
    
    // Slide 3: Market Opportunity
    market_opportunity: "Market Opportunity",
    active_users: "Active SketchUp Users",
    arch_software_market: "Architecture Software Market (2024)",
    point_cloud_market: "Point Cloud Software Market (2025)",
    users_by_geography: "SketchUp Users by Geography",
    users_by_profession: "SketchUp User Breakdown by Profession",
    market_potential: "Starting with 1% market capture and gradually scaling through targeted marketing and platform expansion beyond SketchUp, we aim to create a substantial and defensible market position.",
    
    // Slide 4: How it Works
    how_it_works: "How It Works",
    how_it_works_desc: "From a 3D scan to a client-ready presentation in just a few steps. Here's how architects use Gaussian Points to bring their visions to life.",
    multi_format: "1. Get Your Scan",
    multi_format_desc: "Start with data from any 3D laser scanner or drone. Our plugin handles all major file types.",
    low_level: "2. Import to SketchUp",
    low_level_desc: "One click is all it takes to bring your point cloud into SketchUp. No complex settings, just instant results.",
    gaussian_tech: "3. Model on a Real Backdrop",
    gaussian_tech_desc: "Design directly onto the photorealistic scan, ensuring your project fits perfectly with its real-world surroundings.",
    toolset: "4. Wow Your Clients",
    toolset_desc: "Present your work in a context your clients will understand immediately, leading to faster approvals and better feedback.",
    
    // Slide 5: Value Proposition
    value_proposition: "Value Proposition",
    faster_generation: "Faster Scene Workflows",
    visual_accuracy: "Photorealistic Rendering",
    fps_performance: "Smooth Performance",
    cost_effective: "Cost Effective",
    cost_effective_desc: "Free tier for basic point cloud functionality, affordable premium for Gaussian Splatting",
    unmatched_performance: "Optimized Performance",
    unmatched_performance_desc: "Work with large point clouds with responsive controls and smoother interaction",
    photo_visualization: "Photorealistic Visualization",
    photo_visualization_desc: "Gaussian Splatting creates continuous, detailed surfaces with accurate reflections and textures - eliminating the need to manually model complex elements",
    next_gen: "Defensible Technology Advantage",
    next_gen_desc: "Our proprietary implementation creates high barriers to entry with technical advantages that are difficult to replicate, securing long-term market position",
    
    // Slide 6: Competitive Landscape
    competitive_landscape: "Competitive Landscape",
    performance_comparison: "Performance Comparison (Rendering Large Models)",
    feature: "Feature",
    gaussian_points: "Gaussian Points",
    trimble: "Trimble Scan Essentials",
    undet: "Undet for SketchUp",
    point_cloud_support: "Point Cloud Support",
    free_tier: "Free Tier Available",
    high_performance: "High-Performance Rendering",
    realistic_viz: "Realistic Visualization",
    price: "Price",
    partial: "Partial",
    limited: "Limited",
    basic_price: "$0 (Basic) to $30-50/mo (Premium)",
    trimble_price: "$699/year (in SketchUp Studio)",
    undet_price: "€500/year or €89/month",
    competitive_summary: "While competitors offer basic point cloud functionality, Gaussian Points is the only solution that combines affordability, optimized performance, and cutting-edge Gaussian Splatting technology.",
    
    // Slide 7: Business Model
    business_model: "Business Model",
    freemium: "Freemium Approach",
    freemium_desc: "Basic point cloud visualization free, premium features (including Gaussian Splatting) paid",
    subscription: "Subscription Model",
    subscription_desc: "$30-50/month for premium features or $299/year, with volume discounts for firms",
    partnerships: "Strategic Partnerships",
    partnerships_desc: "Potential bundling with laser scanner manufacturers and scanning service providers",
    revenue_projection: "Revenue Projection",
    revenue_projection_desc: "Starting with 1% market share and gradually expanding, we project annual revenue growth to $9M by year five",
    projected_revenue: "5-Year Projected Revenue",
    
    // Slide 8: Team
    team: "Our Team",
    founder: "Founder & Lead Developer",
    founder_bio: "Architect-urbanist with experience in 3D visualization, parametric design, and developing innovative solutions for architectural workflows.",
    ai_assistant: "AI Assistant",
    dev_support: "Development Support",
    ai_bio: "Cutting-edge AI assistance for code optimization, testing, and documentation, helping to accelerate development cycles.",
    advisor: "[Future Advisor]",
    tech_advisor: "Technical Advisor",
    advisor_bio: "Position open for industry expert with background in 3D visualization, architectural software, or point cloud processing.",
    
    // Slide 9: Development Roadmap
    roadmap: "Development Roadmap",
    q1_2025: "Q1 2025",
    prototype: "Working Prototype (Completed)",
    prototype_desc: "Core point cloud loading and visualization functionality, OpenGL integration, and basic Gaussian Splatting implementation",
    q2_2025: "Q2 2025",
    beta: "Beta Release (In Progress)",
    beta_desc: "Feature complete plugin with optimized performance, official file format support, and full Gaussian Splatting capability",
    q3_2025: "Q3 2025",
    launch: "Public Launch",
    launch_desc: "Extension Warehouse release, marketing campaign, and freemium model implementation",
    q1_2026: "Q1 2026",
    expansion: "Expansion",
    expansion_desc: "Advanced features (AI object recognition, automation), platform expansion (Rhino, Revit), and enterprise solutions",
    
    // Slide 10: Investment Opportunity
    investment: "Investment Opportunity",
    seed_round: "Seed Round Target",
    dev_resources: "Development Resources",
    dev_resources_desc: "60% - Accelerate development, add additional developers, and enhance core functionality",
    marketing: "Marketing & User Acquisition",
    marketing_desc: "25% - Targeted campaigns for architecture firms, educational content, and community building",
    infrastructure: "Infrastructure",
    infrastructure_desc: "10% - Cloud processing capabilities, licensing infrastructure, and testing environment",
    operations: "Operations",
    operations_desc: "5% - Legal, accounting, and operational requirements",
    investment_summary: "Investment will accelerate time-to-market and help capture first-mover advantage in the emerging Gaussian Splatting visualization space",
    
    // Slide 11: Thank You
    thank_you: "Thank You",
    revolution: "Let's transform architectural visualization together",
    
    // Chart labels
    geo_chart_labels: ['United States', 'UK', 'Europe (other)', 'Asia', 'Rest of World'],
    profession_chart_labels: ['Architects', 'Interior Designers', 'Urban Planners', 'Engineers', 'Others'],
    performance_chart_labels: ['Gaussian Points', 'Scan Essentials', 'Undet'],
    revenue_chart_labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5']
  },
  
  uk: {
    title: "Gaussian Points",
    subtitle: "Інноваційний плагін Point Cloud та Gaussian Splatting для SketchUp",
    sketchup: "SketchUp",
    point_clouds: "Хмари точок",
    gaussian_splatting: "Gaussian Splatting",
    performance: "Продуктивність",
    
    // Slide 1: Problem
    problem_title: "Проблема",
    expensive_options: "Цінова перешкода",
    expensive_options_desc: "Існуючі плагіни для роботи з хмарами точок для SketchUp досить дорогі (~$100/місяць)",
    performance_issues: "Технічні обмеження",
    performance_issues_desc: "Поточні рішення мають складнощі з ефективною обробкою великих хмар точок",
    visualization_quality: "Якість візуалізації",
    visualization_quality_desc: "Хмари точок виглядають пікселізованими та нереалістичними, особливо зблизька",
    limited_functionality: "Обмежена функціональність",
    limited_functionality_desc: "Відсутність підтримки передових функцій, таких як Gaussian Splatting, в існуючих плагінах",
    problem_summary: "Архітекторам та дизайнерам потрібне доступне, ефективне рішення для візуалізації та роботи з даними хмар точок у їхньому улюбленому інструменті дизайну.",
    
    // Slide 2: Solution
    solution_title: "Наше рішення",
    solution_subtitle: "Gaussian Points",
    solution_desc: "Gaussian Points - це інноваційний плагін для SketchUp, який забезпечує ефективну обробку та візуалізацію хмар точок, використовуючи першу в галузі технологію Gaussian Splatting для фотореалістичного рендерингу.",
    target_market: "Цільовий ринок",
    architects: "Архітектори",
    urban_planners: "Урбаністи",
    interior_designers: "Дизайнери інтер'єру",
    engineers: "Інженери",
    
    // Slide 3: Market Opportunity
    market_opportunity: "Ринкові можливості",
    active_users: "Активних користувачів SketchUp",
    arch_software_market: "Ринок архітектурного ПЗ (2024)",
    point_cloud_market: "Ринок ПЗ для хмар точок (2025)",
    users_by_geography: "Користувачі SketchUp за географією",
    users_by_profession: "Розподіл користувачів SketchUp за професією",
    market_potential: "Починаючи з 1% захоплення ринку та поступово масштабуючись через цільовий маркетинг і розширення платформи за межі SketchUp, ми прагнемо створити суттєву та захищену ринкову позицію.",
    
    // Slide 4: How it Works
    how_it_works: "Як це працює",
    how_it_works_desc: "Від 3D-скану до готової презентації для клієнта всього за кілька кроків. Ось як архітектори використовують Gaussian Points, щоб втілювати свої ідеї в життя.",
    multi_format: "1. Отримайте скан",
    multi_format_desc: "Почніть з даних, отриманих з будь-якого 3D-лазерного сканера або дрона. Наш плагін підтримує всі основні типи файлів.",
    low_level: "2. Імпортуйте в SketchUp",
    low_level_desc: "Один клік — це все, що потрібно, щоб перенести вашу хмару точок у SketchUp. Жодних складних налаштувань, лише миттєвий результат.",
    gaussian_tech: "3. Моделюйте на реальному фоні",
    gaussian_tech_desc: "Проектуйте безпосередньо на фотореалістичному скані, гарантуючи, що ваш проект ідеально впишеться в реальне оточення.",
    toolset: "4. Вразьте своїх клієнтів",
    toolset_desc: "Презентуйте свою роботу в контексті, який клієнти зрозуміють миттєво, що призведе до швидших узгоджень та кращого зворотного зв'язку.",
    
    // Slide 5: Value Proposition
    value_proposition: "Ціннісна пропозиція",
    faster_generation: "Швидший робочий процес",
    visual_accuracy: "Фотореалістичний рендеринг",
    fps_performance: "Плавна продуктивність",
    cost_effective: "Економічно ефективний",
    cost_effective_desc: "Безкоштовний рівень для базової функціональності хмар точок, доступний преміум для Gaussian Splatting",
    unmatched_performance: "Оптимізована продуктивність",
    unmatched_performance_desc: "Робота з великими хмарами точок із чутливим керуванням та плавнішою взаємодією",
    photo_visualization: "Фотореалістична візуалізація",
    photo_visualization_desc: "Gaussian Splatting створює суцільні, деталізовані поверхні з точними відбиттями та текстурами - усуваючи потребу вручну моделювати складні елементи",
    next_gen: "Захищена технологічна перевага",
    next_gen_desc: "Наша пропрієтарна реалізація створює високі бар'єри для входу з технічними перевагами, які важко відтворити, забезпечуючи довгострокову ринкову позицію",
    
    // Slide 6: Competitive Landscape
    competitive_landscape: "Конкурентний ландшафт",
    performance_comparison: "Порівняння продуктивності (Рендеринг великих моделей)",
    feature: "Функція",
    gaussian_points: "Gaussian Points",
    trimble: "Trimble Scan Essentials",
    undet: "Undet for SketchUp",
    point_cloud_support: "Підтримка хмар точок",
    free_tier: "Наявність безкоштовного рівня",
    high_performance: "Високопродуктивний рендеринг",
    realistic_viz: "Реалістична візуалізація",
    price: "Ціна",
    partial: "Частково",
    limited: "Обмежено",
    basic_price: "$0 (Базовий) до $30-50/місяць (Преміум)",
    trimble_price: "$699/рік (у SketchUp Studio)",
    undet_price: "€500/рік або €89/місяць",
    competitive_summary: "У той час як конкуренти пропонують базову функціональність хмар точок, Gaussian Points - єдине рішення, яке поєднує доступність, оптимізовану продуктивність та передову технологію Gaussian Splatting.",
    
    // Slide 7: Business Model
    business_model: "Бізнес-модель",
    freemium: "Freemium підхід",
    freemium_desc: "Базова візуалізація хмар точок безкоштовно, преміум-функції (включаючи Gaussian Splatting) за плату",
    subscription: "Модель підписки",
    subscription_desc: "$30-50/місяць за преміум-функції або $299/рік, зі знижками для компаній",
    partnerships: "Стратегічні партнерства",
    partnerships_desc: "Можливе комплектування з виробниками лазерних сканерів та постачальниками послуг сканування",
    revenue_projection: "Прогноз доходів",
    revenue_projection_desc: "Починаючи з 1% ринку та поступово розширюючись, ми проектуємо зростання річного доходу до $9 мільйонів на п'ятий рік",
    projected_revenue: "5-річний прогноз доходу",
    
    // Slide 8: Team
    team: "Наша команда",
    founder: "Засновник та головний розробник",
    founder_bio: "Архітектор-урбаніст із досвідом у 3D-візуалізації, параметричному проектуванні та розробці інноваційних рішень для архітектурних робочих процесів.",
    ai_assistant: "ШІ-асистент",
    dev_support: "Підтримка розробки",
    ai_bio: "Передова ШІ-допомога для оптимізації коду, тестування та документації, що допомагає прискорити цикли розробки.",
    advisor: "[Майбутній радник]",
    tech_advisor: "Технічний радник",
    advisor_bio: "Відкрита посада для галузевого експерта з досвідом у 3D-візуалізації, архітектурному програмному забезпеченні або обробці хмар точок.",
    
    // Slide 9: Development Roadmap
    roadmap: "План розробки",
    q1_2025: "1 кв. 2025",
    prototype: "Робочий прототип (Завершено)",
    prototype_desc: "Базова функціональність завантаження та візуалізації хмар точок, інтеграція OpenGL та базова реалізація Gaussian Splatting",
    q2_2025: "2 кв. 2025",
    beta: "Бета-реліз (В процесі)",
    beta_desc: "Плагін з повним набором функцій, оптимізованою продуктивністю, офіційною підтримкою форматів файлів та повною можливістю Gaussian Splatting",
    q3_2025: "3 кв. 2025",
    launch: "Публічний запуск",
    launch_desc: "Випуск у Extension Warehouse, маркетингова кампанія та впровадження freemium-моделі",
    q1_2026: "1 кв. 2026",
    expansion: "Розширення",
    expansion_desc: "Розширені функції (розпізнавання об'єктів на базі ШІ, автоматизація), стратегічне розширення платформи на Rhino та Revit для багаторазового збільшення адресного ринку та корпоративні рішення",
    
    // Slide 10: Investment Opportunity
    investment: "Інвестиційна можливість",
    seed_round: "Ціль посівного раунду",
    dev_resources: "Ресурси розробки",
    dev_resources_desc: "60% - Прискорення розробки, залучення додаткових розробників та вдосконалення основної функціональності",
    marketing: "Маркетинг та залучення користувачів",
    marketing_desc: "25% - Цільові кампанії для архітектурних фірм, навчальний контент та розбудова спільноти",
    infrastructure: "Інфраструктура",
    infrastructure_desc: "10% - Можливості хмарної обробки, інфраструктура ліцензування та тестове середовище",
    operations: "Операції",
    operations_desc: "5% - Юридичні, бухгалтерські та операційні вимоги",
    investment_summary: "Інвестиції прискорять вихід на ринок та допоможуть захопити перевагу першопрохідця на ринку технологій візуалізації Gaussian Splatting, що розвивається",
    
    // Slide 11: Thank You
    thank_you: "Дякуємо",
    revolution: "Давайте разом трансформуємо архітектурну візуалізацію",
    
    // Chart labels
    geo_chart_labels: ['Сполучені Штати', 'Велика Британія', 'Європа (інше)', 'Азія', 'Решта світу'],
    profession_chart_labels: ['Архітектори', 'Дизайнери інтер\'єру', 'Урбаністи', 'Інженери', 'Інші'],
    performance_chart_labels: ['Gaussian Points', 'Scan Essentials', 'Undet'],
    revenue_chart_labels: ['Рік 1', 'Рік 2', 'Рік 3', 'Рік 4', 'Рік 5']
  }
};
  
// Current language
let currentLang = 'en';

// Flag to track if a language change animation is in progress
let isLanguageChanging = false;
  
// Function to update all text elements with translations
function updateLanguage(lang, forceAnimation = false) {
  // Skip animation if language isn't actually changing and we're not forcing it
  if (currentLang === lang && !forceAnimation && !isLanguageChanging) {
    // Just update the content of newly visible elements without animation
    document.querySelectorAll('[data-lang]').forEach(element => {
      const key = element.getAttribute('data-lang');
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    return;
  }
  
  // Set the flag to indicate language is changing
  isLanguageChanging = true;
  
  // First let's prepare the elements but don't update content yet
  const elements = document.querySelectorAll('[data-lang]');
  
  // Apply exit animation to all elements
  elements.forEach(element => {
    // Skip elements that are not visible or are in slides not currently active
    if (!element.offsetParent || (element.closest('.slide') && !element.closest('.slide').classList.contains('active'))) {
      return;
    }
    
    element.classList.add('language-transition');
    element.classList.add('language-transition-out');
  });
  
  // Wait for exit animation to complete
  setTimeout(() => {
    // Now update the content
    elements.forEach(element => {
      const key = element.getAttribute('data-lang');
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
      
      // Reset and apply enter animation
      element.classList.remove('language-transition-out');
      element.classList.add('language-transition-in');
      
      // Remove animation classes after completion
      setTimeout(() => {
        element.classList.remove('language-transition');
        element.classList.remove('language-transition-in');
      }, 400);
    });
    
    // Update language button text
    document.querySelector('.current-lang').textContent = lang.toUpperCase();
    
    // Update chart labels if charts are initialized
    if (typeof window.geoChart !== 'undefined' || 
        typeof window.professionChart !== 'undefined' || 
        typeof window.performanceChart !== 'undefined' || 
        typeof window.revenueChart !== 'undefined') {
      updateChartLabels(lang);
    }
    
    // Set document lang attribute
    document.documentElement.lang = lang;
    
    // Store current language in localStorage for persistence
    localStorage.setItem('preferred-language', lang);
    
    // Dispatch a custom event for the analysis content
    const event = new CustomEvent('languageChanged', {
      detail: { language: lang }
    });
    document.dispatchEvent(event);
    
    // Reset the flag after everything is done
    setTimeout(() => {
      isLanguageChanging = false;
    }, 500);
  }, 400); // Wait for exit animation to complete
}
  
// Function to update chart labels
function updateChartLabels(lang) {
  // Update geo chart labels if it exists
  if (typeof window.geoChart !== 'undefined') {
    if (translations[lang].geo_chart_labels) {
      window.geoChart.data.labels = translations[lang].geo_chart_labels;
      window.geoChart.update();
    }
  }
  
  // Update profession chart labels if it exists
  if (typeof window.professionChart !== 'undefined') {
    if (translations[lang].profession_chart_labels) {
      window.professionChart.data.labels = translations[lang].profession_chart_labels;
      window.professionChart.update();
    }
  }
  
  // Update performance chart labels if it exists
  if (typeof window.performanceChart !== 'undefined') {
    if (translations[lang].performance_chart_labels) {
      window.performanceChart.data.labels = translations[lang].performance_chart_labels;
      window.performanceChart.update();
    }
  }
  
  // Update revenue chart labels if it exists
  if (typeof window.revenueChart !== 'undefined') {
    if (translations[lang].revenue_chart_labels) {
      window.revenueChart.data.labels = translations[lang].revenue_chart_labels;
      window.revenueChart.update();
    }
  }
}

// Toggle language function
function toggleLanguage() {
  // Disable the button temporarily to prevent multiple clicks
  const languageButton = document.getElementById('language-button');
  if (languageButton) {
    languageButton.style.pointerEvents = 'none';
    setTimeout(() => {
      languageButton.style.pointerEvents = 'auto';
    }, 800); // Re-enable after animations complete
  }
  
  // Change language and update with animation
  currentLang = currentLang === 'en' ? 'uk' : 'en';
  updateLanguage(currentLang, true); // force animation when language actually changes
}
  
// Initialize language settings on page load
document.addEventListener('DOMContentLoaded', () => {
  // Check for saved language preference
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang && (savedLang === 'en' || savedLang === 'uk')) {
    currentLang = savedLang;
  }
  
  // Set initial language
  updateLanguage(currentLang);
  
  // Add event listener to language button
  const languageButton = document.getElementById('language-button');
  languageButton.addEventListener('click', toggleLanguage);
});
  
// Event listener for the slides to update language when slide changes
document.addEventListener('slideChanged', () => {
  // Here we just update the text without animations
  updateLanguage(currentLang, false);
});