import { useTheme } from "next-themes";
import { HiMiniSun, HiMiniMoon } from "react-icons/hi2";
import { Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";


export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [toolTipText, setToolTip] = useState('');

  useEffect(() => {
    getToolTipTxt();

  });

  const getToolTipTxt = () => {
    if (theme === 'light') {
      setToolTip('Change to dark');
    } else {
      setToolTip('Change to light');
    }
  }

  const updateTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div>
      <Tooltip className={theme === 'light' ? 'text-black' : 'text-white'} content={toolTipText}>
        <button onClick={() => updateTheme()}>
          {theme === 'light' ? <HiMiniMoon /> : <HiMiniSun />}
        </button>
      </Tooltip>
    </div>
  )
};