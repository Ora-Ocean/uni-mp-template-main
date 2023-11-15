declare type LoginResult = {
  id: number
  avatar: string
  account: string
  nickname?: string
  mobile: string
  token: string
}
declare type LoginParams = {
  code: StorageManager
}
/** 个人信息用户详情信息 */
declare type ProfileDetail = {
  /** 用户ID */
  id: number
  /** 头像  */
  avatar: string
  /** 账户名  */
  account: string
  /** 昵称 */
  nickname?: string
  /** 性别 */
  gender?: Gender
  /** 生日 */
  birthday?: string
  /** 省市区 */
  fullLocation?: string
  /** 职业 */
  profession?: string
  provinceCode?: string
  cityCode?: string
  countryCode?: string
}
/** 性别 */
declare type Gender = 1 | 0

declare type ProfileParams = Pick<ProfileDetail, 'nickname' | 'gender' | 'birthday' | 'profession'> & {
  /** 省份编码 */
  provinceCode?: string
  /** 城市编码 */
  cityCode?: string
  /** 区/县编码 */
  countyCode?: string
}
