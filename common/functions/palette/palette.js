import Fn from '../fn.js';

export default new Fn({
  name: 'palette',
  aliases: [],
  type: 'palette',
  help: 'Get a color palette',
  context: {},
  args: {
    _: {
      multi: true,
      types: ['string'],
      help: 'Palette colors, rgba, hex, or HTML color string',
    },
    gradient: {
      types: ['boolean', 'null'],
      default: false,
      help: 'Should we prefer to make a gradient where supported and useful?',
    },
  },
  fn: (context, args) => {
    return {
      type: 'palette',
      colors: args._,
      gradient: args.gradient,
    };
  },
});
