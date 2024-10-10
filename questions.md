1. Discuss your strategy and decisions implementing the application.Please,consider time complexity, effort cost, technologies used and any other variable that you understand important on your development process.
- I've tried to keep the project as simple as possible to achieve the result. So using the same language for the backend and for the frontend, using `React Bootstrap` without any customization to just generate a good-looking UI, `express` to quickly create a simple `API`. Besides that during the process I created some endpoints that are useless to the test but building those created some base functions that are reused on the real endpoints. And since this does not use a database I tried to use the least amount of loops like cascading filters and maps to reduce processing time for bigger datasets and I also extracted blocks of repetitive code to generic functions.

2. How would you change your solution to account for future columns that might be requested, such as “Bill Voted On Date” or “Co-Sponsors”?
- Depending on the data structure it would require this data to be properly returned throw the `/bills/results` endpoint and some minor UI changes to add it to the result table

3. How would you change your solution if instead of receiving CSVs of data, you were given a list of legislators or bills that you should generate a CSV for?
- I would create a new function to convert a generic ( so enabling multiple data types like legislators or bills) dataset and enable the user to download the result.

4. How long did you spend working on the assignment?
- Somewhat hard to have a precise time since I was doing it during my free time, here and there. But I believe I took 3 hours or close to it