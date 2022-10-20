const CustomButton = ({ text, type = "button", className }) => {
  return (
    <div className={className}>
      <button className={`border py-3 px-8 bg-blue-500 text-white rounded-md ${className}`} type={type}>
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
