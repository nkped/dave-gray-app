import React from 'react'
import type { Metadata } from "next"

export const metaData: Metadata = {
    title: 'Users'
}

import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'


export default async function UsersPage() {
    const userData: Promise<User[]> = getAllUsers()
    const users = await userData

    const content = (
        <section>
            <h2>
                <Link href='/'>Back to home</Link>
            </h2>
            <br />  
            {users.map((user) => {
                return (
                    <>
                    <p key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name} </Link>
                    </p>
                    <br />
                    </>
                )
            })}
        </section>
    )

  return content
}
