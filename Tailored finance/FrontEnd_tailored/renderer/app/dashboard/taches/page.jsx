'use client';
import { ClipboardList, AlertCircle, ClipboardCheck, Loader } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import TaskStat from '@/components/components/taskStat';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TaskScreen() {
    const tasks = [
        { id: 1, name: "Task 1", status: "En attente", deadline: "2024-11-25" },
        { id: 2, name: "Task 2", status: "En retard", deadline: "2024-11-18" },
        { id: 3, name: "Task 3", status: "En attente", deadline: "2024-11-28" },
        { id: 4, name: "Task 4", status: "En retard", deadline: "2024-11-15" },
        { id: 5, name: "Task 5", status: "Complétée", deadline: "2024-11-10" },
    ];

    return (
        <div className="flex flex-col mb-28 px-12 justify-center items-center space-y-8">
            {/* Statistics Section */}
            <div className="p-4 max-w-4xl space-x-5 flex flex-row justify-center items-center rounded-lg shadow-lg bg-white">
                <TaskStat title="Nombre total de tâches" value={15} icon={ClipboardList} />
                <Separator className="bg-customGrey h-16 hidden md:block" orientation="vertical" />
                <TaskStat title="Tâches en retard" value={3} icon={AlertCircle} />
                <Separator className="bg-customGrey h-16 hidden md:block" orientation="vertical" />
                <TaskStat title="Tâches en attente" value={12} icon={Loader} />
            </div>

            {/* Tabs Section */}
            <div className="w-full flex items-center justify-center">
                <Tabs defaultValue="Tous" className="w-full">
                    {/* Tabs Navigation */}
                    <TabsList className="flex justify-center space-x-4">
                        <TabsTrigger value="Tous">Tous</TabsTrigger>
                        <TabsTrigger value="attente">En attente</TabsTrigger>
                        <TabsTrigger value="retard">En retard</TabsTrigger>
                        <TabsTrigger value="completees">Complétées</TabsTrigger>
                    </TabsList>

                    {/* Tab Contents */}
                    <TabsContent value="Tous">
                        <TaskList tasks={tasks} />
                    </TabsContent>
                    <TabsContent value="attente">
                        <TaskList tasks={tasks.filter((task) => task.status === 'En attente')} />
                    </TabsContent>
                    <TabsContent value="retard">
                        <TaskList tasks={tasks.filter((task) => task.status === 'En retard')} />
                    </TabsContent>
                    <TabsContent value="completees">
                        <TaskList tasks={tasks.filter((task) => task.status === 'Complétée')} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}

/* Task List Component */
function TaskList({ tasks }) {
    return (
        <div className="mt-5">
            {tasks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className="p-4 rounded-lg shadow-md bg-white flex flex-col space-y-2"
                        >
                            <h3 className="font-bold text-gray-800 text-lg">{task.name}</h3>
                            <p className="text-sm text-gray-500">
                                Deadline: <span className="font-medium text-gray-700">{task.deadline}</span>
                            </p>
                            <span
                                className={`inline-block px-3 py-1 text-sm font-semibold rounded-md ${
                                    task.status === 'En retard'
                                        ? 'bg-red-100 text-red-600'
                                        : task.status === 'En attente'
                                        ? 'bg-yellow-100 text-yellow-600'
                                        : 'bg-green-100 text-green-600'
                                }`}
                            >
                                {task.status}
                            </span>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">Aucune tâche à afficher.</p>
            )}
        </div>
    );
}
