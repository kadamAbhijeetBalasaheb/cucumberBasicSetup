exports.config = {
    // set to "custom" instead of cucumber.

    framework: 'custom',

    // framework: 'jasmine',
 
   
    //path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
   
    // require feature files
    specs: [
      './features/*.feature' 
],
    cucumberOpts: {
    
      // require step definitions
      require: [
        './abkTimepassFolder/features/abkStepDef.js' // accepts a glob
      ]
    }
  };