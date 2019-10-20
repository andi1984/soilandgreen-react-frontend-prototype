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
  return array.filter(entry => !!entry.selected);
};

export const hasSelected = array => {
  return array.some(entry => !!entry.selected);
};
