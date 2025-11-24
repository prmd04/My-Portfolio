import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds, offset = 120) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      let current = sectionIds[0];

      for (let id of sectionIds) {
        const sec = document.getElementById(id);
        if (!sec) continue;

        const rect = sec.getBoundingClientRect();

        if (rect.top - offset <= 0) {
          current = id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return active;
}