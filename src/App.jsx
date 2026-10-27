import React, { useState } from "react";
// ایمپورت کردن آیکون‌های مدرن از کتابخانه
import {
  Car,
  Building2,
  Smartphone,
  Sofa,
  Briefcase,
  Scale,
  Dumbbell,
  Watch,
  Factory,
  Users,
  PawPrint,
  GraduationCap,
  Wrench,
  Sprout,
  Search,
  MapPin,
  Heart,
  Home,
  LayoutGrid,
  User,
  Menu,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [likedAds, setLikedAds] = useState([]);

  const toggleLike = (id, e) => {
    e.stopPropagation();
    if (likedAds.includes(id))
      setLikedAds(likedAds.filter((item) => item !== id));
    else setLikedAds([...likedAds, id]);
  };

  // جایگزینی ایموجی‌ها با آیکون‌های Lucide
  const categories = [
    {
      id: 1,
      name: "خودرو",
      icon: <Car size={28} />,
      subs: [
        "خرید و فروش خودرو",
        "لوازم یدکی",
        "موتورسیکلت",
        "خدمات و تعمیر خودرو",
      ],
    },
    {
      id: 2,
      name: "املاک",
      icon: <Building2 size={28} />,
      subs: ["فروش آپارتمان", "اجاره آپارتمان", "خانه و ویلا", "زمین و باغ"],
    },
    {
      id: 3,
      name: "دیجیتال",
      icon: <Smartphone size={28} />,
      subs: ["موبایل", "تبلت", "لپ‌تاپ", "کنسول و بازی"],
    },
    {
      id: 4,
      name: "خانه",
      icon: <Sofa size={28} />,
      subs: ["مبلمان", "یخچال و فریزر", "لوازم آشپزخانه", "دکوراسیون"],
    },
    {
      id: 5,
      name: "استخدام",
      icon: <Briefcase size={28} />,
      subs: ["جویای کار", "تمام‌وقت", "پاره‌وقت", "دورکاری"],
    },
    {
      id: 6,
      name: "حقوقی",
      icon: <Scale size={28} />,
      subs: ["مشاوره حقوقی", "تنظیم دادخواست", "وکالت"],
    },
    {
      id: 7,
      name: "ورزش",
      icon: <Dumbbell size={28} />,
      subs: ["لوازم ورزشی", "دوچرخه", "ساز و آلات موسیقی"],
    },
    {
      id: 8,
      name: "شخصی",
      icon: <Watch size={28} />,
      subs: ["پوشاک", "کیف و کفش", "ساعت و زیورآلات"],
    },
    {
      id: 9,
      name: "صنعتی",
      icon: <Factory size={28} />,
      subs: ["ماشین‌آلات", "ابزار صنعتی", "فروش عمده"],
    },
    {
      id: 10,
      name: "اجتماعی",
      icon: <Users size={28} />,
      subs: ["رویدادها", "دورهمی", "امور خیریه"],
    },
    {
      id: 11,
      name: "حیوانات",
      icon: <PawPrint size={28} />,
      subs: ["لوازم حیوانات", "دامپزشکی", "حیوانات خانگی"],
    },
    {
      id: 12,
      name: "آموزش",
      icon: <GraduationCap size={28} />,
      subs: ["معلم خصوصی", "زبان", "مهارت‌های فنی"],
    },
    {
      id: 13,
      name: "ابزار",
      icon: <Wrench size={28} />,
      subs: ["ابزار برقی", "ابزار دستی", "مصالح"],
    },
    {
      id: 14,
      name: "کشاورزی",
      icon: <Sprout size={28} />,
      subs: ["محصولات", "بذر و نهال", "ماشین‌آلات"],
    },
  ];

  // آگهی‌ها هم آیکون مدرن گرفتن
  const ads = [
    {
      id: 1,
      title: "پژو ۲۰۷ اتومات، کم‌کارکرد",
      price: "۸۹۰,۰۰۰,۰۰۰",
      icon: <Car size={48} />,
      location: "تهران",
    },
    {
      id: 2,
      title: "آپارتمان خوش‌نقشه، نورگیر",
      price: "۶,۸۰۰,۰۰۰,۰۰۰",
      icon: <Building2 size={48} />,
      location: "کرج",
    },
    {
      id: 3,
      title: "گوشی سامسونگ ۲۵۶ گیگ",
      price: "۲۴,۵۰۰,۰۰۰",
      icon: <Smartphone size={48} />,
      location: "اصفهان",
    },
    {
      id: 4,
      title: "مبل راحتی ۷ نفره",
      price: "۳۲,۰۰۰,۰۰۰",
      icon: <Sofa size={48} />,
      location: "تهران",
    },
  ];

  return (
    <div className="main-wrapper">
      {/* هدر */}
      <header className="header">
        <div className="header-right">
          <div className="logo">
            اسنپ همراه <span>سامانه جامع خدمات</span>
          </div>
        </div>
        <nav className="desktop-nav">
          <a href="#" className="active">
            بازار آگهی
          </a>
          <a href="#">بانک اصناف</a>
          <a href="#">خدمات</a>
          <a href="#">تماس با ما</a>
        </nav>
        <div className="header-left">
          <button className="btn-outline">ورود / ثبت‌نام</button>
          <button className="btn-primary">+ ثبت آگهی</button>
          <button className="btn-menu-mobile">
            <Menu size={24} />
          </button>
        </div>
      </header>

      <div className="app-container">
        {/* بنر */}
        <div className="banner-section">
          <div className="banner">
            <div className="banner-text">
              <h2>هر خدمتی نیاز داری،</h2>
              <h2>همین نزدیکی پیدا کن!</h2>
              <button>
                مشاهده خدمات{" "}
                <ArrowRight size={18} style={{ marginRight: "8px" }} />
              </button>
            </div>
            <div className="banner-icon">
              <Wrench size={200} />
            </div>
          </div>
        </div>
        {/* نوار جستجو */}
        <div className="search-section">
          <div className="search-bar">
            <div className="search-input-wrapper">
              <Search size={20} color="#94a3b8" />
              <input type="text" placeholder="جستجوی خدمت یا آگهی..." />
            </div>
            <div className="search-location">
              <MapPin size={18} color="#94a3b8" />
              <span>همه شهرها</span>
            </div>
            <button className="btn-search">جستجو</button>
          </div>
        </div>

        {/* دسته‌بندی‌ها */}
        <div className="categories-section">
          <div className="section-header">
            <h3>دسته‌بندی‌ها</h3>
          </div>
          <div className="categories-grid">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="category-item"
                onClick={() => setSelectedCategory(cat)}
              >
                <div className="category-icon">{cat.icon}</div>
                <span>{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* آگهی‌ها */}
        <div className="ads-section">
          <div className="section-header">
            <h3>آگهی‌های تازه</h3>
            <button>مشاهده همه</button>
          </div>
          <div className="ads-grid">
            {ads.map((ad) => (
              <div key={ad.id} className="ad-card fade-in">
                <div
                  className="ad-image-placeholder"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <span style={{ zIndex: 2, color: "#0f766e" }}>{ad.icon}</span>
                  <div className="image-shimmer"></div>
                  <button
                    onClick={(e) => toggleLike(ad.id, e)}
                    className={`like-btn ${likedAds.includes(ad.id) ? "liked" : ""}`}
                  >
                    <Heart
                      size={18}
                      fill={likedAds.includes(ad.id) ? "#ef4444" : "none"}
                      color={likedAds.includes(ad.id) ? "#ef4444" : "#64748b"}
                    />
                  </button>
                </div>
                <div className="ad-content">
                  <h4 className="ad-title">{ad.title}</h4>
                  <p className="ad-price">
                    {ad.price} <span>تومان</span>
                  </p>
                  <div className="ad-location">
                    <MapPin size={14} color="#94a3b8" />
                    <span>{ad.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* بخش چطور کار می‌کند */}
        <div className="how-it-works-wrapper">
          <div className="how-it-works-container">
            <div className="hiw-header">
              <h3>دقیقاً چطور کار می‌کند؟</h3>
              <p>در ۳ قدم ساده به خدمات مورد نیازتان برسید</p>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-icon-bg">
                  <Search size={28} color="#0f766e" />
                </div>
                <h4>جستجو کنید</h4>
                <p>دسته‌بندی یا خدمت مورد نظر خود را انتخاب کنید.</p>
              </div>
              <div className="step-connector"></div>
              <div className="step-card">
                <div className="step-icon-bg">
                  <Smartphone size={28} color="#0f766e" />
                </div>
                <h4>درخواست دهید</h4>
                <p>محدوده و جزئیات نیاز خود را بنویسید.</p>
              </div>
              <div className="step-connector"></div>
              <div className="step-card">
                <div className="step-icon-bg">
                  <Users size={28} color="#0f766e" />
                </div>
                <h4>متخصص را بیابید</h4>
                <p>متخصصان نزدیک به شما درخواست را پیگیری می‌کنند.</p>
              </div>
            </div>
          </div>
        </div>

        {/* فوتر */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-col">
              <h4>دسترسی سریع</h4>
              <a href="#">بازار آگهی</a>
              <a href="#">بانک اصناف</a>
              <a href="#">جستجوی خدمات</a>
            </div>
            <div className="footer-col">
              <h4>راهنمای کاربران</h4>
              <a href="#">راهنمای پیدا کردن خدمت</a>
              <a href="#">نکات ایمنی معامله</a>
            </div>
            <div className="footer-col brand-col">
              <div className="footer-logo">اسنپ همراه</div>
              <p>
                بازار آنلاین خرید، فروش و خدمات؛ بستری برای ارتباط راحت‌تر
                خریداران و فروشندگان.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© اسنپ همراه - تمامی حقوق محفوظ است</p>
          </div>
        </footer>
      </div>

      {/* منوی پایین (موبایل) */}
      <nav className="bottom-nav">
        <div className="nav-item active">
          <Home size={22} />
          <span>خانه</span>
        </div>
        <div className="nav-item">
          <LayoutGrid size={22} />
          <span>دسته‌ها</span>
        </div>
        <div className="nav-item">
          <Wrench size={22} />
          <span>خدمات</span>
        </div>
        <div className="nav-item">
          <User size={22} />
          <span>حساب من</span>
        </div>
      </nav>

      <button
        className="scroll-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUp size={24} />
      </button>

      {/* مودال */}
      {selectedCategory && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedCategory(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {selectedCategory.icon} {selectedCategory.name}
              </h3>
              <button
                className="close-btn"
                onClick={() => setSelectedCategory(null)}
              >
                ✕
              </button>
            </div>
            <p className="modal-subtitle">زیردسته موردنظرتان را انتخاب کنید:</p>
            <div className="modal-list">
              {selectedCategory.subs.map((sub, index) => (
                <div key={index} className="modal-list-item">
                  {sub}
                </div>
              ))}
            </div>
            <button className="btn-modal-action">
              مشاهده همه آگهی‌های {selectedCategory.name}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
