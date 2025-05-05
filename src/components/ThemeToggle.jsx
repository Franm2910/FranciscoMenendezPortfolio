import React, { useEffect, useState } from 'react';
import {Sun, Moon} from 'lucide-react';
import { cn } from '../lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.add('dark');
            setIsDarkMode(false);
        }
    }, []);
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }
    
    return (<button onClick={toggleTheme} className={cn('fixed max-sm:hidden top-3.5 right-2 z-50 p-2 rounded-full transition-colors duration-300',
        'focus:outlin-hidden'
    )}> 
        {isDarkMode ?
         <Sun className='h-6 w-6 text-yellow-300'/>
          : 
         <Moon className='h-6 w-6 text-blue-900' />} 
        </button>)
}