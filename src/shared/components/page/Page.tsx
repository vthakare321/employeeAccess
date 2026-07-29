import type { PageProps } from "./Page.types";

export const Page = ({
  title,
  description,
  actions,
  children,
  className = "",
}: PageProps) => {
  return (
    <section className={`space-y-6 ${className}`}>
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {title}
          </h1>

          {description && (
            <p className="mt-1 text-sm text-gray-600">
              {description}
            </p>
          )}
        </div>

        {actions && (
          <div className="flex items-center gap-2">
            {actions}
          </div>
        )}
      </header>

      <main>{children}</main>
    </section>
  );
};