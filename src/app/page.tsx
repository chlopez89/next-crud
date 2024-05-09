import React from 'react'
import prisma from "@/lib/prisma"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import clsx from 'clsx'
import TaskCard from '@/components/task-card'


async function HomePage() {
  const tasks = await prisma.task.findMany()

  console.log({tasks});
  return (
    <div className='grid grid-cols-3 gap-4'>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      
      ))}

    </div>
  )
}

export default HomePage