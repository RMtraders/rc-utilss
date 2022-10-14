export getRoutes(routes, user) {
  return routes?.filter((route) => {
    if (route?.allows) {
      return route.allows.includes(user?.role || "ADMIN");
    }
    return true;
  });
}
