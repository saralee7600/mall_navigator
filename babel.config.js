module.exports = function (api) {
  api.cache(true);

  return {
    // איחוד ה-Presets בצורה הסטנדרטית של NativeWind
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel'
    ],
    plugins: [
      // Reanimated 4 re-exports react-native-worklets/plugin — do not add both
      'react-native-reanimated/plugin',
    ],
  };
};