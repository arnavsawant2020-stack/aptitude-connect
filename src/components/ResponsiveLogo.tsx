import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import logoLight from "@/assets/internmatch-logo-light.png";
import logoDark from "@/assets/internmatch-logo-dark.png";

interface ResponsiveLogoProps {
  className?: string;
  alt?: string;
}

export const ResponsiveLogo = ({ className = "w-12 h-12 object-contain", alt = "InternMatch AI Logo" }: ResponsiveLogoProps) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 300);
      return () => clearTimeout(timer);
    }
  }, [theme, systemTheme, mounted]);

  if (!mounted) {
    // Return light logo as default during SSR/initial render
    return <img src={logoLight} alt={alt} className={className} />;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const logoSrc = currentTheme === 'dark' ? logoDark : logoLight;

  return (
    <div className="relative">
      <img 
        src={logoSrc} 
        alt={alt} 
        className={`${className} transition-all duration-500 ease-in-out ${
          isTransitioning ? 'animate-fade-in' : ''
        }`}
        style={{
          filter: isTransitioning ? 'brightness(1.1)' : 'brightness(1)',
          transform: isTransitioning ? 'scale(1.05)' : 'scale(1)'
        }}
      />
    </div>
  );
};