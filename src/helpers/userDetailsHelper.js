export function userDetails() {
  // return authorization header with jwt token
  const user = {};
  user.isAdmin = localStorage.getItem("isAdmin") === "true" ? true : false;
  user.id = localStorage.getItem("userId");
  user.pilotProfileId = localStorage.getItem("pilotProfileId");
  user.individualOperatorProfileId = localStorage.getItem(
    "individualOperatorProfileId"
  );
  user.organizationOperatorProfileId = localStorage.getItem(
    "organizationOperatorProfileId"
  );
  user.manufacturerProfileId = localStorage.getItem("manufacturerProfileId");
  user.isAtcAdmin =
    localStorage.getItem("isAtcAdmin") === "true" ? true : false;
  user.isAfmluAdmin =
    localStorage.getItem("isAfmluAdmin") === "true" ? true : false;
  return user;
}
