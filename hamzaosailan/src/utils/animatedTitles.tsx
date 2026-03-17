import { useEffect, useState } from "react";

const roles = [
  "Software Developer",
  "Full Stack Developer",
  "Test Automation Engineer"
];

const AnimatedTitles = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRole];
      setText(prev =>
        deleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!deleting && text === fullText) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && text === "") {
        setDeleting(false);
        setCurrentRole(prev => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, deleting ? 100 : 150);
    return () => clearTimeout(timer);
  }, [text, deleting]);

  return (
    <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
      {text}
      <span className="inline-block w-0.5 h-7 md:h-14 bg-teal-400 ml-1 animate-pulse"></span>
    </h1>
  );
};

export default AnimatedTitles;