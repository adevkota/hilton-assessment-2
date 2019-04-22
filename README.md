## Steps to run locally:

prereq: have project locally (git clone or download)

1) install the dependencies: npm install
2) run the start scrip: npm run start
3) to run tests: npm run test

( developed using node v10.14.2/npm v 6.4.1)

## Assumptions:
1) form elements(checkbox, select dropdown) looked like browser default so left them as such. This means they may look different in different browsers.
2) state persisted by writing and reading from localstorage.
3) did not make use of thunk for persisting redux state because the task was small enough where it was not required. However, the save functionality can be done using a thunk as well.
4) colors were picked using paint3D, other css attributes were guessed based on the screenshot.
5) wrote more functional tests than ui specific one as I am relying more on snapshot testing for the ui. Assumption is if a snapshot fails, we check that ui manually before updating the snapshot. 