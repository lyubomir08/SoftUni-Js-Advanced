function constructionCrew(worker) {
    if (!worker.dizziness) {
        return worker;
    }

    worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
    worker.dizziness = false;
    return worker;
}

console.log(constructionCrew({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true }));
// constructionCrew({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true });