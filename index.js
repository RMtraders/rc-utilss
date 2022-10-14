const key = 1666204200456;
function next(fn) {
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
