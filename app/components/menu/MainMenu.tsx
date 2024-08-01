'use client'
import MenuItem from './MenuItem'
const menu = [
  {
    routeTo: '/auth/login',
    text: 'Login'
  },
  {
    routeTo: '/auth/singup',
    text: 'Register'
  },
  {
    routeTo: '/game/new',
    text: 'Life Counter'
  },
  {
    routeTo: '/game/report',
    text: 'Report Game'
  }
]
export default function MainMenu() {
	return(
		<div className="">
      {menu.map((item,index) => (
        <MenuItem routeTo={item.routeTo} text={item.text}/>
      ))}
    </div>
	)
}
