type ObjectValue = Record<string, unknown>;

const convertValue = (value: unknown) => {
  if (value instanceof File || typeof value === 'string') {
    return value;
  }

  return JSON.stringify(value);
};

export const mapToFormData = (obj: ObjectValue): FormData => {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    if (value !== null) {
      formData.append(key, convertValue(value));
    }
  });

  return formData;
};
