export const setSelected = (array, selectedId, isSelected) => {
  return array.map(entry =>
    Object.assign(
      {},
      entry,
      entry.id === selectedId
        ? {
            selected: isSelected
          }
        : {}
    )
  );
};

export const getSelected = array => {
  return array.find(entry => entry.selected);
};
