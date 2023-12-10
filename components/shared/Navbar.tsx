import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignOutButton, OrganizationSwitcher } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export default function Navbar() {
    return (
        <nav className="topbar">
            {/*Logo*/}
            <Link href='/' className='flex items-center gap-4'>
                <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
                <p className='text-heading3-bold text-light-1 max-xs:hidden'>Threads</p>
            </Link>

            <div className='flex items-center gap-1'>
                {/*Logout*/}
                <div className='block md:hidden'>
                    <SignedIn>
                        <SignOutButton>
                            <div className='flex cursor-pointer'>
                                <Image src="/assets/logout.svg" alt='logout' width={24} height={24} />
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>

                {/*Organiztion switcher*/}
                <OrganizationSwitcher
                    appearance={{
                        baseTheme: dark,
                        elements: {
                            organizationSwitcherTrigger: "py-2 px-4"
                        }
                    }}
                />
            </div>
        </nav>

    )
}