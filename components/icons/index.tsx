import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, ...props }) => {
  const iconProps = {
    width: size,
    height: size,
    ...props,
  };

  switch (name) {
    case 'sun':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}>
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.106a.75.75 0 010 1.06l-1.591 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 011.06 0zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM17.803 17.803a.75.75 0 01-1.06 0l-1.59-1.59a.75.75 0 011.06-1.06l1.59 1.59c.292.292.292.767 0 1.06zM12 21a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0v2.25A.75.75 0 0112 21zM5.197 17.803a.75.75 0 010-1.06l1.59-1.59a.75.75 0 111.06 1.06l-1.59 1.59a.75.75 0 01-1.06 0zM3 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3.75A.75.75 0 013 12zM6.106 5.106a.75.75 0 011.06 0l1.59 1.59a.75.75 0 01-1.06 1.06L6.106 6.167a.75.75 0 010-1.06z" />
        </svg>
      );
    case 'moon':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}>
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-3.833 2.067-7.17 5.168-9.002a.75.75 0 01.818.162z" clipRule="evenodd" />
        </svg>
      );
    case 'menu':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      );
    case 'close':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    case 'github':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...iconProps}><path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8a8 8 0 0 0-8-8z"></path></svg>
      );
    case 'link':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}><path fillRule="evenodd" d="M15.75 2.25a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 11.53a.75.75 0 01-1.06-1.06L13.69 3.75h-2.69a.75.75 0 010-1.5h4.5z" clipRule="evenodd" /><path d="M4.5 6.75A.75.75 0 015.25 6h5.25a.75.75 0 010 1.5H5.25v10.5h10.5V12a.75.75 0 011.5 0v5.25a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25V7.5A2.25 2.25 0 014.5 6.75z" /></svg>
      );
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
      );
    case 'twitter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
      );
    case 'email':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></svg>
      );
    case 'checkmark':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...iconProps}>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
          </svg>
        );
    case 'university':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}>
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 8.5L6.21 8 12 5l5.79 3L12 11.5z" /><path d="M5 13.18v4.13L12 21l7-3.69v-4.13L12 17l-7-3.82z" />
          </svg>
        );
    case 'briefcase':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}>
            <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 17H4V8h16v13z" />
          </svg>
        );
    case 'html5': return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}><path d="M1.6 2h20.8l-1.8 20L12 24l-8.6-2L1.6 2zm16.5 6H7.7l.3 3.3h9.8l-.6 6.7-4.1 1.4-4.1-1.4-.2-3H5.3l.5 5.5 6.2 2.1 6.2-2.1 1-11.2z"/></svg>;
    case 'css3': return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}><path d="M1.6 2h20.8l-1.8 20L12 24l-8.6-2L1.6 2zM17 7H7.7l.3 3.3H17l-.6 6.7-4.4 1.4v-3.4h3.3l.3-3.3H12V7h5z"/></svg>;
    case 'javascript': return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}><path d="M1.6 2h20.8v20H1.6V2zm16.5 14.3h-2.2l-1.1-2.2h-3.3v2.2H9.3V7.7h5.5c1.4 0 2.5.3 3.3 1s1.2 1.5 1.2 2.6c0 1-.3 1.8-1 2.5s-1.5 1-2.6 1h-2.2v2.2h3.3l1.1 2.2zm-5.5-3.3h2.2c.8 0 1.4-.1 1.7-.4s.5-.6.5-1.1c0-.4-.1-.8-.4-1s-.7-.4-1.3-.4H12.6v3z"/></svg>;
    case 'typescript': return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}><path d="M1.6 2h20.8v20H1.6V2zm10.9 14.3H7.1V7.7h8.6v2.2H9.3v2.2h3.3v2.2H9.3v3.3h5.5v2.2h-2.2zM19.1 12c0-1.8-1.5-3.2-3.2-3.2-1 0-2 .5-2.5 1.3l1.3 1.3c.1-.3.4-.5.8-.5.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1c-.4 0-.7-.2-.8-.5l-1.3 1.3c.5.8 1.5 1.3 2.5 1.3 1.8 0 3.2-1.4 3.2-3.2z"/></svg>;
    case 'react': return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}><circle cx="12" cy="12" r="2.3" /><ellipse cx="12" cy="12" rx="11" ry="4.3" transform="rotate(90 12 12)" /><ellipse cx="12" cy="12" rx="11" ry="4.3" transform="rotate(30 12 12)" /><ellipse cx="12" cy="12" rx="11" ry="4.3" transform="rotate(-30 12 12)" /></svg>;
    case 'angular': return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}><path d="M12 2L1 5.5v13L12 22l11-3.5v-13L12 2zm0 2.5L19.5 8 12 19.5 4.5 8 12 4.5zM12 10l-4 4 4 4 4-4-4-4z"/></svg>;
    case 'tailwind': return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-4-7.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm8 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"/></svg>;
    case 'framer': return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}><path d="M4 2h16v10H4V2zm0 10h8v10l8-10v10H4v-10z"/></svg>;
    case 'jest': return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.5 15l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19.5 8l-9 9z"/></svg>;
    case 'git': return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...iconProps}><path d="M21.7 11.3c-.4-.4-1-.6-1.5-.6h-2.2V9c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v1.7H11V7c0-1.1-.9-2-2-2s-2 .9-2 2v3.7H4c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h3.7v2c0 1.1.9 2 2 2s2-.9 2-2v-3.7h2.8V16c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2.2h2.2c.5 0 1.1-.2 1.5-.6s.4-1 .2-1.5z"/></svg>;
    default:
      return null;
  }
};