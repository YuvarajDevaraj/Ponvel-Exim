import { useState, useEffect, useRef } from "react";
import "../../styles/Testimonials.css";
import imgJames from "../../assets/James.png";
import imgAisha from "../../assets/Aisha.png";
import imgPeter from "../../assets/Peter.png";

export const testimonials = [
  {
    category: "(Confectionery Products)",
    text: `“Ponvel Exim delivers top-quality biscuits and lollipops that our market loves. The packaging is attractive and shelf-ready. Very satisfied with their consistency and support.”`,
    name: "Mr. James K.",
    country: "Nigeria",
    img: imgJames,
  },
  {
    category: "(Home & Personal Care Products)",
    text: `“Their soaps and surface cleaners are of international quality. The formulations are gentle yet effective, and perfect for our retail chain. Highly recommended for private labeling.”`,
    name: "Mrs. Aisha M.",
    country: "United Arab Emirates",
    img: imgAisha,
  },
  {
    category: "(Coir Products)",
    text: `“We’ve been importing coir mats and ropes from Ponvel Exim for over a year. The product quality, durability, and natural finish are excellent. They never miss a shipping schedule.”`,
    name: "Mr. Peter O.",
    country: "Kenya",
    img: imgPeter,
  },
  {
    category: "(Textile Products)",
    text: `“We ordered aprons, towels, and cushion covers for our brand. The stitching and prints are premium, and the customization process was smooth. Our customers love it!”`,
    name: "Ms. Lillian R.",
    country: "South Africa",
    img: imgAisha,
  },
  {
    category: "(Mixed Product Range)",
    text: `“Ponvel Exim is a reliable partner. We source both confectionery and cleaning products from them. Their service is responsive, and they always accommodate our packaging needs.”`,
    name: "Mr. Hamza F.",
    country: "Saudi Arabia",
    img: imgPeter,
  },
  {
    category: "(Biscuits & Chocolates)",
    text: `“Their cookies and chocolates are delicious, hygienically packed, and affordable. Perfect for both local markets and supermarkets. Great communication throughout the process.”`,
    name: "Ms. Grace N.",
    country: "Ghana",
    img: imgAisha,
  },
];

const CARDS_TO_SHOW = 3;

const TestimonialSlider = () => {
  const [startIdx, setStartIdx] = useState(0);
  const sliderRef = useRef(null);
  const autoplayRef = useRef();
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;
  const canSlide = total > CARDS_TO_SHOW;

  const getVisibleTestimonials = () => {
    let visible = [];
    for (let i = 0; i < CARDS_TO_SHOW; i++) {
      visible.push(testimonials[(startIdx + i) % total]);
    }
    return visible;
  };

  const numPages = Math.ceil(total / CARDS_TO_SHOW);
  const currentPage = Math.floor(startIdx / CARDS_TO_SHOW);

  useEffect(() => {
    if (!canSlide || isPaused) return;
    autoplayRef.current = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(autoplayRef.current);
  }, [canSlide, isPaused, total]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="testimonial-slider"
      ref={sliderRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="testimonial-cards">
        {getVisibleTestimonials().map((t, idx) => (
          <div>
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-category">{t.category}</div>
              <div className="testimonial-text">{t.text}</div>
            </div>
            <div className="testimonial-user">
              <img src={t.img} alt={t.name} className="testimonial-avatar" />
              <div>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-country">{t.country}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {canSlide && (
        <div className="testimonial-dots">
          {Array.from({ length: numPages }).map((_, idx) => (
            <span
              key={idx}
              className={`dot${idx === currentPage ? " active" : ""}`}
              onClick={() => setStartIdx(idx * CARDS_TO_SHOW)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialSlider;
