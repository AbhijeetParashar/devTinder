const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked");
  const token = "abcdef";
  const isAdminAuthorized = token === "abcdef";
  if (!isAdminAuthorized) {
    res.staus(401).send("Unautorized request");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
};
