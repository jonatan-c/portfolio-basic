import { skillsBackend, skillsDevops, skillsFrontend, skillsOther } from '@/data'
import React from 'react'

const Skills = () => {
  return (
    
    <div className='w-full  text-base '>
        <div className='flex flex-wrap  mx-0  text-base   w-fit'>
            <div className='text-center  font-medium mr-2 px-2.5 py-1 my-1 "'>Frontend:</div> 
        {
            skillsFrontend.map((skill, index) => (
                <div key={index} className="text-center bg-gray-100  text-gray-800  font-medium mr-2 px-2.5 py-1 my-1 rounded-full dark:bg-gray-700 dark:text-gray-300">{skill.name}</div>

            ))
        }
        </div>
        <div className='flex flex-wrap  mx-0   w-fit'>
            <div className='text-center   font-medium mr-2 px-2.5 py-1 my-1 "'>Backend:</div> 
        {
            skillsBackend.map((skill, index) => (
                <div key={index} className="text-center bg-gray-100  text-gray-800  font-medium mr-2 px-2.5 py-1 my-1 rounded-full dark:bg-gray-700 dark:text-gray-300">{skill.name}</div>

            ))
        }
        </div>
        <div className='flex flex-wrap  mx-0   w-fit'>
            <div className='text-center   font-medium mr-2 px-2.5 py-1 my-1 "'>DevOps:</div> 
        {
            skillsDevops.map((skill, index) => (
                <div key={index} className="text-center bg-gray-100  text-gray-800  font-medium mr-2 px-2.5 py-1 my-1 rounded-full dark:bg-gray-700 dark:text-gray-300">{skill.name}</div>

            ))
        }
        </div>
        <div className='flex flex-wrap  mx-0   w-fit'>
            <div className='text-center   font-medium mr-2 px-2.5 py-1 my-1 "'>Others:</div> 
        {
            skillsOther.map((skill, index) => (
                <div key={index} className="text-center bg-gray-100  text-gray-800  font-medium mr-2 px-2.5 py-1 my-1 rounded-full dark:bg-gray-700 dark:text-gray-300">{skill.name}</div>

            ))
        }
        </div>
    </div>
  )
}

export default Skills