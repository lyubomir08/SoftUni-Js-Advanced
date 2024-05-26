function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    let textAreaRef = document.querySelector('textarea');
    let bestRestaurantRef = document.querySelector('#bestRestaurant p');
    let workersRef = document.querySelector('#workers p');

    function onClick() {
        let data = textAreaRef.value;
        let restaurantData = JSON.parse(data);
        let result = {};

        for (let el of restaurantData) {
            let [restaurantName, workerList] = el.split(' - ');

            if (!result.hasOwnProperty(restaurantName)) {
                result[restaurantName] = {
                    avgSalary: 0,
                    bestSalary: 0,
                    workers: []
                };
            }

            let workersData = workerList.split(', ');
            let newWorkers = createWorkerList(workersData);
            result[restaurantName].workers = concatWorkers(result[restaurantName].workers, newWorkers);

            let restaurantSalaryData = calculateRestaurantSalaryData(result[restaurantName].workers);

            result[restaurantName].avgSalary = restaurantSalaryData.avgSalary;
            result[restaurantName].bestSalary = restaurantSalaryData.bestSalary;
        }

        let [bestRestaurantName, bestRestaurantData] = findBestRestaurant(result);

        bestRestaurantRef.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurantData.avgSalary.toFixed(2)} Best Salary: ${bestRestaurantData.bestSalary.toFixed(2)}`;

        let buff = '';
        bestRestaurantData.workers.sort((a, b) => b.salary - a.salary).forEach(x => {
            buff += `Name: ${x.name} With Salary: ${x.salary} `;
        });

        workersRef.textContent = buff.trim();
    }

    function findBestRestaurant(restaurants) {
        return Object.entries(restaurants).sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];
    }

    function createWorkerList(data) {
        let result = [];

        for (let el of data) {
            let [workerName, salary] = el.split(' ');
            salary = Number(salary);
            let worker = {name: workerName, salary: salary};
            result.push(worker);
        }

        return result;
    }

    function concatWorkers(currentWorkerList, newWorkerList) {
        return currentWorkerList.concat(newWorkerList);
    }

    function calculateRestaurantSalaryData(workerList) {
        let result = {
            avgSalary: 0,
            bestSalary: 0
        };

        let sum = 0;
        for (let el of workerList) {
            let {name, salary} = el;
            salary = Number(salary);
            if (result.bestSalary < salary) {
                result.bestSalary = salary;
            }
            sum += salary;
        }
        result.avgSalary = sum / workerList.length;
        
        return result;
    }
}