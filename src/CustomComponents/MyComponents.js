export const MyInput = ({ id, type, value, onChange, placeholder }) => {
  return (
    <input
      className=" w-96 bg-white appearance-none border-2 border-gray-200 rounded py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-pink"
      placeholder={placeholder}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export const MyButton = ({ children, onClick, fullWidth }) => {
  return (
    <button
      className={`
      ${fullWidth ? "w-full" : " w - auto"}
      flex-shrink-0 
       bg-pink hover:bg-dullPink
       border-pink 
       hover:border-dullPink text-sm border-4
      text-center text-white font-medium py-1 px-2 rounded`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const MyIconButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-pink border border-pink hover:bg-pink hover:text-white focus:ring-1 focus:outline-none focus:ring-pink font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-pink dark:text-pink dark:hover:text-white dark:focus:ring-dullPink dark:hover:bg-pink"
    >
      {children}
    </button>
  );
};
