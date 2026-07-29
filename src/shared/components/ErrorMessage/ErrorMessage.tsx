import type { ErrorMessageProps } from "./ErrorMessage.types";

export const ErrorMessage = ({
  title = "Something went wrong",
  message,
  action,
}: ErrorMessageProps) => {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4">
      <h3 className="text-lg font-semibold text-red-700">
        {title}
      </h3>

      <p className="mt-2 text-sm text-red-600">
        {message}
      </p>

      {action && (
        <div className="mt-4">
          {action}
        </div>
      )}
    </div>
  );
};