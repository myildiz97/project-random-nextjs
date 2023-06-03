

"use client"

import { useState, useEffect } from "react"

import { useRouter } from "next/navigation"

import Counter from "@components/Counter"

const Page = () => {
    const router = useRouter()
    

    return <Counter />
    
}

export default Page
