export default function Container({ children, className }) {
  return (
    <div className={`w-11/12 lg:w-9/12 container max-w-screen-xl ${className}`}>
      {children}
    </div>
  );
}
