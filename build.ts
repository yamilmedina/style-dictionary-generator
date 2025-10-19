import StyleDictionary from 'style-dictionary';
import { globSync } from 'glob';
import pxToDpTransformer from './src/android/transfomers/pxToDpTransformer.js';
import pxToSpTransformer from './src/android/transfomers/pxToSpTransformer.js';

// Find all token files matching the pattern
const tokenFiles = globSync('tokens/**/*.json');

// Register the custom transformers BEFORE creating the StyleDictionary instance
// Note: the tokens should be defined properly to avoid these px to X conversions. ´em´ unit usage is preferred.
StyleDictionary.registerTransform(pxToDpTransformer);
StyleDictionary.registerTransform(pxToSpTransformer);

// Configure Style Dictionary instance using the predefined compose/object format
const styleDictionary = new StyleDictionary({
  source: tokenFiles,
  platforms: {
    compose: {
      transforms: [
        'attribute/cti',
        'name/camel',
        'android/pxToDp',
        'android/pxToSp',
        'size/compose/sp',
        'color/composeColor'],
      buildPath: 'dist/assets/android/',
      files: [
        {
          destination: 'StyleTokens.kt',
          format: 'compose/object',
          options: {
            className: 'StyleTokens',
            packageName: 'com.wire.design.tokens'
          }
        }
      ]
    }
  }
});

console.log(`Found ${tokenFiles.length} token files`);

// Build all platforms
await styleDictionary.buildAllPlatforms();
console.log('Design assets build completed!');
