'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ShoppingCartSimple, MagnifyingGlass } from 'phosphor-react'

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <Image alt="Logo" src="/logo.svg" width={150} height={30}></Image>
      <nav>
        <ul className="flex select-none list-none items-center justify-center gap-8 text-sm">
          <li className="hover:text-primary text-black duration-300">
            <Link href="#">About us</Link>
          </li>
          <li className="hover:text-primary text-black duration-300">
            <Link href="#">Our Product</Link>
          </li>
          <li className="hover:text-primary text-black duration-300">
            <Link href="#">Delivery</Link>
          </li>
        </ul>
      </nav>
      <section className="flex items-center justify-center gap-6">
        <label className="flex items-center justify-center gap-2 rounded-2xl bg-white pl-4">
          <MagnifyingGlass size={32} className="cursor-pointer" />
          <input
            type="text"
            placeholder="Cappuccino"
            className="w-full rounded-r-2xl border-2 border-white px-4 py-2 placeholder:font-medium focus:!outline-none "
          ></input>
        </label>
        <ShoppingCartSimple size={32} className="cursor-pointer" />
      </section>
    </header>
  )
}
