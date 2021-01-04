var tableData = [{
    'first_name': 'Revina',
    'address': 'Jakarta',
    'number': '1',
    'gender' : 'Female',
    'hobby' : 'Running',
    'religion' : 'Islam',
},
{
    'first_name': 'Matt',
    'address': 'Hasselbeck',
    'number': '2',
    'gender' : 'Male',
    'hobby' : 'Reading',
    'religion' : 'Protestan',
},
{
    'first_name': 'Jim',
    'address': 'Zorn',
    'number': '3',
    'gender' : 'Female',
    'hobby' : 'Reading',
    'religion' : 'Katholik',
},
{
    'first_name': 'Brady',
    'address': 'Quinn',
    'number': '4',
    'gender' : 'Male',
    'hobby' : 'Swimming',
    'religion' : 'Hindu',
},
{
    'first_name': 'Charly',
    'address': 'Whitehurst',
    'number': '5',
    'gender' : 'Male',
    'hobby' : 'Reading',
    'religion' : 'Protestan',
},
{
    'first_name': 'Duane',
    'address': 'Devine',
    'number': '6',
    'gender' : 'Male',
    'hobby' : 'Reading',
    'religion' : 'Protestan',
},
{
    'first_name': 'Tom',
    'address': 'Brady',
    'number': '7',
    'gender' : 'Female',
    'hobby' : 'Running',
    'religion' : 'Hindu',
},
{
    'first_name': 'Arron',
    'address': 'Rogers',
    'number': '8',
    'gender' : 'Male',
    'hobby' : 'Singing',
    'religion' : 'Islam',
},
{
    'first_name': 'Patrick',
    'address': 'Mahoms',
    'number': '9',
    'gender' : 'Male',
    'hobby' : 'Swimming',
    'religion' : 'Katholik',
},
{
    'first_name': 'Gardner',
    'address': 'Minshew',
    'number': '10',
    'gender' : 'Male',
    'hobby' : 'Reading',
    'religion' : 'Protestan',
},
{
    'first_name': 'Andrew',
    'address': 'Luck',
    'number': '11',
    'gender' : 'Male',
    'hobby' : 'Reading',
    'religion' : 'Katholik',
},
{
    'first_name': 'Josh',
    'address': 'Gordon',
    'number': '12',
    'gender' : 'Male',
    'hobby' : 'Singing',
    'religion' : 'Hindu',
},
{
    'first_name': 'Drew',
    'address': 'Brees',
    'number': '13',
    'gender' : 'Female',
    'hobby' : 'Swimming',
    'religion' : 'Islam',
},
{
    'first_name': 'Cam',
    'address': 'Newton',
    'number': '14',
    'gender' : 'Female',
    'hobby' : 'Singing',
    'religion' : 'Islam',
},
{
    'first_name': 'Joe',
    'address': 'Montana',
    'number': '15',
    'gender' : 'Female',
    'hobby' : 'Running',
    'religion' : 'Katholik',
},

{
    'first_name': 'Relly',
    'address': 'Depok',
    'number': '16',
    'gender' : 'Female',
    'hobby' : 'Swimming',
    'religion' : 'Islam',
},
{
    'first_name': 'Matt',
    'address': 'Hasselbeck',
    'number': '17',
    'gender' : 'Male',
    'hobby' : 'Singing',
    'religion' : 'Islam',
},
{
    'first_name': 'Jim',
    'address': 'Zorn',
    'number': '18',
    'gender' : 'Female',
    'hobby' : 'Running',
    'religion' : 'Budha',
},
{
    'first_name': 'Brady',
    'address': 'Quinn',
    'number': '19',
    'gender' : 'Male',
    'hobby' : 'Swimming',
    'religion' : 'Budha',
},
{
    'first_name': 'Charly',
    'address': 'Whitehurst',
    'number': '20',
    'gender' : 'Male',
    'hobby' : 'Singing',
    'religion' : 'Islam',
},
{
    'first_name': 'Duane',
    'address': 'Devine',
    'number': '21',
    'gender' : 'Female',
    'hobby' : 'Running',
    'religion' : 'Hindu',
},
{
    'first_name': 'Tom',
    'address': 'Brady',
    'number': '22',
    'gender' : 'Female',
    'hobby' : 'Singing',
    'religion' : 'Budha',
},
{
    'first_name': 'Arron',
    'address': 'Rogers',
    'number': '23',
    'gender' : 'Male',
    'hobby' : 'Swimming',
    'religion' : 'Hindu',
},
{
    'first_name': 'Patrick',
    'address': 'Mahoms',
    'number': '24',
    'gender' : 'Male',
    'hobby' : 'Swimming',
    'religion' : 'Katholik',
},
{
    'first_name': 'Gardner',
    'address': 'Minshew',
    'number': '25',
    'gender' : 'Female',
    'hobby' : 'Singing',
    'religion' : 'Islam',
},
{
    'first_name': 'Andrew',
    'address': 'Luck',
    'number': '26',
    'gender' : 'Male',
    'hobby' : 'Swimming',
    'religion' : 'Budha',
},
{
    'first_name': 'Josh',
    'address': 'Gordon',
    'number': '27',
    'gender' : 'Female',
    'hobby' : 'Swimming',
    'religion' : 'Islam',
},
{
    'first_name': 'Drew',
    'address': 'Brees',
    'number': '28',
    'gender' : 'Male',
    'hobby' : 'Reading',
    'religion' : 'Hindu',
},
{
    'first_name': 'Cam',
    'address': 'Newton',
    'number': '29',
    'gender' : 'Female',
    'hobby' : 'Singing',
    'religion' : 'Islam',
},
{
    'first_name': 'Joe',
    'address': 'Montana',
    'number': '30',
    'gender' : 'Male',
    'hobby' : 'Running',
    'religion' : 'Budha',
},
]


/*
1 - Loop Through Array & Access each value
2 - Create Table Rows & append to table
*/


var state = {
'querySet': tableData,

'page': 1,
'rows': 5, // one page contains 5 data
'window': 3,
}

buildTable()

function pagination(querySet, page, rows) {

var trimStart = (page - 1) * rows
var trimEnd = trimStart + rows

var trimmedData = querySet.slice(trimStart, trimEnd)

var pages = Math.round(querySet.length / rows);

return {
    'querySet': trimmedData,
    'pages': pages,
}
}

function pageButtons(pages) {
var wrapper = document.getElementById('pagination-wrapper')

wrapper.innerHTML = ``
console.log('Pages:', pages)

var maxLeft = (state.page - Math.floor(state.window / 2))
var maxRight = (state.page + Math.floor(state.window / 2))

if (maxLeft < 1) {
    maxLeft = 1
    maxRight = state.window
}

if (maxRight > pages) {
    maxLeft = pages - (state.window - 1)
    
    if (maxLeft < 1){
        maxLeft = 1
    }
    maxRight = pages
}

for (var page = maxLeft; page <= maxRight; page++) {
    wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
}

if (state.page != 1) {
    wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
}

if (state.page != pages) {
    wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
}

$('.page').on('click', function() {
    $('#table-body').empty()

    state.page = Number($(this).val())

    buildTable()
})

}


function buildTable() {
var table = $('#table-body')

var data = pagination(state.querySet, state.page, state.rows)
var myList = data.querySet

for (var i = 1 in myList) {
    //Keep in mind we are using "Template Litterals to create rows"
    var row = `<tr>
              <td>${myList[i].number}</td>
              <td>${myList[i].first_name}</td>
              <td>${myList[i].address}</td>
              <td>${myList[i].gender}</td>
              <td>${myList[i].hobby}</td>
              <td>${myList[i].religion}</td>
              `
    table.append(row)
}

pageButtons(data.pages)
}
