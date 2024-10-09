"use client"

import { useCartStore } from "@/stores/cartStore"
import dynamic from "next/dynamic"
import { useTransition } from "react"

const CartSheet = dynamic(() => import("./cart-sheet").then((mod) => mod.CartSheet))

export function Cart() {
  const [isPending] = useTransition()
  const { isOpen, isSheetLoaded, openCart, closeCart } = useCartStore()
  
 

  return isSheetLoaded && <CartSheet isPending={isPending} isOpen={isOpen} onCartOpen={openCart} onCartClose={closeCart} />
}