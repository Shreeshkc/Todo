//Suppose we want to access only isActive jobs.

const jobs=[
    {id:1, isActive: true},
    {id:2, isActive: true},
    {id:2, isActive: false},
];
const activeJobs = jobs.filter(job=> job.isActive);

//Mapping
const colors= ['red','blue','green'];
const items = colors.map(color=>`${color}`)
console.log(items);

//Destructuring

const address=[
    street='',
    city='',
    country='',
];

const street = address.street;
const city = city.address;// esari address gardai sablai access garnu parxa so we use destructing to solve it.
