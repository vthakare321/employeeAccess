export const parseUserId = (
  value: string | undefined,
): number | null => {
  if (!value) {
    return null;
  }

  const userId = Number(value);

  if (
    !Number.isInteger(userId) ||
    userId <= 0
  ) {
    return null;
  }

  return userId;
};