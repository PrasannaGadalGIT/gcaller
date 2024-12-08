"use client"
import React, { useEffect, useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from 'next/image'

import ContactsCard from '@/components/ContactsCard'
import TextCard from '@/components/TextCard'
import Search from '@/components/Search'

interface Contact {
  id: number;
  profilePictureUrl: string;
  phNo: string;
  name: string;
  verified : boolean;
}

const Contacts = () => {
  const contacts: Contact[] = [
    {
      id: 1,
      profilePictureUrl: "/assets/pp.png",
      phNo: "+1234567890",
      name: "John Doe",
      verified : true,
    },
    {
      id: 2,
      profilePictureUrl: "/assets/pp.png",
      phNo: "+1987654321",
      name: "Jane Smith",
      verified : true,
    },
    {
      id: 3,
      profilePictureUrl: "/assets/pp.png",
      phNo: "+1987654321",
      name: "Jane Smith",
      verified : true,
    },
    {
      id: 4,
      profilePictureUrl: "/assets/pp.png",
      phNo: "+1987654321",
      name: "Jane Smith",
      verified : true,
    },
    {
      id: 5,
      profilePictureUrl: "/assets/pp.png",
      phNo: "+1987654321",
      name: "Jane Smith",
      verified : true,
    },
    {
      id: 6,
      profilePictureUrl: "/assets/pp.png",
      phNo: "+1987654321",
      name: "Jane Smith",
      verified : false,
    },
    {
      id: 7,
      profilePictureUrl: "/assets/pp.png",
      phNo: "+1987654321",
      name: "Jane Smith",
      verified : false,
    },
    {
      id: 8,
      profilePictureUrl: "/assets/pp.png",
      phNo: "+1987654321",
      name: "Jane Smith",
      verified : false,
    },
    {
      id: 9,
      profilePictureUrl: "/assets/pp.png",
      phNo: "+1987654321",
      name: "Jane Smith",
      verified : true,
    },
    {
      id: 10,
      profilePictureUrl: "/assets/pp.png",
      phNo: "+1987654321",
      name: "Jane Smith",
      verified : true,
    },
    {
      id:11,
      profilePictureUrl: "/assets/pp.png",
      phNo: "+1987654321",
      name: "Jane Smith",
      verified : true,
    }

    // Add more contacts as needed
  ];

  const [isVerified, setIsVerified] = useState(true)
  
 

  return (
    <div className='bg-black min-h-screen pt-10 px-4 text-white'>
      <div className=' flex justify-between'>
        <h1 className=' tracking-wider font-bold'>Contacts</h1>
        <h1 className=' text-[#9747FF] font-poppins tracking-wider text-sm cursor-pointer'>+ Import Contacts</h1>
      </div>

    <Search/> 

    <div className=' flex w-[80%] justify-between mt-4'>
      <div onClick={() => setIsVerified(!isVerified)}>
      <TextCard text={'Verified'} style={isVerified ? { backgroundColor: "rgba(151, 71, 255, 0.3)" } : {}}/>
      </div>
      <div onClick={() => setIsVerified(!isVerified)}>
      <TextCard text={'Not Verified'} style={!isVerified ? { backgroundColor: "rgba(151, 71, 255, 0.3)" } : {}}/>
      </div>
      
     
    </div>

    <ScrollArea className="h-screen w-full rounded-md z-10">
        {contacts.map((contact, index) => {
          return (
            <div key={index}>
              {isVerified ? (
                contact.verified && (
                  <ContactsCard
                    profilePictureUrl={contact.profilePictureUrl}
                    phNo={contact.phNo}
                    name={contact.name}
                    verified={contact.verified}
                  />
                )
              ) : (
                !contact.verified && (
                  <ContactsCard
                    profilePictureUrl={contact.profilePictureUrl}
                    phNo={contact.phNo}
                    name={contact.name}
                    verified={contact.verified}
                  />
                )
              )}
            </div>
          );
        })}
      </ScrollArea>
    

    </div>
  )
}

export default Contacts


