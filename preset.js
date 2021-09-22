function config(entry = []) {
  return [
    ...entry,
    require.resolve("./dist/esm/preset/addDecorator"),
    // require.resolve("./dist/esm/preset/addParameter"),
  ];
}

function managerEntries(entry = [], options) {
  return [...entry, require.resolve("./dist/esm/preset/manager")];
}

module.exports = {
  managerEntries,
  config,
};
