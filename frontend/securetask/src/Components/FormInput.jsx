function InputField({
  type,
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        p-3
        border
        border-gray-300
        rounded-xl
        mb-4
        outline-none
        focus:border-slate-900
        focus:ring-2
        focus:ring-slate-300
        transition
      "
    />
  );
}
export default InputField