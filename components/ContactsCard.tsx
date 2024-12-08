import Image from 'next/image'
import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
interface ContactsCardProps {
    profilePictureUrl: string,
    phNo: string,
    name: string,
    verified: boolean
}

const ContactsCard: React.FC<ContactsCardProps> = ({ profilePictureUrl, phNo, name, verified }) => {
    return (
        <div className=' bg-[#9747FF] h-auto w-full p-2 flex justify-around rounded-lg mt-5' style={{ backgroundColor: "rgba(151, 71, 255, 0.1)" }}>

            <div className=' flex left-0'>

                <div className=' mr-3'>
                    <Avatar>
                        <AvatarImage src={profilePictureUrl} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>


                <div>
                    <p className=' text-[0.9rem] font-bold'>{name}</p>
                    <p className=' text-[0.5rem] '>(+91) {phNo}</p>
                </div>

            </div>


            <div className=' flex justify-between w-[20%]'>

                {verified && 
                    <Image
                    src='/assets/verified.png'
                    alt='verified'
                    width={20}
                    height={20}
                    style={{ objectFit: 'contain' }}
                />
                }
                
                <Image
                    src='/assets/phone.png'
                    alt='call'
                    width={23}
                    height={23}
                    style={{ objectFit: 'contain' }}
                />
            </div>



        </div>
    )
}

export default ContactsCard