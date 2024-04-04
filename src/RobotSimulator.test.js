// src/RobotSimulator.test.js
import RobotSimulator from "./RobotSimulator";

describe("RobotSimulator", () => {
  let simulator;

  beforeEach(() => {
    simulator = new RobotSimulator();
  });

  test("places the robot correctly on the table", () => {
    simulator.place(0, 0, "NORTH");
    expect(simulator.report()).toBe("0,0,NORTH");
  });

  test("ignores MOVE command if robot would fall off the table", () => {
    simulator.place(0, 0, "SOUTH");
    simulator.move();
    expect(simulator.report()).toBe("0,0,SOUTH");
  });

  test("executes a sequence of commands correctly", () => {
    simulator.place(1, 2, "EAST");
    simulator.move();
    simulator.move();
    simulator.left();
    simulator.move();
    expect(simulator.report()).toBe("3,3,NORTH");
  });

  test("ignores commands before a valid PLACE command", () => {
    simulator.move();
    simulator.left();
    simulator.right();
    simulator.place(0, 0, "NORTH");
    expect(simulator.report()).toBe("0,0,NORTH");
  });

  test("changes direction correctly with LEFT command", () => {
    simulator.place(0, 0, "NORTH");
    simulator.left();
    expect(simulator.report()).toBe("0,0,WEST");
  });

  test("changes direction correctly with RIGHT command", () => {
    simulator.place(0, 0, "NORTH");
    simulator.right();
    expect(simulator.report()).toBe("0,0,EAST");
  });
});
