module.exports = function (api) {
  api.cache(true);

  return {
    // איחוד ה-Presets בצורה הסטנדרטית של NativeWind
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel'
    ],
    plugins: [
      'react-native-worklets/plugin',
      // Reanimated must be listed last among plugins
      'react-native-reanimated/plugin',
    ],
  };
};