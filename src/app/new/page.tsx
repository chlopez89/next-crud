import { TaskForm } from "./task-form"

async function NewPage() {
    return (
        <div className="flex justify-center items-center h-screen">
            <TaskForm/>
        </div>
    )
}

export default NewPage