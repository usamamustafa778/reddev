import Typical from "react-typical";

const TypingText = () => {
  return (
    <Typical
      steps={["Hello", 1000, "Hello, World!", 1000, "Welcome to Next.js", 1000]}
      loop={Infinity}
      wrapper="h1"
    />
  );
};

export default TypingText;
