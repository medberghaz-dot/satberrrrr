/**
 * Content data for Miras medical marketing website
 */

export interface Service {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  features: string[];
  icon: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  nameAr: string;
  nameEn: string;
  clinicAr: string;
  clinicEn: string;
  contentAr: string;
  contentEn: string;
  rating: number;
  image?: string;
}

export const services: Service[] = [
  {
    id: '1',
    titleAr: 'إدارة السوشيال ميديا الطبية',
    titleEn: 'Medical Social Media Management',
    descriptionAr: 'إدارة احترافية لحساباتك على السوشيال ميديا مع محتوى طبي توعوي جذاب',
    descriptionEn: 'Professional management of your social media accounts with engaging medical educational content',
    features: [
      'إدارة الحسابات بالكامل',
      'خطة محتوى شهرية',
      'محتوى طبي توعوي جذاب',
      'تصميم منشورات احترافية',
      'كتابة نصوص تسويقية',
      'بناء مجتمع رقمي',
    ],
    icon: '📱',
    slug: 'social-media',
  },
  {
    id: '2',
    titleAr: 'الإعلانات الممولة للعيادات',
    titleEn: 'Paid Advertising for Clinics',
    descriptionAr: 'إعلانات مدروسة عبر Google Ads و Facebook و Instagram و Snapchat',
    descriptionEn: 'Targeted advertising across Google Ads, Facebook, Instagram, and Snapchat',
    features: [
      'دراسة السوق والمنافسين',
      'تحديد الجمهور بدقة',
      'إدارة الميزانية',
      'تحسين الأداء المستمر',
      'تقارير قياس النتائج',
      'زيادة الحجوزات',
    ],
    icon: '📊',
    slug: 'paid-advertising',
  },
  {
    id: '3',
    titleAr: 'تحسين محركات البحث SEO',
    titleEn: 'SEO for Medical Websites',
    descriptionAr: 'تحسين موقعك لمحركات البحث لجذب مرضى يبحثون فعلياً عن خدماتك',
    descriptionEn: 'Optimize your website for search engines to attract patients actively searching for your services',
    features: [
      'تحليل الكلمات المفتاحية الطبية',
      'تحسين الموقع تقنياً',
      'كتابة مقالات متوافقة مع SEO',
      'تحسين تجربة المستخدم',
      'بناء روابط خارجية',
      'تقارير الأداء الشهرية',
    ],
    icon: '🔍',
    slug: 'seo',
  },
  {
    id: '4',
    titleAr: 'تصميم الهوية البصرية والاستراتيجية',
    titleEn: 'Brand Identity & Strategy Design',
    descriptionAr: 'بناء استراتيجية العلامة التجارية وتصميم هوية بصرية احترافية',
    descriptionEn: 'Build your brand strategy and design professional visual identity',
    features: [
      'بناء استراتيجية العلامة التجارية',
      'تصميم شعار وهوية بصرية',
      'دليل استخدام الهوية',
      'توحيد الصورة الذهنية',
      'استشارات العلامة التجارية',
      'تصميم مواد التسويق',
    ],
    icon: '🎨',
    slug: 'branding',
  },
  {
    id: '5',
    titleAr: 'تصميم المواقع الطبية',
    titleEn: 'Medical Website Design',
    descriptionAr: 'تصميم مواقع طبية احترافية وسهلة الاستخدام وسريعة التحميل',
    descriptionEn: 'Professional, user-friendly, and fast-loading medical website design',
    features: [
      'تصميم استجابي (Responsive)',
      'سهل الاستخدام (UX)',
      'سريع التحميل',
      'متوافق مع محركات البحث',
      'نموذج حجز مدمج',
      'تحديثات وصيانة',
    ],
    icon: '💻',
    slug: 'web-design',
  },
  {
    id: '6',
    titleAr: 'إنتاج الفيديو الدعائي الطبي',
    titleEn: 'Medical Promotional Video Production',
    descriptionAr: 'إنتاج فيديوهات دعائية احترافية لخدماتك الطبية',
    descriptionEn: 'Professional video production for your medical services',
    features: [
      'مفهوم وسيناريو احترافي',
      'تصوير عالي الجودة',
      'مونتاج احترافي',
      'فيديوهات توضيحية',
      'شهادات عملاء',
      'فيديوهات للسوشيال ميديا',
    ],
    icon: '🎬',
    slug: 'video-production',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    nameAr: 'د. أحمد السعيد',
    nameEn: 'Dr. Ahmed Al-Said',
    clinicAr: 'عيادة السعيد للأسنان',
    clinicEn: 'Al-Said Dental Clinic',
    contentAr: 'تعاملنا مع مِراس كان تجربة رائعة. زادت الحجوزات بنسبة 150% في أول 3 أشهر. فريقهم احترافي جداً وملتزم بالنتائج.',
    contentEn: 'Working with Miras was a wonderful experience. Bookings increased by 150% in the first 3 months. Their team is very professional and committed to results.',
    rating: 5,
  },
  {
    id: '2',
    nameAr: 'د. فاطمة محمد',
    nameEn: 'Dr. Fatima Mohammed',
    clinicAr: 'مركز الأمل الطبي',
    clinicEn: 'Al-Amal Medical Center',
    contentAr: 'استراتيجيتهم في التسويق الرقمي غيرت مسار عملنا. صارت العيادة معروفة والمرضى يأتونا من توصيات وبحث.',
    contentEn: 'Their digital marketing strategy changed our business direction. The clinic became well-known and patients come through referrals and search.',
    rating: 5,
  },
  {
    id: '3',
    nameAr: 'د. محمود علي',
    nameEn: 'Dr. Mahmoud Ali',
    clinicAr: 'عيادة الرؤيا',
    clinicEn: 'Al-Roya Clinic',
    contentAr: 'أفضل استثمار قمت به لعيادتي. الخدمات احترافية والدعم مستمر. أنصح أي طبيب بالتعاون معهم.',
    contentEn: 'Best investment I made for my clinic. Services are professional and support is continuous. I recommend any doctor to work with them.',
    rating: 5,
  },
];

export const homePageContent = {
  heroTitleAr: 'شريكك المتخصص في التسويق الطبي والنمو الرقمي',
  heroTitleEn: 'Your Specialized Partner in Medical Marketing & Digital Growth',
  heroDescriptionAr: 'نبدأ رحلتنا معك بفهم السوق والجمهور المستهدف لنساعدك على تطوير علامتك الطبية وجذب المرضى المناسبين وتحقيق نمو رقمي مستدام.',
  heroDescriptionEn: 'We start our journey with you by understanding the market and target audience to help you develop your medical brand, attract the right patients, and achieve sustainable digital growth.',
  
  taglineAr: 'نأخذ بيدك من البداية إلى التمكين الرقمي',
  taglineEn: 'We guide you from the beginning to digital empowerment',

  whyImportantTitleAr: 'لماذا التسويق الطبي مهم؟',
  whyImportantTitleEn: 'Why Medical Marketing Matters?',
  whyImportantPoints: [
    {
      ar: 'المرضى يبحثون في Google قبل زيارة الطبيب',
      en: 'Patients search on Google before visiting a doctor',
    },
    {
      ar: 'المنافسة الرقمية أصبحت العامل الحاسم في اختيار العيادة',
      en: 'Digital competition is now the deciding factor in choosing a clinic',
    },
    {
      ar: 'بناء الثقة الرقمية يسبق زيارة المريض',
      en: 'Digital trust is built before the patient visits',
    },
    {
      ar: 'التسويق يمثل أحد أكبر استثمارات الشركات بعد الرواتب',
      en: 'Marketing represents one of the biggest investments after salaries',
    },
  ],

  whyMirasTitleAr: 'لماذا مِراس؟',
  whyMirasTitleEn: 'Why Miras?',
  whyMirasPoints: [
    {
      ar: 'تحليل السوق والمنافسين قبل البدء',
      en: 'Market and competitor analysis before starting',
    },
    {
      ar: 'دراسة الجمهور المستهدف بدقة',
      en: 'Precise target audience research',
    },
    {
      ar: 'وضع استراتيجية تسويق طبي متكاملة',
      en: 'Comprehensive medical marketing strategy',
    },
    {
      ar: 'تقارير أداء وتحسين مستمر',
      en: 'Performance reports and continuous improvement',
    },
    {
      ar: 'حلول تناسب مختلف الميزانيات',
      en: 'Solutions for different budgets',
    },
  ],

  ctaTitleAr: 'مستعد لزيادة عدد مرضاك؟',
  ctaTitleEn: 'Ready to increase your patient base?',

  aboutTitleAr: 'من نحن',
  aboutTitleEn: 'About Us',
  aboutDescriptionAr: 'شركة مِراس للتسويق الرقمي تقدم حلول التسويق الطبي المتكاملة المبنية على التحليل والاستراتيجية والتخطيط والتنفيذ بهدف بناء الوعي بالعلامة التجارية والوصول الفعّال للمرضى عبر القنوات الرقمية بتكاليف مدروسة.',
  aboutDescriptionEn: 'Miras Digital Marketing provides comprehensive medical marketing solutions built on analysis, strategy, planning, and execution to build brand awareness and effectively reach patients through digital channels with calculated costs.',
  
  aboutBeliefsAr: 'نؤمن أن التسويق ليس رفاهية بل أحد أهم استثمارات النمو للعيادات والمراكز الطبية.',
  aboutBeliefsEn: 'We believe that marketing is not a luxury but one of the most important investments for the growth of medical clinics and centers.',
};
