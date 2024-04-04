// src/RobotSimulator.js
class RobotSimulator {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.f = "NORTH";
    this.isOnTable = false;
  }

  place(x, y, f) {
    if (x >= 0 && x <= 4 && y >= 0 && y <= 4) {
      this.x = x;
      this.y = y;
      this.f = f;
      this.isOnTable = true;
    }
  }

  move() {
    if (!this.isOnTable) return;
    switch (this.f) {
      case "NORTH":
        if (this.y < 4) this.y++;
        break;
      case "SOUTH":
        if (this.y > 0) this.y--;
        break;
      case "EAST":
        if (this.x < 4) this.x++;
        break;
      case "WEST":
        if (this.x > 0) this.x--;
        break;
      default:
        break;
    }
  }

  left() {
    if (!this.isOnTable) return;
    const directions = ["NORTH", "WEST", "SOUTH", "EAST"];
    const index = directions.indexOf(this.f);
    this.f = directions[(index + 1) % directions.length];
  }

  right() {
    if (!this.isOnTable) return;
    const directions = ["NORTH", "EAST", "SOUTH", "WEST"];
    const index = directions.indexOf(this.f);
    this.f = directions[(index + 1) % directions.length];
  }

  report() {
    if (!this.isOnTable) return "The robot is not on the table.";
    return `${this.x},${this.y},${this.f}`;
  }
}

export default RobotSimulator;
