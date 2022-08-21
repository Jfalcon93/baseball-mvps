export const Tooltip = ({ message, league, children }) => {
  let color;
  if (league === "NL") {
    color =
      "relative z-10 p-1.5 text-xs leading-none text-white whitespace-nowrap bg-red-500 shadow-lg rounded-md";
  } else {
    color =
      "relative z-10 p-1.5 text-xs leading-none text-white whitespace-nowrap bg-blue-500 shadow-lg rounded-md";
  }
  return (
    <div className="relative flex flex-col group">
      {children}
      <div className="absolute bottom-0 flex flex-row hidden mb-6 group-hover:flex">
        <span className={color}>{message}</span>
      </div>
    </div>
  );
};
