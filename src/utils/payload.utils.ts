type ObjectValue = Record<string, unknown>;

const convertFormDataValue = (value: unknown): File | string => {
  if (value instanceof File || typeof value === "string") return value;
  return JSON.stringify(value);
};

export const mapToFormData = (obj: ObjectValue): FormData => {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    if (value !== null) {
      formData.append(key, convertFormDataValue(value));
    }
  });

  return formData;
};
