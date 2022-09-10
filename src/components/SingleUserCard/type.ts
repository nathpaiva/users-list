export type TSingleUserCard = Partial<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  userData: TUserData
  cardStyle?: 'full' | 'short'
  userSelected?: boolean
  as?: 'button'
}
