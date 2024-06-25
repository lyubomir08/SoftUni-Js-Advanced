class HomeRenovation {
    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        if (cost > this.budget) {
            return (`Not enough budget to add '${description}' task.`);
        }

        this.budget -= cost;
        this.tasks.push({ description, cost, priority });
        return `The task '${description}' has been successfully added to the renovation plan.`;
    }

    markTaskAsCompleted(description) {
        let taskIndex = this.tasks.findIndex((task) => task.description === description);

        if (taskIndex === -1) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }

        let completedTask = this.tasks.splice(taskIndex, 1)[0];
        this.completedTasks.push(completedTask);
        return `The task '${description}' has been successfully completed.`;
    }


    getPriorityTasksCount(minimalPriority) {
        if (minimalPriority <= 0) {
            return ("The priority cannot be zero or negative.");
        }

        let filteredTasks = this.tasks.filter((task) => task.priority >= minimalPriority);

        if (filteredTasks.length === 0) {
            return `No tasks found with priority ${minimalPriority} or higher.`;
        }

        return `You have ${filteredTasks.length} tasks to prioritize.`;
    }

    renovationSummary() {
        if (this.completedTasks.length === 0) {
            throw new Error("No tasks have been completed yet!");
        }

        let result = [];
        result.push(`Budget left $${this.budget}.`);
        result.push(`You have completed ${this.completedTasks.length} tasks.`);
        result.push("Pending tasks in the renovation plan:");

        this.tasks.forEach((task) => {
            result.push(`${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`);
        });

        return result.join("\n");
    }
}