// AI-optimized bilingual text objects for low-bandwidth Nepal users
// Uses lightweight object lookup instead of heavy i18n libraries

export const translations = {
  // Header Navigation
  nav: {
    home: { en: 'Home', np: 'घर' },
    about: { en: 'About', np: 'बारेमा' },
    admissions: { en: 'Admissions', np: 'भर्ना' },
    gallery: { en: 'Gallery', np: 'ग्यालरी' },
    contact: { en: 'Contact', np: 'सम्पर्क' },
  },

  // Home Page
  home: {
    heroTagline: { 
      en: 'Reaching New Heights in Education', 
      np: 'शिक्षामा नयाँ उचाइ प्राप्त गर्दै' 
    },
    heroSubtitle: {
      en: 'Building Tomorrow\'s Leaders Today',
      np: 'आजका नेताहरू भोलिको लागि निर्माण गर्दै'
    },
    welcomeTitle: { en: 'Welcome to Sagarmatha HSS', np: 'सगरमाथा उच्च माध्यमिक विद्यालयमा स्वागत छ' },
    welcomeText: {
      en: 'Sagarmatha Higher Secondary School stands as a beacon of educational excellence in Nepal. Named after the world\'s tallest peak, we inspire students to reach their highest potential through innovative teaching, modern facilities, and a nurturing environment that celebrates both academic achievement and character development.',
      np: 'सगरमाथा उच्च माध्यमिक विद्यालय नेपालमा शैक्षिक उत्कृष्टताको प्रतीकको रूपमा उभिएको छ। विश्वको सबैभन्दा अग्लो शिखरको नाममा राखिएको, हामी विद्यार्थीहरूलाई नवीन शिक्षण, आधुनिक सुविधाहरू र पालनपोषण वातावरण मार्फत उनीहरूको उच्चतम सम्भावनामा पुग्न प्रेरित गर्छौं।'
    },
    eventsTitle: { en: 'Upcoming Events', np: 'आगामी कार्यक्रमहरू' },
    quickLinks: { en: 'Quick Links', np: 'द्रुत लिंकहरू' },
    applyNow: { en: 'Apply Now', np: 'अहिले आवेदन दिनुहोस्' },
    viewGallery: { en: 'View Gallery', np: 'ग्यालरी हेर्नुहोस्' },
  },

  // Admissions Page
  admissions: {
    title: { en: 'Admissions 2082', np: 'भर्ना २०८२' },
    subtitle: {
      en: 'Join Our Learning Community',
      np: 'हाम्रो सिकाइ समुदायमा सामेल हुनुहोस्'
    },
    formTitle: { en: 'Application Form', np: 'आवेदन फारम' },
    nameLabel: { en: 'Student Name', np: 'विद्यार्थीको नाम' },
    emailLabel: { en: 'Parent Email', np: 'अभिभावकको इमेल' },
    classLabel: { en: 'Select Class', np: 'कक्षा चयन गर्नुहोस्' },
    classPlaceholder: { en: 'Choose class...', np: 'कक्षा छान्नुहोस्...' },
    submitBtn: { en: 'Submit Application', np: 'आवेदन पेश गर्नुहोस्' },
    successMsg: {
      en: 'Application submitted! We will contact you soon.',
      np: 'आवेदन पेश गरियो! हामी तपाईंलाई चाँडै सम्पर्क गर्नेछौं।'
    },
    eligibilityTitle: { en: 'Eligibility Criteria', np: 'योग्यता मापदण्ड' },
    grade: { en: 'Grade', np: 'कक्षा' },
    ageRequirement: { en: 'Age Requirement', np: 'उमेर आवश्यकता' },
    documents: { en: 'Documents', np: 'कागजातहरू' },
  },

  // Gallery Page
  gallery: {
    title: { en: 'Event Gallery', np: 'कार्यक्रम ग्यालरी' },
    subtitle: {
      en: 'Moments from Our School Life',
      np: 'हाम्रो स्कूल जीवनका क्षणहरू'
    },
    closeBtn: { en: 'Close', np: 'बन्द गर्नुहोस्' },
  },

  // About Page
  about: {
    title: { en: 'About Us', np: 'हाम्रो बारेमा' },
    subtitle: { en: 'Know Our Story', np: 'हाम्रो कथा जान्नुहोस्' },
    principalTitle: { en: "Principal's Message", np: 'प्रधानाध्यापकको सन्देश' },
    principalName: { en: 'Dr. Ramesh Kumar Sharma', np: 'डा. रमेश कुमार शर्मा' },
    principalDesignation: { en: 'Principal & Academic Director', np: 'प्रधानाध्यापक तथा शैक्षिक निर्देशक' },
    principalMessage: {
      en: 'Welcome to Sagarmatha Higher Secondary School! Like the mountain we are named after, we stand tall in our commitment to educational excellence. Our vision is to create future leaders who are not only academically brilliant but also possess strong moral values, innovative thinking, and a deep love for our nation. With world-class facilities, passionate educators, and a proven track record of success, we ensure every student climbs to their peak potential.',
      np: 'सगरमाथा उच्च माध्यमिक विद्यालयमा स्वागत छ! हामीले नाम राखेको पर्वत जस्तै, हामी शैक्षिक उत्कृष्टताको लागि हाम्रो प्रतिबद्धतामा अग्लो उभिन्छौं। हाम्रो दृष्टिकोण भविष्यका नेताहरू सिर्जना गर्नु हो जो शैक्षिक रूपमा मात्र उत्कृष्ट छैनन् तर बलियो नैतिक मूल्यहरू, नवीन सोच र हाम्रो राष्ट्रप्रति गहिरो माया पनि राख्छन्।'
    },
    missionTitle: { en: 'Our Mission', np: 'हाम्रो मिशन' },
    missionText: {
      en: 'To provide holistic education that develops intellectual, emotional, and social capabilities of students while fostering Nepali cultural values and global citizenship.',
      np: 'नेपाली सांस्कृतिक मूल्यमान्यता र विश्वव्यापी नागरिकतालाई बढावा दिँदै विद्यार्थीहरूको बौद्धिक, भावनात्मक र सामाजिक क्षमताको विकास गर्ने समग्र शिक्षा प्रदान गर्नु।'
    },
    visionTitle: { en: 'Our Vision', np: 'हाम्रो दृष्टिकोण' },
    visionText: {
      en: 'To be the leading educational institution in Nepal, recognized for excellence in academic achievement, character development, and preparing students for success in a rapidly changing world.',
      np: 'शैक्षिक उपलब्धि, चरित्र विकास, र द्रुत रूपमा परिवर्तन भइरहेको संसारमा विद्यार्थीहरूलाई सफलताको लागि तयार पार्नमा उत्कृष्टताको लागि मान्यता प्राप्त, नेपालको अग्रणी शैक्षिक संस्था बन्नु।'
    },
    historyTitle: { en: 'Our History', np: 'हाम्रो इतिहास' },
    historyText: {
      en: 'Established in 2012 BS, Sagarmatha Higher Secondary School was founded with a bold vision: to create an educational institution that matches the grandeur of Mount Everest itself. From humble beginnings with 75 students and 12 dedicated teachers, we have scaled new heights to become one of Nepal\'s most respected educational institutions, now serving over 1,500 students. Our remarkable 98% SEE success rate, multiple national awards, and alumni success stories reflect our unwavering commitment to excellence.',
      np: 'सन् २०१२ मा स्थापित, सगरमाथा उच्च माध्यमिक विद्यालय एक साहसी दृष्टिकोणका साथ स्थापना गरिएको थियो: सगरमाथाको भव्यतासँग मिल्ने शैक्षिक संस्था सिर्जना गर्ने। ७५ विद्यार्थी र १२ समर्पित शिक्षकहरूको विनम्र सुरुवातबाट, हामी नेपालको सबैभन्दा सम्मानित शैक्षिक संस्थाहरू मध्ये एक बन्न नयाँ उचाइमा पुगेका छौं।'
    },
    whyChooseTitle: { en: 'Why Choose Us', np: 'किन हामीलाई छान्ने' },
    feature1Title: { en: 'Expert Faculty Team', np: 'विशेषज्ञ शिक्षक टोली' },
    feature1Text: { en: '50+ highly qualified teachers with master degrees and 15+ years of teaching experience. Regular training and workshops ensure innovative teaching methods.', np: 'मास्टर डिग्री र १५+ वर्षको शिक्षण अनुभव भएका ५०+ उच्च योग्य शिक्षकहरू। नियमित तालिम र कार्यशालाले नवीन शिक्षण विधिहरू सुनिश्चित गर्दछ।' },
    feature2Title: { en: 'State-of-the-Art Facilities', np: 'अत्याधुनिक सुविधाहरू' },
    feature2Text: { en: 'AC smart classrooms with projectors, advanced science labs, 10,000+ book library, indoor sports complex, and 100 Mbps WiFi throughout campus.', np: 'प्रोजेक्टर सहित AC स्मार्ट कक्षाकोठा, उन्नत विज्ञान प्रयोगशाला, १०,०००+ पुस्तक पुस्तकालय, इन्डोर खेलकुद कम्प्लेक्स, र क्याम्पसभर १०० Mbps WiFi।' },
    feature3Title: { en: 'Outstanding Results', np: 'उत्कृष्ट परिणाम' },
    feature3Text: { en: 'Consistent 98%+ SEE pass rate with 60% students scoring A+. Our alumni study at Harvard, Stanford, and top universities worldwide.', np: 'लगातार ९८%+ SEE उत्तीर्ण दर र ६०% विद्यार्थीहरूले A+ प्राप्त गर्छन्। हाम्रा पूर्व विद्यार्थीहरू हार्वर्ड, स्ट्यानफोर्ड र विश्वभरका शीर्ष विश्वविद्यालयहरूमा अध्ययन गर्छन्।' },
    facilitiesTitle: { en: 'Our Facilities', np: 'हाम्रा सुविधाहरू' },
    facility1: { en: '45 AC Smart Classrooms with Interactive Boards & Projectors', np: '४५ AC स्मार्ट कक्षाकोठा इन्टरएक्टिभ बोर्ड र प्रोजेक्टरसहित' },
    facility2: { en: 'Advanced Computer Lab - 80 Systems with 100 Mbps Fiber Internet', np: 'उन्नत कम्प्युटर प्रयोगशाला - ८० प्रणाली १०० Mbps फाइबर इन्टरनेटसहित' },
    facility3: { en: 'Digital Library - 10,000+ Books, E-books & Research Journals', np: 'डिजिटल पुस्तकालय - १०,०००+ पुस्तकहरू, ई-बुकहरू र अनुसन्धान जर्नलहरू' },
    facility4: { en: 'Olympic-size Sports Complex with Basketball, Volleyball & Football', np: 'ओलम्पिक आकारको खेलकुद कम्प्लेक्स बास्केटबल, भलिबल र फुटबलसहित' },
    facility5: { en: 'Physics, Chemistry & Biology Labs with Modern Equipment', np: 'भौतिकशास्त्र, रसायनशास्त्र र जीवविज्ञान प्रयोगशाला आधुनिक उपकरणहरूसहित' },
    facility6: { en: 'GPS-tracked School Bus Fleet covering 25+ routes across Kathmandu', np: 'GPS-ट्र्याक गरिएको स्कूल बस फ्लीट काठमाडौंभरि २५+ मार्गहरू कभर गर्दै' },
  },

  // Contact Page
  contact: {
    title: { en: 'Contact Us', np: 'सम्पर्क गर्नुहोस्' },
    subtitle: { en: 'Get in Touch with Us', np: 'हामीसँग सम्पर्कमा रहनुहोस्' },
    formTitle: { en: 'Send us a Message', np: 'हामीलाई सन्देश पठाउनुहोस्' },
    nameLabel: { en: 'Your Name', np: 'तपाईंको नाम' },
    namePlaceholder: { en: 'Enter your name', np: 'आफ्नो नाम प्रविष्ट गर्नुहोस्' },
    emailLabel: { en: 'Email Address', np: 'इमेल ठेगाना' },
    emailPlaceholder: { en: 'Enter your email', np: 'आफ्नो इमेल प्रविष्ट गर्नुहोस्' },
    phoneLabel: { en: 'Phone Number', np: 'फोन नम्बर' },
    phonePlaceholder: { en: 'Enter your phone', np: 'आफ्नो फोन प्रविष्ट गर्नुहोस्' },
    subjectLabel: { en: 'Subject', np: 'विषय' },
    subjectPlaceholder: { en: 'Message subject', np: 'सन्देश विषय' },
    messageLabel: { en: 'Your Message', np: 'तपाईंको सन्देश' },
    messagePlaceholder: { en: 'Write your message here...', np: 'यहाँ आफ्नो सन्देश लेख्नुहोस्...' },
    submitBtn: { en: 'Send Message', np: 'सन्देश पठाउनुहोस्' },
    successMsg: {
      en: 'Thank you! Your message has been sent successfully. We will respond within 24 hours.',
      np: 'धन्यवाद! तपाईंको सन्देश सफलतापूर्वक पठाइएको छ। हामी २४ घण्टा भित्र जवाफ दिनेछौं।'
    },
    errorName: { en: 'Please enter your name', np: 'कृपया आफ्नो नाम प्रविष्ट गर्नुहोस्' },
    errorEmail: { en: 'Please enter a valid email', np: 'कृपया मान्य इमेल प्रविष्ट गर्नुहोस्' },
    errorMessage: { en: 'Please enter your message', np: 'कृपया आफ्नो सन्देश प्रविष्ट गर्नुहोस्' },
    infoTitle: { en: 'Contact Information', np: 'सम्पर्क जानकारी' },
    addressLabel: { en: 'Address', np: 'ठेगाना' },
    address: { 
      en: 'New Baneshwor, Kathmandu 44600, Nepal', 
      np: 'नयाँ बानेश्वर, काठमाडौं ४४६००, नेपाल' 
    },
    hoursLabel: { en: 'Office Hours', np: 'कार्यालय समय' },
    hours: {
      en: 'Sunday - Friday: 7:00 AM - 4:00 PM',
      np: 'आइतबार - शुक्रबार: बिहान ७:०० - बेलुका ४:००'
    },
    mapText: { en: 'View on Google Maps', np: 'गुगल नक्सामा हेर्नुहोस्' },
  },

  // Footer
  footer: {
    contactTitle: { en: 'Contact Us', np: 'हामीलाई सम्पर्क गर्नुहोस्' },
    address: { 
      en: 'New Baneshwor, Kathmandu, Nepal', 
      np: 'नयाँ बानेश्वर, काठमाडौं, नेपाल' 
    },
    phone: { en: 'Phone', np: 'फोन' },
    email: { en: 'Email', np: 'इमेल' },
    copyright: {
      en: '© 2025 Sagarmatha Higher Secondary School. All rights reserved.',
      np: '© २०२५ सगरमाथा उच्च माध्यमिक विद्यालय। सर्वाधिकार सुरक्षित।'
    },
  },

  // Events Data (Bikram Sambat calendar)
  events: [
    {
      name: { en: 'Dashain Vacation', np: 'दशैं बिदा' },
      date: { en: '2082-06-15 to 2082-06-25', np: '२०८२-०६-१५ देखि २०८२-०६-२५' },
      type: { en: 'Holiday', np: 'बिदा' }
    },
    {
      name: { en: 'Science Exhibition', np: 'विज्ञान प्रदर्शनी' },
      date: { en: '2082-07-10', np: '२०८२-०७-१०' },
      type: { en: 'Academic', np: 'शैक्षिक' }
    },
    {
      name: { en: 'Sports Week', np: 'खेलकुद सप्ताह' },
      date: { en: '2082-08-01 to 2082-08-07', np: '२०८२-०८-०१ देखि २०८२-०८-०७' },
      type: { en: 'Sports', np: 'खेलकुद' }
    },
  ],

  // Gallery Event Cards
  galleryEvents: [
    { title: { en: 'Annual Day 2081', np: 'वार्षिक दिवस २०८१' }, category: 'Cultural' },
    { title: { en: 'Science Fair', np: 'विज्ञान मेला' }, category: 'Academic' },
    { title: { en: 'Sports Day', np: 'खेलकुद दिवस' }, category: 'Sports' },
    { title: { en: 'Dashain Celebration', np: 'दशैं उत्सव' }, category: 'Festival' },
    { title: { en: 'Graduation 2081', np: 'स्नातक २०८१' }, category: 'Ceremony' },
    { title: { en: 'Art Exhibition', np: 'कला प्रदर्शनी' }, category: 'Cultural' },
  ],

  // Eligibility Table Data
  eligibilityData: [
    {
      grade: { en: 'Class 1', np: 'कक्षा १' },
      age: { en: '5-6 years', np: '५-६ वर्ष' },
      docs: { en: 'Birth Certificate', np: 'जन्म प्रमाणपत्र' }
    },
    {
      grade: { en: 'Class 6', np: 'कक्षा ६' },
      age: { en: '10-11 years', np: '१०-११ वर्ष' },
      docs: { en: 'Previous Report Card', np: 'अघिल्लो रिपोर्ट कार्ड' }
    },
    {
      grade: { en: 'Class 11 (SEE)', np: 'कक्षा ११ (SEE)' },
      age: { en: '15-16 years', np: '१५-१६ वर्ष' },
      docs: { en: 'SEE Certificate, Character Certificate', np: 'SEE प्रमाणपत्र, चरित्र प्रमाणपत्र' }
    },
  ],
};
