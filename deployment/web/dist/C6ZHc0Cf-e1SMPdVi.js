import { getSession } from './index-BCA8X3MP.js';

let rightToLeft;
function isRightToLeft() {
  if (void 0 === rightToLeft) {
    const session = getSession();
    rightToLeft = "rtl" === session.getConfig("uiconfig.direction");
  }
  return rightToLeft;
}

export { isRightToLeft };
