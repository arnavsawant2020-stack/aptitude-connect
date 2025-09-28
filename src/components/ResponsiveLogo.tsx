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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return light logo as default during SSR/initial render
    return <img src={logoLight} alt={alt} className={className} />;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const logoSrc = currentTheme === 'dark' ? logoDark : logoLight;

  return (
    <img 
      src={logoSrc} 
      alt={alt} 
      className={`${className} transition-opacity duration-300`}
    />
  );
};