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

const userAuth = (req, res, next) => {
  console.log("User auth is getting checked");
  const token = "xyz";
  const isUserAuthorized = token === "xyz";
  if (!isUserAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
