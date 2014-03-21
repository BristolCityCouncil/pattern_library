##Updating current SCSS

The SCSS on the pattern library is currently found in 2 files, one file (master.scss) is a replica of the current BCC front-end build, while the other (wrapper.scss) is a bespoke file for styling up the pattern library wrapper.

To update master.scss, get the latest version of the master.css from stage.bcc.cxdev.co.uk and replace the contents of the scss file with these.

To update the wrapper.scss file, be sure that the styles don't unintentionally interfere with component styles by namespacing them appropriately. This file contains styles for prism, the plugin to display code on the front-end. It's worth noting here that while code should aim to reflect best practise, browser support isn't essential and hacks are viable if tested as this is just documentation
