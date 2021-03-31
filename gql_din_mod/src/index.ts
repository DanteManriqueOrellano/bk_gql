@IControlPanel.register
class BasicControlPanel {
  doAThing() {
    console.log("BasicControlPanel did something")
  }
}

@IControlPanel.register
class AdvancedControlPanel {
  doAThing() {
        console.log("AdvancedControlPanel did something")
  }
}
@IControlPanel.register
class joder {
  doAThing() {
        console.log("AdvancedControlPanel did something")
  }
}

var controlPanels = IControlPanel.GetImplementations();

for (var x = 0; x < controlPanels.length; x++) {
  console.log(controlPanels[x].name + ": ");
  const panel = new controlPanels[x]();
  
  console.log(panel)
  panel.doAThing();
  console.log("\n\n");
}