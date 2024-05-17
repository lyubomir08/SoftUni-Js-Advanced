function pieceOfPie(arr, firstFav, secondFav) {
    let result = [];

    let idxFirstFav = arr.indexOf(firstFav);
    let idxSecondFav = arr.indexOf(secondFav);

    for (let i = idxFirstFav; i <= idxSecondFav; i++) {
        result.push(arr[i]);
    }

    return result;
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');