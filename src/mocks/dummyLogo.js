export default "dummyLogo.png"

//we need this dummy png because the header.test.js is testing our HeaderComponent and that component has the logo in it
//the test.js file doesn't understand png, import,jsx so we have installed some libraries for import and jsx.
//similarly we need this dummy logo for the test.js file to read png.
//we will add a configuration in jest.config.js file for this inside ModuleNameMapper.