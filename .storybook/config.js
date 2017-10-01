import { configure, setAddon } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import infoAddon from "@storybook/addon-info";

setOptions({
  name: "CRA Kitchen Sink",
  url:
    "https://github.com/storybooks/storybook/tree/master/examples/cra-kitchen-sink",
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
  hierarchySeparator: /\/|\./
});

setAddon(infoAddon);

const req = require.context("../src", true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
