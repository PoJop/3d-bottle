import { LogoIcon } from "@/shared/assets"
import { BagIcon } from "@/shared/assets/icons"
import { Container } from "@/shared/ui-kit"
import Link from "next/link"
import React from "react"

interface IHeaderProps {
}

export const Header: React.FC<IHeaderProps> = () => {

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-[1200] ">
                <Container className="flex items-center justify-between ">
                    <div className="h-[35px] w-[100px]">
                        <LogoIcon className="text-[#fff]" />
                    </div>
                    <div>
                        <nav className="py-4">
                            <ul className="flex gap-10">
                                {["home", "catalog", "blog"].map((item, idx) =>
                                    <li key={idx} className="uppercase text-[16px] font-[300] text-white">
                                        <Link href={'/'}>
                                            {item}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <button className="w-[25px] h-[25px] p-1">
                            <BagIcon className="text-white" />
                        </button>
                    </div>
                </Container>
            </header>
        </>
    )
}