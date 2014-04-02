#Updating current JS

The JS on the pattern library is currently split in to 2 areas, one which handles the JS from the main BCC front-end build, and the other which supplies necessary JS for the pattern library wrapper.

bcc-cpp.js is the handling the JS from the main front-end build which is updated by taking the latest version from stage.bcc.cxdev.co.uk and replacing the contents of this file.

app.js handles the custom written JS for the pattern library wrapper, and while code should aim to reflect best practise, browser support isn't essential and hacks are viable if tested as this is just documentation.

Along with these 2 files, there are a set of libraries used (modernizr, prism.js, and respond.js) which ensure cross browser support and the styling for displaying code on the front-end of the wrapper. These shouldn't need editing.
