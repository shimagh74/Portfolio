'use client'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet'
import { useState } from 'react'

export const menu = [
	{
		name: 'services',
		href: 'services'
	},
	{
		name: 'work',
		href: 'work'
	},
	{
		name: 'FAQ',
		href: 'FAQ'
	},
	{
		name: 'Contact',
		href: 'Contact'
	}
]

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleLinkClick = () => {
		setIsOpen(false)
	}

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger className='flex items-center'>
				<Menu className='size-8 text-blue' />
			</SheetTrigger>
			<SheetContent>
				<div className='mb-20 mt-10 flex items-center justify-center'>
					<Link
						to='home'
						spy={true}
						smooth={true}
						onClick={handleLinkClick}
						className='cursor-pointer'
					>
						<Image
							src='/logo.png'
							height={60.53}
							width={47.35}
							alt='logo'
						/>
					</Link>
				</div>
				<nav className='mt-8 flex flex-col items-center justify-center gap-8 text-lightedYellow'>
					{menu.map((item, index) => (
						<Link
							to={item.href}
							key={index}
							spy={true}
							smooth={true}
							offset={-50}
							onClick={handleLinkClick}
							className='text-lg font-medium capitalize cursor-pointer'
						>
							<span className='pb-2 transition-all hover:border-b-2 hover:border-blue hover:text-blue'>
								{item.name}
							</span>
						</Link>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	)
}

export default MobileNav