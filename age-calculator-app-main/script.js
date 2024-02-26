document.getElementById('ageForm').addEventListener('submit', (event) => {
    event.preventDefault(); //prevent form from submitting

    // Retrieve input values
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;

    //Data Validation
        //EMPTY
        //INVALID

    // MM/DD/YYYY
    var birthday = new Date(`${month}/${day}/${year}`)
    var today = new Date()
    
    // Log values to the console or use them in your application
    console.log(birthday);
    console.log(today);

    //Calculate Birthday into
    var age = {
        'years': (today.getFullYear() - birthday.getFullYear()),
        'months': (today.getMonth() - birthday.getMonth()),
        'days': (today.getDate() - birthday.getDate()),
    }
    
    console.log(age);
})
