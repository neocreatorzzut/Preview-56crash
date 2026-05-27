import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "573128077046";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const WhatsAppButton = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowBubble(true), 1500);
    const fadeTimer = setTimeout(() => setFadingOut(true), 8500);
    const hideTimer = setTimeout(() => {
      setShowBubble(false);
      setFadingOut(false);
    }, 9100);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Message Bubble */}
      {showBubble && (
        <div
          className={`max-w-[220px] rounded-2xl rounded-br-sm px-4 py-3 text-xs leading-relaxed text-foreground transition-opacity duration-500 ${
            fadingOut ? "opacity-0" : "opacity-100"
          }`}
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          Háblanos si necesitas ayuda, información o adquirir un plan
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
        style={{
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.backdropFilter = "blur(16px)";
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.backdropFilter = "blur(10px)";
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
        }}
      >
        {/* WhatsApp SVG */}
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.004 2.002a13.894 13.894 0 0 0-11.81 21.376L2 30l6.903-2.07A13.9 13.9 0 1 0 16.004 2.002Zm0 25.5a11.58 11.58 0 0 1-6.29-1.843l-.45-.27-4.1 1.23 1.1-4.17-.3-.47A11.6 11.6 0 1 1 16.004 27.5Z"
            fill="#25D366"
          />
          <path
            d="M23.79 19.59c-.42-.21-2.48-1.22-2.87-1.36-.38-.14-.66-.21-.94.21-.28.42-1.09 1.36-1.33 1.64-.25.28-.49.32-.91.11-.42-.21-1.77-.65-3.37-2.08-1.25-1.11-2.09-2.49-2.33-2.91-.25-.42-.03-.65.18-.86.19-.19.42-.49.63-.74.21-.25.28-.42.42-.7.14-.28.07-.53-.04-.74-.1-.21-.93-2.24-1.27-3.07-.34-.81-.68-.7-.94-.71h-.8c-.28 0-.73.1-1.11.53-.38.42-1.46 1.43-1.46 3.48s1.5 4.04 1.7 4.32c.21.28 2.95 4.5 7.13 6.31 1 .43 1.78.69 2.38.88.1.03.19.06.29.09.81.24 1.55.21 2.13.13.65-.1 2-.82 2.28-1.6.28-.79.28-1.47.2-1.61-.09-.14-.37-.25-.79-.46Z"
            fill="#25D366"
          />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
