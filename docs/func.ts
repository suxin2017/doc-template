import { select } from "d3";

export function test(gui: dat.GUI, demoId: string) {
  gui
    .add({ name: "John" }, "name", ["John", "Jane", "Bob"])
    .onChange((value) => {
      select(demoId).select("button").text(value);
    });
  select(demoId).append("button").text("Click me!");
}