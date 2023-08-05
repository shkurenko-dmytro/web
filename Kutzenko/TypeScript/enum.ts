enum EnumRoles {
  ADMIN = 0,
  GUEST = 1,
  USER = 2,
}

const enum EnumColors {
  black,
  pink,
  green,
}

interface IUser {
  role: EnumRoles
  color: EnumColors
}

const user: IUser = {
  role: EnumRoles.ADMIN,
  color: EnumColors.black,
}

console.log(EnumRoles[EnumRoles.ADMIN])