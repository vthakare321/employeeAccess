import type { EmptyStateProps } from "./EmptyState.types";

export const EmptyState = ({
  title,
  description,
  action,
}: EmptyStateProps) => {
  return (
    <div className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center">
      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>

      {description && (
        <p className="mt-2 text-gray-500">
          {description}
        </p>
      )}

      {action && (
        <div className="mt-4">
          {action}
        </div>
      )}
    </div>
  );
};