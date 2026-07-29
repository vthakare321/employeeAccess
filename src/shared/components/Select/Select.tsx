import type { SelectProps } from "./Select.types";

export const Select = ({
  label,
  error,
  required = false,
  options,
  className = "",
  ...props
}: SelectProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
           {required && (
      <span className="ml-1 text-red-500">*</span>
    )}
        </label>
      )}

      <select
        className={`rounded-md border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <span className="text-sm text-red-600">
          {error}
        </span>
      )}
    </div>
  );
};