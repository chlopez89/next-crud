import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import prisma  from "@/lib/prisma";
import { redirect } from "next/navigation"

export function TaskForm() {
    async function createTask(formData: FormData) {
        "use server"
        const taskname = formData.get("taskname")?.toString()
        const description = formData.get("description")?.toString()
        const priority = formData.get("priority")?.toString()

        console.log({taskname, description, priority})

        if (!taskname || !description || !priority ){
            return;
        }

        const newTask = await prisma.task.create({
            data: {
                name:taskname,
                description,
                priority,
            }
        })
        console.log({newTask});

        redirect('/')

    }
    return (
        <form action={createTask}>
        <Card className="w-[350px]">
            <CardHeader>
            <CardTitle>Create New Task</CardTitle>
            <CardDescription>Fill out form below to create a new task.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="taskname">Task Name</Label>
                    <Input name="taskname" id="taskname" placeholder="Name of your task" />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="description">Description</Label>
                    <Textarea name="description" id="description" placeholder="Name of your description" />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="priority">Priority</Label>
                    <Select name="priority">
                        <SelectTrigger id="priority">
                            <SelectValue placeholder="Select Priority" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="Low">Low</SelectItem>
                            <SelectItem value="Medium">Medium</SelectItem>
                            <SelectItem value="High">High</SelectItem>
                            <SelectItem value="Urgente">Urgente</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Create task</Button>
            </CardFooter>
        </Card>
        </form>
    )
}
