export function groupBy(people, key) {
  const grouped = {};
  people.forEach(function (person) {
    if (grouped[person[key]] == undefined) {
      grouped[person[key]] = [person]
    }
    else {
      grouped[person[key]].push(person)
    }
  })
  return grouped
}

export function groupBySex(people) {
  return groupBy(people, 'sex')
}

export function groupByYearThenSex(people) {
  var groupedByYear = groupBy(people, 'born')
  for (const year in groupedByYear) {
    groupedByYear[year] = groupBy(groupedByYear[year], 'sex')
  }
  return groupedByYear
}
