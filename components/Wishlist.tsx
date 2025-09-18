"use client"
import { useState } from 'react'
import React from 'react'

const Wishlist = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [inputMode, setInputMode] = useState(0)
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')

    const onUserSubscribe = async () => {
        const result = await fetch("/api/maillist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, firstName }),
        });

        console.log({ result })

        setInputMode(0);
        setIsSubscribed(true);
    }

    const activateInputMode = () => setInputMode(1)

    const switchToEmailInput = () => setInputMode(2)


    return (
        <div className='flex items-center justify-center'>
            {inputMode === 1 ? (
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-center'>
                    <input
                        placeholder='What is your first name?'
                        value={firstName}
                        type='text'
                        className='px-4 py-1.5 bg-black/20 border border-emerald-500/20 text-white focus:outline-none'
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <button 
                        disabled={firstName.length < 3} 
                        onClick={switchToEmailInput} 
                        className='px-4 w-full disabled:opacity-50 cursor-pointer duration-200 py-2 bg-orange-400 hover:bg-orange-400/80'>Enter Email</button>
                </div>
            )
                : inputMode === 2 ? (
                    <div className='flex flex-col sm:flex-row gap-2 sm:gap-0 items-center'>
                        <input
                            placeholder='What is your email?'
                            value={email}
                            type='email'
                            className='px-4  py-1.5 bg-black/20 border border-emerald-500/20 text-white focus:outline-none'
                            onChange={e => setEmail(e.target.value)}
                        />
                        <button
                            onClick={onUserSubscribe}
                            className='px-4 w-full cursor-pointer duration-200 py-2 bg-orange-400 hover:bg-orange-400/80'>
                            Subscribe
                        </button>
                    </div>
                )
                    : isSubscribed ? (
                        <div>
                            <p className='text-white text-lg text-center'>Thank you for subscribing! You'll be the first to know when we launch.</p>
                        </div>
                    ) : (
                        <div>
                            <button onClick={activateInputMode} className='bg-emerald-300/30 cursor-pointer border border-emerald-500/20 text-white px-6 py-3 rounded-full mt-4 backdrop-blur-sm hover:bg-emerald-300/20 transition relative'>
                                Join the Hustle Early &rarr;
                            </button>
                        </div>
                    )}
        </div>
    )
}

export default Wishlist