function Logo() {
  return (
    <a className="cursor-pointer flex items-center transition-opacity  hover:opacity-[0.8] shadow-md w-[36px] h-[36px]">
      <div className="flex flex-1 justify-center items-center bg-gray-800 rounded-md">
        <span className="logo font-semibold ">K</span>
      </div>
    </a>
  );
}

export default Logo;
