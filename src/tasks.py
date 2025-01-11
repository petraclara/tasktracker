def sort_tasks(tasks):
    priority_order = {"High": 1, "Medium": 2, "Low": 3}
    return sorted(tasks, key=lambda task: priority_order[task['priority']])
