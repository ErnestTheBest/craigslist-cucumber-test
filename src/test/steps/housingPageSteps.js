const assert = require('assert')
const HousingPage = require('../support/page-objects/housingPage')
const sortValues = require('../support/data/housingSortingOptions')
const housingPage = new HousingPage()

const { Given } = require('cucumber')
const { Then } = require('cucumber')
const { When } = require('cucumber')

Given(
  /^I open housing page$/,
  () => {
    housingPage.open()
  }
)

Then(
  /^I see correct sorting options (before|after) search is used$/,
  type => {
    const sortingOptions = housingPage.getAvailableSortingOptions()
    assert.ok(sortingOptions.includes(sortValues.priceAscending), `Sorting options do not contain : ${sortValues.priceAscending}`)
    assert.ok(sortingOptions.includes(sortValues.priceDescending), `Sorting options do not contain : ${sortValues.priceDescending}`)
    assert.ok(sortingOptions.includes(sortValues.newest), `Sorting options do not contain : ${sortValues.newest}`)

    if (type === 'before') {
      assert.ok(sortingOptions.length === 3, 'Sorting contains some extra values')
    } else {
      assert.ok(sortingOptions.includes(sortValues.relevant), `Sorting options do not contain : ${sortValues.relevant}`)
      assert.ok(sortingOptions.includes(sortValues.upcoming), `Sorting options do not contain : ${sortValues.upcoming}`)
      assert.ok(sortingOptions.length === 5, 'Sorting contains some extra values')
    }
  }
)

Then(
  /^I see items are sorted (ascending|descending)$/,
  sorting => {
    if (sorting === 'ascending') {
      assert.ok(housingPage.assertHousingEntriesSortedAscending(), 'Housing page items are not sorted ascending')
    } else {
      assert.ok(housingPage.assertHousingEntriesSortedDescending(), 'Housing page items are not sorted descending')
    }
  }
)

When(
  /^I search for "([^"]*)" on housing page$/,
  searchText => {
    housingPage.searchFor(searchText)
  }
)

When(
  /^I sort items (ascending|descending)$/,
  sorting => {
    if (sorting === 'ascending') {
      housingPage.sortAscending()
    } else {
      housingPage.sortDescending()
    }
  }
)
