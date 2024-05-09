import React from 'react'
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
import { Task } from '@prisma/client'

function TaskCard({task} : {task: Task}) {
    return (
    <div>
        <Card>
            <CardHeader className='flex flex-row justify-between'>
            <CardTitle>{task.name}</CardTitle>
            <Badge className={
                clsx({
                "bg-orange-500": task.priority === "High",
                "bg-yellow-500": task.priority === "Medium", 
                "bg-green-500": task.priority === "Low",
                "bg-red-500": task.priority === "Urgente",
                })
                }>{task.priority}</Badge>
            </CardHeader>
            <CardContent>
                <p>{task.description}</p>
                <span className='text-slate-500'>{new Date(task.createAt).toDateString()}</span>
            </CardContent>
            <CardFooter className="flex gap-x-2 justify-end">
            <Button variant="destructive">Delete</Button>
            <Button>Edit</Button>
            </CardFooter>
        </Card>
    </div>
    )
}

export default TaskCard