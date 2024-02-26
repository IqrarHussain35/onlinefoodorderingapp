export const MyInput = ({ id, type, value, onChange, placeholder }) => {
  return (
    <input
      className=" h-9 w-96 appearance-none rounded border-2 border-gray-200 bg-white px-4 py-2 leading-tight text-black focus:border-pink focus:bg-white focus:outline-none"
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
      ${fullWidth ? "text-lg" : " text-base"}
      flex-shrink-0 
        rounded
       border-4 
       border-pink
       bg-pink px-2 py-1
      text-center text-sm font-medium text-white 
        hover:border-dullPink hover:bg-dullPink`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export const OutlinedButton = ({ children, onClick, fullWidth }) => {
  return (
    <button
      className={`
      ${fullWidth ? "w-full" : " w - auto"}
      ${fullWidth ? "text-lg" : " text-base"}
      flex-shrink-0 
       rounded border-2
       border-pink  bg-white px-2
       py-1 text-center text-sm font-medium text-pink hover:bg-lightPink`}
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
      className="me-2 inline-flex items-center rounded-lg border border-pink p-2.5 text-center text-sm font-medium text-pink hover:bg-pink hover:text-white focus:outline-none focus:ring-1 focus:ring-pink dark:border-pink dark:text-pink dark:hover:bg-pink dark:hover:text-white dark:focus:ring-dullPink"
    >
      {children}
    </button>
  );
};
