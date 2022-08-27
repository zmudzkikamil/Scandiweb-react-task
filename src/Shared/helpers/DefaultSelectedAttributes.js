export const DefaultSelectedAttributes = (attributes) => {
  return attributes.length > 0
    ? attributes
        .map((attribute) => ({
          [attribute.id]:
            attribute.id === 'Color' ? attribute.items[0].value : attribute.items[0].id
        }))
        .reduce((acc, curr) => ({ ...acc, ...curr }), {})
    : {};
};
